import styled from "@emotion/styled";
import { Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import data from "utils/data";
import aboutusClasses from "./AboutUs.module.scss";
import TabContent from "./TabContent";


  ////section style///////
  const AboutUsSection = styled("section")(({ theme }) => ({
    backgroundColor: "#FAFAFA",
    padding: "10px",
  }));
  ////how to use prop and theme in styled////////////////////////
  const Tab = styled("li")(({ theme }) => (props) => ({
    backgroundColor: props.tabColor,
    borderRadius: "8px",
    position: "relative",
    marginTop:props.margin,
    marginBottom:props.margin,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    width:130,
    height:100,
    ":after": {
      content: "''",
      position: "absolute",
      right: 120,
      width: 30,
      height: 50,
      backgroundColor: props.tabColor,
      top: "25px",
      WebkitClipPath:"polygon(100% 100%, 0 50%, 100% 0)",
      clipPath:"polygon(100% 100%, 0 50%, 100% 0)",
    },
    "& div":{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      "& i":{
        marginBottom:theme.spacing(1),
        fontSize:22
      }
    },
    [theme.breakpoints.down("md")]: {
      transform: "rotate(-90deg)",
      marginLeft:props.margin,
      marginRight:props.margin,
      marginTop:"0",
      width:80,
      ":after": {
        content: "''",
        position: "absolute",
        right: 70,
        width: 30,
        height: 50,
        backgroundColor: props.tabColor,
        top: "25px",
        WebkitClipPath:"polygon(100% 100%, 0 50%, 100% 0)",
        clipPath:"polygon(100% 100%, 0 50%, 100% 0)",
      },
      "& div":{
        transform: "rotate(90deg)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
    }
    },
  }));
  const TabList = styled("ul")(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-evenly",
    },
  }));
  /////////////////////end style////////////

export default function AboutUs() {
  const {aboutusTabInfo}=data;
  const [tabDisplay,setTabDisplay]=useState("هدف ما")
   function handleChangeTab(tabName) {
       setTabDisplay(tabName)
  }
const tabsContentList=aboutusTabInfo.map((tabInfo,index)=><TabContent key={index} tabDisplay={tabDisplay} tabInfo={tabInfo}/>)
  return (
    <AboutUsSection>
      <Container>
        <Grid>
          <Typography
            className={aboutusClasses.treatIcon}
            variant="h2"
            component={"h2"}
            sx={{ color: "primary.main", fontSize: 20 }}
          >
            <i className="fa fa-stethoscope"></i>
          </Typography>
          <Typography variant="h5" component={"h1"}>
            درباره ما:
          </Typography>
          <Typography variant="caption" component={"p"}>
            هر انچه شما میخواهید درباره ما بدانید.
          </Typography>
        </Grid>
        <Grid container spacing={2}>
            {/* ///tabs of about us///// */}
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <div className="aboutTabs">
              <TabList>
                <Tab onClick={()=>handleChangeTab("هدف ما")} tabColor={"#0FACEF"}>
                <div><i className="fa fa-hospital"></i>هدف ما</div>
                </Tab>
                <Tab onClick={()=>handleChangeTab("دید ما")}  margin="8px" tabColor="#E3EBF7"><div><i className="fa fa-stethoscope"></i>دید ما</div></Tab>
                <Tab onClick={()=>handleChangeTab("درباره من")}  tabColor="#FAF2E6">
               <div> <i className="fas fa-user-md"></i>
                  درباره من</div>
                 </Tab>
              </TabList>
            </div>
          </Grid>
{/* //////////tabcontent/////////////////// */}
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <div className="tab-content">
          {tabsContentList}
            </div>
          </Grid>
        </Grid>
      </Container>
    </AboutUsSection>
  );
}
