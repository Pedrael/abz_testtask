import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import CustomisedButton from './CustomisedButton'
import {
  fontColor,
  fontFamily,
  primaryColor,
  secondaryColor,
  backgroundColor,
} from '../vars'
import Logo from '../assets/Logo.svg'

interface CustomisedAppBarProps {}

export function CustomisedAppBar({ ...props }: CustomisedAppBarProps) {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
      }}
      {...props}
    >
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        <Box
          component="img"
          sx={{
            height: '26px',
            width: '104px',
          }}
          src={Logo}
        />
        <Box>
          <CustomisedButton sx={{ marginRight: '10px' }}>
            Users
          </CustomisedButton>
          <CustomisedButton>Sign up</CustomisedButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
