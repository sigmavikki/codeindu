import { NextResponse } from 'next/server';

export function GET() {
  const content = `
User-agent: *
Disallow: /admin/
Disallow: /dashboard/
Allow: /

Sitemap: https://codeindu.com/sitemap.xml
`;

  return new NextResponse(content.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
