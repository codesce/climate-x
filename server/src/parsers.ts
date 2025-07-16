import { Asset } from "./model/Asset"
import Papa from "papaparse"

export type AssetParser = (fileContent: string) => Asset[]

export const parseCSV: AssetParser = (fileContent: string): Asset[] => {
    const results = Papa.parse<Asset>(fileContent, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
    })

    if (results.errors.length > 0) {
        throw new Error(`CSV parsing errors: ${JSON.stringify(results.errors)}`);
    }

    return results.data
}

export const parseJson: AssetParser = (fileContent: string): Asset[] => {
    try {
        return JSON.parse(fileContent)
    } catch {
        throw new Error("Invalid JSON")
    }
}