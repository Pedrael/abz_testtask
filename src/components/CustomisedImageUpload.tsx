import { useState, ChangeEvent } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { fontColor, fontSecondaryColor, textFieldBorder } from '../contstants'
import { truncateString } from '../util'
import { ImageData } from '../types'
interface CustomisedImageUploadProps {
  onImageLoad: (imageData: ImageData) => void
}

export const CustomisedImageUpload = ({
  onImageLoad,
}: CustomisedImageUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSelected, setSelected] = useState<boolean>(false)

  const handleFileChange = ({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    if (files && files.length > 0) {
      const file: File = files[0]
      setSelectedFile(file)
      setSelected(true)
      const imageData: ImageData = {
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
      }
      onImageLoad(imageData)
    }
  }

  return (
    <Box mt="47px" mb="50px">
      <input
        accept="image/*"
        id="upload-file"
        type="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <label
        htmlFor="upload-file"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          border: `1px solid ${textFieldBorder}`,
          boxSizing: 'border-box',
          borderRadius: '4px',
          width: '380px',
          height: '54px',
          fontSize: '16px',
          color: `${isSelected ? fontColor : fontSecondaryColor}`,
        }}
      >
        <Button
          variant="outlined"
          component="span"
          color="info"
          sx={{
            color: fontColor,
            height: '100%',
            fontSize: '16px',
            textTransform: 'capitalize',
            margin: '-2px',
            marginRight: '16px',
            borderColor: `${fontColor}`,
            padding: '15px',
            borderRadius: '4px 0 0 4px',
            '&:hover': {
              borderColor: `${fontColor}`,
            },
          }}
        >
          Upload
        </Button>
        <Typography>
          {selectedFile
            ? truncateString(selectedFile.name, 28)
            : 'Upload your photo'}
        </Typography>
      </label>
    </Box>
  )
}
