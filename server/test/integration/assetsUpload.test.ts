import { describe, it, expect } from "vitest"
import request from "supertest"
import path from "path"
import app from "../../src/app"
import { getAll } from "../../src/store"

describe("POST /assets/upload", () => {
  it("uploads a CSV file and returns parsed assets", async () => {
    const filePath = path.join(__dirname, "valid-assets.csv")

    const response = await request(app)
      .post("/assets/upload")
      .field("companyId", "acme-123")
      .attach("assetFile", filePath)

    expect(response.status).toBe(201)
    expect(response.body.success).toBe(true)
    expect(response.body.count).toBe(2)

    expect(getAll().length).toBe(2)
  })

  it("fails if required fields are missing", async () => {
    const response = await request(app)
      .post("/assets/upload")

    expect(response.status).toBe(400)
    expect(response.body.error).toBeDefined()
  })

  it("fails if the uploaded file is invalid", async () => {
    const filePath = path.join(__dirname, "invalid-assets.csv")
    const response = await request(app)
      .post("/assets/upload")
      .field("companyId", "acme-123")
      .attach("assetFile", filePath)

    expect(response.status).toBe(400)
    expect(response.body.error).toBeDefined()
  })
})