import { useState, ChangeEvent } from 'react'
import { Button, Typography } from '@mui/material'

export function CustomisedImageUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleUpload = () => {
    if (selectedFile) {
      // Perform upload operation
      console.log('Uploading file:', selectedFile)
    }
  }

  return (
    <div>
      <input
        accept="image/*"
        id="upload-file"
        type="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="upload-file">
        <Button variant="contained" component="span">
          Choose Image
        </Button>
        <Typography>
          {selectedFile ? selectedFile.name : 'No file selected'}
        </Typography>
      </label>
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  )
}
