// same as backend model - duplicated for now :)
export type Asset = {
  address: string
  latitude: number
  longitude: number
}

export type AssetListResponse = Array<Asset>