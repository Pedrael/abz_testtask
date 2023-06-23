import { Button } from "@mui/material"

interface CustomisedButtonProps {
    onClick?: () => void,
    label: String
  }
  
  export function CustomisedButton({ onClick, label }: CustomisedButtonProps) {
    return (
      <Button variant="contained" onClick={onClick ?? undefined}>{label}</Button>
    )
  }
  