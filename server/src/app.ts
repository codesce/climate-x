import express, { Request, Response } from "express"
import multer from "multer"
import cors from "cors"
import { parseCSV, parseJson } from "./parsers"
import { getAll, getAllForCompany, insert } from "./store"

const app = express()

app.use(cors({
    origin: "http://localhost:5173"
}))

const upload = multer({ storage: multer.memoryStorage() })
const isSupportedFile = (fileName: string) => /\.(json|csv)$/i.test(fileName)


app.post("/assets/upload", upload.single("assetFile"), (req: Request, res: Response) => {
    const companyId = req.body?.companyId, file = req.file

    if (!companyId || !file) {
        return res.status(400).json({ error: "Missing companyId or file" })
    }

    if (!isSupportedFile(file.originalname)) {
        res.status(400).json({ error: "Unsupported file type" })
    }

    const fileContent = file.buffer.toString("utf-8")

    try {
        const assets = file.originalname.endsWith(".json")
            ? parseJson(fileContent)
            : parseCSV(fileContent)

        insert(companyId, assets)

        return res.status(201).json({ success: true, count: assets.length })
    } catch (err) {
        return res.status(400).json({ error: "Failed to parse file", details: err })
    }
})

app.get("/assets", (req: Request, res: Response) => {
    const companyId = typeof req.query.companyId === 'string' ? req.query.companyId : undefined
    return res.status(200).json(companyId ? getAllForCompany(companyId) : getAll())
})


export default app