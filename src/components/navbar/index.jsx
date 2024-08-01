import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

import "./style.scss";
const displayOnlyOnMedium = { display: {
    xs: "none",
    md: "block"
}}

const searchFieldSize = {
    width: {
        xs: "320px",
        sm: "480px",
        md: "640px"
    },
}

function Navbar({setDrawerOpen}) {
    return <AppBar position="static">
        <Toolbar className="toolbar">
            <Button className="menuButton" onClick={() => setDrawerOpen(true)}>
                <Menu /><Typography variant="body1" color={"white"} sx={displayOnlyOnMedium}>Menu</Typography>
            </Button>
            <TextField placeholder="Cerca..." size="small" className="search" sx={searchFieldSize}/>
            <Typography variant="h6" sx={displayOnlyOnMedium}> SHAPPING  </Typography>
        </Toolbar>
    </AppBar>
}
 
export default Navbar