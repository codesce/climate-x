import { Asset } from "@server/model/Asset"
import { clearStore, getAll, getAllForCompany, insert } from "../../src/store"
import { beforeEach, describe, expect, it } from "vitest"

describe("Store tests", () => {

    const companyId = '123'
    const companyAssets: Asset[] = [
        { address: '123 Main St', latitude: 40.7128, longitude: -74.0060 },
        { address: '456 Elm St', latitude: 34.0522, longitude: -118.2437 }
    ] 

    const anotherCompanyId = '456'
    const anotherCompanyAssets: Asset[] = [
        { address: '9 Puddle Lane', latitude: 84.5887, longitude: -128.2658 }
    ]

    beforeEach(() => clearStore())

    it("should insert assets for a given company", () => {
        expect(getAll().length).toBe(0)
        insert(companyId, companyAssets)
        expect(getAll().length).toBe(2)
    })

    it("should get all assets for a given company", () => {
        expect(getAll().length).toBe(0)

        insert(companyId, companyAssets)
        insert(anotherCompanyId, anotherCompanyAssets)

        expect(getAllForCompany(companyId).length).toBe(2)
        expect(getAllForCompany(anotherCompanyId).length).toBe(1)
    })

    it("should get all assets", () => {
         expect(getAll().length).toBe(0)

        insert(companyId, companyAssets)
        insert(anotherCompanyId, anotherCompanyAssets)

        expect(getAll().length).toBe(3)
    })
})