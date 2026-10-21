import type { NextConfig } from 'next';
import { getPath, type PageDetail, type Redirect } from './lib/wagtail';

const nextConfig: NextConfig = {
  devIndicators: { position: 'top-right' },
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        hostname: 'localhost',
      },
      {
        hostname: '127.0.0.1',
      },
    ],
  },

  async redirects() {
    const apiUrl = `${process.env.NEXT_PUBLIC_WAGTAIL_API_HOST}/api/v3-preview`;

    // API v3 only gives the ID of a page to redirect to, unlike API v2's
    // `location`, so the page's URL needs to be looked up separately.
    const getDestination = async (redirect: Redirect) => {
      if (redirect.redirect_link) return redirect.redirect_link;
      if (!redirect.redirect_page_id) return null;
      const response = await fetch(
        `${apiUrl}/pages/${redirect.redirect_page_id}/`,
      );
      if (!response.ok) return null;
      const page: PageDetail = await response.json();
      return `${getPath(page.meta.html_url)}${redirect.redirect_page_route_path}`;
    };

    try {
      const items: Redirect[] = [];
      let offset = 0;

      while (true) {
        const response = await fetch(`${apiUrl}/redirects/?offset=${offset}`);
        if (!response.ok) return [];
        const data: { count: number; items: Redirect[] } =
          await response.json();
        items.push(...data.items);
        if (!data.items.length || items.length >= data.count) break;
        offset = items.length;
      }

      const redirects = await Promise.all(
        items.map(async (redirect) => ({
          source: redirect.old_path,
          destination: await getDestination(redirect),
          permanent: redirect.is_permanent,
        })),
      );
      return redirects.filter(
        (redirect): redirect is typeof redirect & { destination: string } =>
          redirect.destination !== null,
      );
    } catch {
      return [];
    }
  },
};

export default nextConfig;
