import { NextResponse } from 'next/server';

export async function GET() {
  const content = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://codeindu.com/</loc>
    <lastmod>2025-06-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://codeindu.com/courses</loc>
    <lastmod>2025-06-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
`;

  return new NextResponse(content.trim(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
