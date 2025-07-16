import type { Asset } from "../model/Asset"
import './AssetList.css'

type AssetListProps = {
    items: Asset[]
}

export function AssetList (props: AssetListProps) {
    return <table className="asset-list">
        <thead>
          <tr>
            <th>Address</th>
            <th>Longitude</th>
            <th>Latitude</th>
          </tr>
        </thead>
        <tbody>
          {props.items?.map((asset) => {
            return <tr key={asset.address}>
              <td>{asset.address}</td>
              <td>{asset.longitude}</td>
              <td>{asset.latitude}</td>
            </tr>
          })}
          { props.items?.length === 0 && <tr><td colSpan={3}>No results found</td></tr>}
        </tbody>
      </table>
}