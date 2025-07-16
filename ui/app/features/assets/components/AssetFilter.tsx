import { useState } from "react"
import { useSearchParams } from "react-router"
import './AssetFilter.css'

export function AssetFilter() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [companyId, setCompanyId] = useState(searchParams.get('companyId'))

    const handleFilter = (e) => {
        e.preventDefault()
        setSearchParams(companyId ? {companyId} : {})
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleFilter(e)
        }
    }

    const handleChange = (e) => {
        setCompanyId(e.target.value)
    }

    return <div className="asset-filters">
        <label>Filter:</label>
        <input type="text" 
                value={companyId as string ?? ''}
                placeholder="Company Id" 
                onChange={handleChange} 
                onBlur={handleFilter} 
                onKeyUp={handleKeyPress}
                /> 
    </div>
}