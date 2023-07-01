import { AppBar, AppBarProps, Box, Toolbar } from '@mui/material'
import DefaultButton from './DefaultButton'
import Logo from '../assets/Logo.svg'

export const DefaultAppBar = ({ ...props }: AppBarProps) => {
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
          <DefaultButton sx={{ marginRight: '10px' }}>Users</DefaultButton>
          <DefaultButton>Sign up</DefaultButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
