const fs = require('fs');
const path = require('path');

const sitemap = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://shubhamnarmadashivling.com</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
</urlset>
`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('Sitemap generated!');
