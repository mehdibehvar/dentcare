export default async function handler(req, res) {
    const baseUrl = process.env.BASE_URL || "https://suntooth.ir";
  
    const staticPages = [
      "",
      "/aboutus",
      "/services",
      "/contactus",
      "/gallery",
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
    >
      ${staticPages
        .map((page) => {
          return `
        <url>
          <loc>${baseUrl}${page}</loc>
          <changefreq>monthly</changefreq>
          <priority>${page === "" ? "1.0" : "0.8"}</priority>
        </url>
      `;
        })
        .join("")}
    </urlset>`;
  
    res.setHeader("Content-Type", "application/xml");
    res.write(sitemap);
    res.end();
  }
  