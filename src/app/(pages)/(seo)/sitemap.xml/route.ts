import { NextResponse } from 'next/server';

export async function GET() {
  const urls = [
    {
      loc: 'https://codeindu.com/',
      lastmod: '2025-06-01',
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      loc: 'https://codeindu.com/courses',
      lastmod: '2025-06-01',
      changefreq: 'weekly',
      priority: '0.8',
    },
    // Add more URLs dynamically here in future
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`.trim();

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // optional caching
    },
  });
}
