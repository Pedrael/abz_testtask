import { useState, ChangeEvent, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import {
  fontColor,
  fontSecondaryColor,
  maxSizeInBytes,
  minSizeInPixels,
  textFieldBorder,
} from '../contstants'
import { truncateString } from '../util'
import { ImageData } from '../types'
interface ImageUploadProps {
  onImageLoad: (imageData: ImageData, isImageValid: boolean) => void
}

export const ImageUpload = ({ onImageLoad }: ImageUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSelected, setSelected] = useState<boolean>(false)
  const [isFileValid, setFileValid] = useState<boolean | undefined>(undefined)

  const handleFileChange = ({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    setFileValid(undefined)
    if (files && files.length > 0) {
      const file: File = files[0]
      setSelectedFile(file)
      setSelected(true)
      const img = new Image()
      let pixelCheck = false
      img.src = URL.createObjectURL(file)
      img.onload = async () => {
        pixelCheck =
          (await img.width) >= minSizeInPixels.width &&
          (await img.height) >= minSizeInPixels.height

        setFileValid(
          file.size < maxSizeInBytes &&
            file.type.startsWith('image/jpeg') &&
            pixelCheck,
        )
      }
    }
  }

  useEffect(() => {
    isFileValid &&
      onImageLoad(
        {
          name: selectedFile?.name ?? '',
          size: selectedFile?.size ?? 0,
          type: selectedFile?.type ?? '',
          url: URL.createObjectURL(selectedFile as File),
        },
        isFileValid,
      )
    isFileValid && console.log(selectedFile, isFileValid)
  }, [isFileValid])

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
          border: `${!isSelected ? '1px' : isFileValid ? '1px' : '2px'} solid ${
            !isSelected
              ? textFieldBorder
              : isFileValid
              ? textFieldBorder
              : 'red'
          }`,
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
            border: 'none',
            borderRight: `${
              !isSelected ? '1px' : isFileValid ? '1px' : '2px'
            } solid ${
              !isSelected
                ? textFieldBorder
                : isFileValid
                ? textFieldBorder
                : 'red'
            }`,
            padding: '15px',
            borderRadius: '4px 0 0 4px',
            '&:hover': {
              border: 'none',
              borderRight: `${
                !isSelected ? '1px' : isFileValid ? '1px' : '2px'
              } solid ${
                !isSelected
                  ? textFieldBorder
                  : isFileValid
                  ? textFieldBorder
                  : 'red'
              }`,
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
