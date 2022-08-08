import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import LogoWrapper from "./LogoWrapper";
import { red } from "@mui/material/colors";
import Link from "next/link";

const pages = [["خانه","/"],
["درباره ما","aboutus"], ["خدمات","services"],
 ["گالری","gallery"], ["تماس با ما","contactus"]];
///////////--///////////////////////////
const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "rgba(83, 189, 236, 0.8)" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  marginTop:"50px"
                }}
              >
                {pages.map((page) => (
                    <Link href={`${page[1]}`} key={page[0]}>
                  <MenuItem sx={{  backgroundColor:"secondary.main"}}  onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color={"primary.main"} component={"a"}>{page[0]}</Typography>
                  </MenuItem>
                    </Link>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
               <Link  key={page[0]} href={`${page[1]}`}>
                <Button
                 
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page[0]}
                </Button>
               </Link>
              ))}
            </Box>
            <LogoWrapper />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default ResponsiveAppBar;
