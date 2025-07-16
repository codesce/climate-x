import { AssetActions } from "../components/AssetActions"
import { AssetFilter } from "../components/AssetFilter"
import { AssetList } from "../components/AssetList"
import type { Asset } from "../model/Asset"
import './Assets.css'

type AssetsProps = {
    items: Asset[]
}

export function Assets (props: AssetsProps) {
    return <div className="assets">
        <AssetFilter />
        <AssetList {...props}/>
        <AssetActions />
    </div>
}