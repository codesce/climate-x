import { Asset } from "@server/model/Asset"
import { parseCSV, parseJson } from "../../src/parsers"
import { describe, it, expect } from "vitest"

describe("Asset parsing tests", () => {

    describe("csv", () => {
        it("should successfully parse a valid csv", () => {
            const csv = `address,latitude,longitude\n123 Main St,40.7128,-74.0060\n456 Elm St,34.0522,-118.2437`

            const result = parseCSV(csv)

            expect(result).toHaveLength(2)

            expect(result[0]).toEqual<Asset>({
                address: "123 Main St",
                latitude: 40.7128,
                longitude: -74.006,
            })
        })

        it("should error if csv is invalid", () => {
            const csv = `blah,invalid-csv`
            expect(() => parseCSV(csv)).toThrowError
        })
    })

    describe("json", () => {
        it("should parse a valid json string", () => {
            const json: Asset[] = [
                { address: '123 Main St', latitude: 40.7128, longitude: -74.0060 },
                { address: '456 Elm St', latitude: 34.0522, longitude: -118.2437 }
            ]

            const result = parseJson(JSON.stringify(json))

            expect(result).toHaveLength(2)

            expect(result[0]).toEqual<Asset>({
                address: "123 Main St",
                latitude: 40.7128,
                longitude: -74.006,
            })
        })

        it("should error if invalid json string", () => {
            const json = `blah`
            expect(() => parseJson(json)).toThrowError
        })
    })

})