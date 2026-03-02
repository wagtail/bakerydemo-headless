import { describe, expect, it } from 'vitest';
import wagtailcore from '@/models/wagtailcore';

describe('wagtailcore.Page schema', () => {
  const validPage = {
    id: 3,
    title: 'Home',
    meta: {
      type: 'base.HomePage',
      html_url: 'http://localhost:8000/',
      slug: 'home',
      show_in_menus: false,
      seo_title: '',
      search_description: '',
      first_published_at: '2024-01-01T00:00:00Z',
      alias_of: null,
      locale: 'en',
      parent: null,
    },
  };

  it('parses a valid API page response', () => {
    const parsed = wagtailcore.Page.parse(validPage);
    expect(parsed.id).toBe(3);
    expect(parsed.title).toBe('Home');
    expect(parsed.meta.type).toBe('base.HomePage');
  });

  it('transforms html_url to html_path by stripping the origin', () => {
    const parsed = wagtailcore.Page.parse(validPage);
    expect(parsed.meta.html_path).toBe('/');
  });

  it('strips different origins from html_url', () => {
    const parsed = wagtailcore.Page.parse({
      ...validPage,
      meta: {
        ...validPage.meta,
        html_url: 'https://bakery.example.com/breads/sourdough/',
      },
    });
    expect(parsed.meta.html_path).toBe('/breads/sourdough/');
  });

  it('handles a page with a parent', () => {
    const parsed = wagtailcore.Page.parse({
      ...validPage,
      meta: {
        ...validPage.meta,
        parent: {
          id: 2,
          title: 'Root',
          meta: {
            type: 'wagtailcore.Page',
            html_url: 'http://localhost:8000/',
          },
        },
      },
    });
    expect(parsed.meta.parent).not.toBeNull();
    expect(parsed.meta.parent!.title).toBe('Root');
    expect(parsed.meta.parent!.meta.html_path).toBe('/');
  });

  it('rejects a page missing required fields', () => {
    expect(() => wagtailcore.Page.parse({ id: 1 })).toThrow();
  });
});
