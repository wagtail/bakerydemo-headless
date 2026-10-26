import type { NextConfig } from 'next';
import type { Redirect } from './lib/wagtail';

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

      return items
        .filter(
          (redirect): redirect is Redirect & { location: string } =>
            redirect.location !== null,
        )
        .map((redirect) => ({
          source: redirect.old_path,
          destination: redirect.location,
          permanent: redirect.is_permanent,
        }));
    } catch {
      return [];
    }
  },
};

export default nextConfig;
