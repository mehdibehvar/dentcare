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
import { useEffect, useRef, useState } from "react";
import LogoWrapper from "./LogoWrapper";
import Link from "next/link";
import styled from "@emotion/styled";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CollectionsIcon from '@mui/icons-material/Collections';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { SocialIconsBox } from "components/other/styledComponents";
import { useRouter } from "next/router";
const MenuBox=styled(Menu)(({theme})=>(props)=>({
  marginTop:45,
  transform:props.transy
 }))
const MenuItemBox=styled(MenuItem)(({theme})=>(props)=>({
  width:"200px",
  marginBottom:theme.spacing(2),
  backgroundColor:props.currentpage,
  
}));
const NavLinkTypo=styled(Typography)(({theme})=>({
  transition:"all 1s ease",
  ":hover":{
    color:theme.palette.secondary.main,
    transform:"scale(1.1)"
  }
}))
const pages = [["خانه","/",<HomeIcon key="0"/>],
["درباره ما","/aboutus",<AccountCircleIcon key="1"/>], ["خدمات","/services",<MedicalServicesIcon key="2"/>],
 ["گالری","/gallery",<CollectionsIcon key="3"/>], ["تماس با ما","/contactus",<ContactPageIcon key="4"/>]];
///////////--///////////////////////////
const ResponsiveAppBar = () => {
  const [rectop,setRectop]=useState(0);
  const navRef=useRef();
  const transy=rectop>440?"translateY(-54px)":"translateY(20px)";
  const [anchorElNav, setAnchorElNav] = useState(null);
  const {route}=useRouter();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  useEffect(()=>{ 
    const elem=navRef.current;
    const rec=elem.getBoundingClientRect();
    setRectop(rec.top)
  },[])
  return (
    <>
      <AppBar 
        position="static"
        sx={{ backgroundColor: "rgba(83, 189, 236, 0.8)"}}
      >
        <Container maxWidth="xl"  ref={navRef}>
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
              <MenuBox
                transy={transy}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                    <Link href={`${page[1]}`} key={page[0]}>

                <MenuItemBox currentpage={`${route===page[1]?"#FFFFFF":"#fab3e4"}`} onClick={handleCloseNavMenu}>
                    <SocialIconsBox>
                        {page[2]}
                    </SocialIconsBox>
                    <Typography textAlign="center" color={"primary.main"} component={"a"}>{page[0]}</Typography>
                  </MenuItemBox>

                    </Link>
                ))}
              </MenuBox>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
               <Link  key={page[0]} href={`${page[1]}`}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <NavLinkTypo>{page[0]}</NavLinkTypo>
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
