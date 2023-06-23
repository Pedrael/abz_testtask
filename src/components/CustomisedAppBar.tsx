import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material"

interface CustomisedAppBarProps {
    xz?: String
}
  
export function CustomisedAppBar({xz}: CustomisedAppBarProps) {
    return (
        <AppBar position="static" sx={{
            backgroundColor: "white"
        }}>
            <Container>
                <Toolbar disableGutters sx={{justifyContent: "space-around"}}>
                    <Container>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Niggers
                        </Typography>
                    </Container>
                    <Container>
                        <Button variant="text">A</Button>
                        <Button>B</Button>
                    </Container>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
  