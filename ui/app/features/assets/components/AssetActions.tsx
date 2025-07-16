import { useNavigate } from "react-router"

export function AssetActions () {
    const navigate = useNavigate()

    const onAddClick = () => navigate('/upload')

    return <div className="asset-actions">
        <button type="button" className="primary" onClick={onAddClick}>Add</button>
    </div>
}