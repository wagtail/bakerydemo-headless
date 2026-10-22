import { describe, expect, it } from 'vitest';
import { getPath, getRendition } from '@/lib/wagtail';

describe('getPath', () => {
  it('strips the origin from an API URL', () => {
    expect(getPath('http://localhost:8000/blog/wild-yeast/')).toBe(
      '/blog/wild-yeast/',
    );
  });

  it('returns the root path for the site root URL', () => {
    expect(getPath('http://localhost:8000/')).toBe('/');
    expect(getPath('http://localhost:8000')).toBe('/');
  });

  it('keeps a path as-is', () => {
    expect(getPath('/breads/')).toBe('/breads/');
  });

  it('handles a missing URL', () => {
    expect(getPath(null)).toBe('/');
  });
});

describe('getRendition', () => {
  const rendition = {
    url: '/media/images/test.jpg',
    full_url: 'http://localhost:8000/media/images/test.jpg',
    width: 100,
    height: 100,
    alt: '',
  };

  it('returns a rendition as-is', () => {
    expect(getRendition(rendition)).toBe(rendition);
  });

  it('returns null for a rendition error', () => {
    expect(getRendition({ error: 'SourceImageIOError' })).toBeNull();
  });

  it('returns null for a missing image', () => {
    expect(getRendition(null)).toBeNull();
  });
});
