import Head from "next/head";
import { Box } from "@mui/system";
import TopBar from "./topbar/TopBar";
import ScrollUpIcon from "./ScrollUpIcon";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>BitaCare website</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="mehdishop" content="best dentist in bushehr" />
      </Head>
      <TopBar />
      <Box sx={{ backgroundColor: "#FFFFF" }}>
        {children}
 <ScrollUpIcon/>
      </Box>
    </>
  );
}
