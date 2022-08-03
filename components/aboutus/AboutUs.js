import { Container, Grid, Typography } from "@mui/material";
import { GraySection } from "components/other/styledComponents";
import TreatIcon from "components/other/TreatIcon";
import { useState } from "react";
import data from "utils/data";
import {  Tab, TabList } from "./aboutusStyledComponents";
import TabContent from "./TabContent";

export default function AboutUs() {
  const {aboutusTabInfo}=data;
  const [tabDisplay,setTabDisplay]=useState("هدف ما")
   function handleChangeTab(tabName) {
       setTabDisplay(tabName)
  }
const tabsContentList=aboutusTabInfo.map((tabInfo,index)=><TabContent key={index} tabDisplay={tabDisplay} tabInfo={tabInfo}/>)
  return (
    <GraySection>
      <Container>
        <Grid>
         <TreatIcon/>
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
    </GraySection>
  );
}
