import Head from "next/head";
import { Box } from "@mui/system";
import TopBar from "./topbar/TopBar";
import ScrollUpIcon from "./ScrollUpIcon";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>BitaCare website</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="bitacare" content="بهترین دندانپزشک در بوشهر" />
      </Head>
      <TopBar />
      <Box sx={{ backgroundColor: "#FFFFF" }}>
        {children}
 <ScrollUpIcon/>
 <Footer/>
      </Box>
    </>
  );
}
