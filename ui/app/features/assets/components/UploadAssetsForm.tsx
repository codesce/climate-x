import { useState } from "react"
import './UploadAssetsForm.css'
import { useNavigate } from "react-router"

export function UploadAssetsForm () {
    const navigate = useNavigate()

    const [companyId, setCompanyId] = useState('')
    const [file, setFile] = useState(null)
    const [uploading, setUploading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!companyId || !file) {
            return
        }

        const formData = new FormData()
        formData.append('companyId', companyId)
        formData.append('assetFile', file)

        try {
            setUploading(true)
            const response = await fetch('http://localhost:3001/assets/upload', {
                method: 'POST',
                body: formData,
            })

            if (response.status !== 201) {
                const json = await response.json()
                throw new Error(json.error)
            }
            
            navigate('/')
        } catch (error) {
            setErrorMessage(`Upload failed: ${error}`)
        } finally {
            setUploading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="upload-assets-form">
            <span className="error-message">{errorMessage}</span>

            <fieldset>
                <label htmlFor="companyId">Company ID</label>
                <input
                    type="text"
                    id="companyId"
                    value={companyId}
                    onChange={(e) => setCompanyId(e.target.value)}
                    required
                />

                <label htmlFor="file">Upload File</label>
                <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                />
            </fieldset>

            <div className="actions">
                <button type="submit" disabled={uploading} className="primary">
                    {uploading ? 'Uploading...' : 'Upload'}
                </button>
                <button type="button" onClick={() => navigate('/')}>Back</button>
            </div>
        </form>
    )
}