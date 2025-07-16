import { useLoaderData } from "react-router"
import type { AssetListResponse } from "~/features/assets/model/Asset"
import { Assets } from "~/features/assets/page/Assets"
import type { Route } from "./+types/assets"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Assets" }
  ]
}

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const companyId = new URL(request.url).searchParams.get("companyId")

  const url = new URL("http://localhost:3001/assets")
  companyId && url.searchParams.set("companyId", companyId) //filter if exists

  const res = await fetch(url)
  return res.json() as Promise<AssetListResponse>
}

export default function AssetsRoute() {
  const assets = useLoaderData()

  return <>
    <Assets items={assets} />
  </>
}
