import Head from "next/head";
import { Box } from "@mui/system";
import TopBar from "./topbar/TopBar";
import ScrollUpIcon from "./ScrollUpIcon";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicons/favicon.ico" />

        <title>
          دکتر بیتا بهور | دندانپزشک بوشهر | ایمپلنت، زیبایی، عصب‌کشی
        </title>

        <meta
          name="google-site-verification"
          content="9umNSaNI9-FjyQCd6GQXICZVlwZNf8UzUGl9htljDLM"
        />
        <meta
          name="description"
          content="مطب دندانپزشکی دکتر بیتا بهور در بوشهر - ارائه خدمات ایمپلنت، لمینت، عصب‌کشی، زیبایی، ترمیمی در میدان امام خمینی."
        />
        <meta
          property="og:title"
          content="دندانپزشکی دکتر بیتا بهور در بوشهر"
        />
        <meta
          property="og:description"
          content="بهترین دندانپزشک در بوشهر با خدمات کامل و تخصصی."
        />
        <meta
          property="og:image"
          content="https://dentistbitabehvar.vercel.app/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="دندانپزشکی دکتر بیتا بهور در بوشهر" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://dentistbitabehvar.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* 👇 داده ساختاریافته برای گوگل */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "دکتر بیتا بهور",
              image: "https://dentistbitabehvar.vercel.app/logo.jpg",
              url: "https://dentistbitabehvar.vercel.app",
              address: {
                "@type": "PostalAddress",
                streetAddress: "میدان امام خمینی",
                addressLocality: "بوشهر",
                addressCountry: "IR",
              },
              openingHours: "Sa-Th 09:00-17:00",
              telephone: "077-33553650",
              priceRange: "IRR",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "خدمات دندانپزشکی",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "درمان ریشه",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "عصب‌کشی",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "جرم‌گیری و بروساژ",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "بلیچینگ (سفید کردن دندان)",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "لمینت دندان",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "کامپوزیت ونیر",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "ارتودنسی",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "ایمپلنت دندان (کاشت)",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "کشیدن دندان",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "ترمیم و پر کردن دندان",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "روکش دندان",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "درمان دندان عقل",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "بستن فاصله دندانی",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "اصلاح طرح لبخند",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "دندانپزشکی زیبایی",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "دندانپزشکی کودکان",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "درمان پوسیدگی",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "فلورایدتراپی",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "طراحی لبخند دیجیتال",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "جراحی لثه و پیوند",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "درمان ریشه مجدد",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "دندانپزشکی بدون درد",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "دندانپزشکی با لیزر",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "پروتز ثابت و متحرک",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "دندان مصنوعی",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "فیشور سیلانت",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "معاینه دندان",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "رادیوگرافی دیجیتال",
                    },
                  },
                ],
              },
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
