import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
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
    const apiHost = process.env.NEXT_PUBLIC_WAGTAIL_API_HOST as string;
    const baseUrl = `${apiHost}/api/v2/redirects/?fields=old_path,location`;

    try {
      const items: { old_path: string; location: string }[] = [];
      let offset = 0;

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const url = `${baseUrl}&offset=${offset}`;
        const response = await fetch(url);
        if (!response.ok) return [];
        const data = await response.json();
        items.push(...data.items);
        if (items.length >= data.meta.total_count) break;
        offset = items.length;
      }

      return items.map((r) => ({
        source: r.old_path,
        destination: r.location,
        permanent: true,
      }));
    } catch {
      return [];
    }
  },
};

export default nextConfig;
