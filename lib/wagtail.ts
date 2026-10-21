/**
 * Types and helpers for data from the Wagtail API, derived from its OpenAPI
 * schema (see `npm run generate-api`).
 */
import type { components, operations } from './generated/schema';

type JSONResponse<Operation> = Operation extends {
  responses: { 200: { content: { 'application/json': infer T } } };
}
  ? T
  : never;

/** Any page, as returned by the page detail endpoint. */
export type PageDetail = JSONResponse<operations['pages_detail']>;
export type PageType = PageDetail['meta']['type'];
/** A page of a specific type, e.g. `Page<'blog.BlogPage'>`. */
export type Page<T extends PageType = PageType> = Extract<
  PageDetail,
  { meta: { type: T } }
>;

export type Image = components['schemas']['ImageSchema'];
export type ImageRendition = components['schemas']['ImageRenditionDict'];
export type Redirect = components['schemas']['RedirectSchema'];

/**
 * Get the path of a URL returned by the API (e.g. `meta.html_url`), to be used
 * for links within this site.
 */
export function getPath(url: string | null | undefined): string {
  return (url ?? '').replace(/^(?:https?:\/\/[^/]+)?/, '') || '/';
}

/** Get the absolute URL of a media file URL returned by the API. */
export function getMediaUrl(url: string): string {
  return url.startsWith('/')
    ? `${process.env.NEXT_PUBLIC_WAGTAIL_API_HOST}${url}`
    : url;
}

/**
 * Narrow an `ImageRenditionField` value, which is `null` if the image is not
 * set or `{error: ...}` if the rendition could not be generated.
 */
export function getRendition(
  value:
    | ImageRendition
    | components['schemas']['ImageRenditionErrorDict']
    | null
    | undefined,
): ImageRendition | null {
  return value && 'url' in value ? value : null;
}
