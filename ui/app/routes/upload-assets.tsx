import { UploadAssets } from "~/features/assets/page/UploadAssets"
import type { Route } from "./+types/assets"


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Upload assets" }
  ]
}

export default function UploadAssetsRoute() {
  return <>
    <UploadAssets />
  </>
}
