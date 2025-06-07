import { NextResponse } from 'next/server';

export function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: https://codeindu.com/sitemap.xml
  `.trim();

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

