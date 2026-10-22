import createClient from 'openapi-fetch';
import { cache } from 'react';
import type { operations, paths } from './generated/schema';
import type { Page, PageDetail, PageType } from './wagtail';

const client = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_WAGTAIL_API_HOST,
});

export class APIError extends Error {
  constructor(
    public status: number,
    public detail?: unknown,
  ) {
    super(
      `API Error: ${status}${detail ? ` - ${JSON.stringify(detail)}` : ''}`,
    );
  }
}

function unwrap<T>(result: {
  data?: T;
  error?: unknown;
  response: Response;
}): T {
  if (result.data === undefined) {
    throw new APIError(result.response.status, result.error);
  }
  return result.data;
}

/**
 * Get a page by its path, resolved to its specific type.
 */
async function getPage(path: string): Promise<PageDetail> {
  return unwrap(
    await client.GET('/api/v3-preview/pages/find/', {
      params: { query: { html_path: path } },
    }),
  );
}

async function getPreview(type: PageType, token: string): Promise<PageDetail> {
  return unwrap(
    await client.GET('/api/v3-preview/preview/', {
      params: { query: { type, token } },
    }),
  );
}

type ListingQuery = NonNullable<
  operations['listing_pages']['parameters']['query']
>;

interface GetPagesOptions<T extends PageType>
  extends Omit<ListingQuery, 'type'> {
  type?: T;
  /**
   * Exact-match filters on the page type's own fields (e.g. `tags`), which
   * are accepted by the API but not described in its OpenAPI schema.
   */
  filters?: Record<string, string>;
}

/**
 * Get pages with their full detail, e.g. for rendering listings. Without a
 * `type`, pages of all types are returned.
 */
async function getPages<T extends PageType = PageType>({
  type,
  filters,
  ...query
}: GetPagesOptions<T> = {}): Promise<{ count: number; items: Page<T>[] }> {
  const data = unwrap(
    await client.GET('/api/v3-preview/listing/pages/', {
      params: {
        query: {
          ...query,
          ...(type ? { type: [type] } : {}),
          ...filters,
        } as ListingQuery,
      },
    }),
  );
  // The response is a union of all page types, narrow it to the requested one
  return data as { count: number; items: Page<T>[] };
}

type ImagesQuery = NonNullable<
  operations['images_list']['parameters']['query']
>;

/**
 * Get images, e.g. those in a collection with `filters: { collection: '1' }`.
 */
async function getImages({
  filters,
  ...query
}: ImagesQuery & { filters?: Record<string, string> } = {}) {
  return unwrap(
    await client.GET('/api/v3-preview/images/', {
      params: { query: { ...query, ...filters } as ImagesQuery },
    }),
  );
}

const api = {
  getPage: cache(getPage),
  getPreview: cache(getPreview),
  getPages: cache(getPages),
  getImages: cache(getImages),
};

export default api;
