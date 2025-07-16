import { Asset } from "./model/Asset"

let assetStore: Record<string, Asset[]> = {}

export function insert(companyId: string, assets: Asset[]) {
    assetStore[companyId] ??= []
    assets.forEach(asset => assetStore[companyId].push(asset))
}

export function getAll(): Asset[] {
    return Object.values(assetStore)
        .flatMap(assets => Array.from(assets))
}

export function getAllForCompany(companyId: string) {
    return Array.from(assetStore[companyId] ?? [])
}

export function clearStore () {
    assetStore = {}
}