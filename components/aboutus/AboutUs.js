// SEO-friendly version of AboutUs tabs (all content rendered, toggle only hides visually)
import { Container, Grid, Typography } from "@mui/material";
import { GraySection } from "components/other/styledComponents";
import TreatIcon from "components/other/TreatIcon";
import { useState } from "react";
import { Tab, TabList } from "./aboutusStyledComponents";
import TabContent from "./TabContent";

export default function AboutUs({ aboutusTabInfo }) {
  const [tabDisplay, setTabDisplay] = useState("هدف ما");

  function handleChangeTab(tabName) {
    setTabDisplay(tabName);
  }

  // Define icons based on tab title
  const getIconClass = (title) => {
    switch (title) {
      case "هدف ما":
        return "fa fa-hospital";
      case "دید ما":
        return "fa fa-stethoscope";
      case "درباره من":
        return "fas fa-user-md";
      default:
        return "fa fa-info-circle";
    }
  };

  return (
    <GraySection>
      <Container>
        <Grid sx={{ mb: { sm: '24px' } }}>
          <TreatIcon />
          <Typography variant="h5" component="h1">
            درباره ما:
          </Typography>
          <Typography variant="caption" component="p">
            هر آنچه شما می‌خواهید درباره ما بدانید.
          </Typography>
        </Grid>

        <Grid container spacing={2}>
          {/* Tabs */}
          <Grid item xs={12} sm={12} md={2} lg={2} >
            <div className="aboutTabs" style={{height:"100%"}}>
              <TabList>
                {aboutusTabInfo.map((tab, index) => (
                  <Tab
                    key={tab.title}
                    onClick={() => handleChangeTab(tab.title)}
                    tabColor={tab.title === tabDisplay ? "#0FACEF" : "#f0f0f0"}
                    style={{ marginBottom: index !== aboutusTabInfo.length - 1 ? "12px" : 0 }}
                  >
                    <div>
                      <i className={getIconClass(tab.title)}></i> {tab.title}
                    </div>
                  </Tab>
                ))}
              </TabList>
            </div>
          </Grid>

          {/* Tab contents - all rendered for SEO */}
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <div className="tab-content">
              {aboutusTabInfo.map((tabInfo, index) => (
                <div
                  key={index}
                  id={`about-${index}`}
                  style={{ display: tabDisplay === tabInfo.title ? "block" : "none" }}
                >
                  <TabContent tabDisplay={tabInfo.title} tabInfo={tabInfo} />
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </GraySection>
  );
}
