import Head from "next/head";
import { Box } from "@mui/system";
import TopBar from "./topbar/TopBar";
import ScrollUpIcon from "./ScrollUpIcon";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>
          دکتر بیتا بهور | دندانپزشکی در بوشهر | ایمپلنت، عصب‌کشی، زیبایی
        </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="دندانپزشکی دکتر بیتا بهور در بوشهر - خدمات ایمپلنت، عصب‌کشی، جرم‌گیری، کامپوزیت دندان، بلیچینگ، لمینت و زیبایی. نوبت‌دهی آسان، محیط حرفه‌ای و مدرن در میدان امام خمینی بوشهر."
        />
         {/* 👇 این قسمت Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "دکتر سارا بهور",
              image: "https://example.com/logo.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "میدان امام خمینی",
                addressLocality: "بوشهر",
                addressCountry: "IR",
              },
              openingHours: "Sa-Th 10:00-22:00",
              telephone: "077-33553650",
              priceRange: "IRR",
            }),
          }}
        />
      </Head>
      <TopBar />
      <Box sx={{ backgroundColor: "#FFFFFF" }}>
        {children}
        <ScrollUpIcon />
        <Footer />
      </Box>
    </>
  );
}
