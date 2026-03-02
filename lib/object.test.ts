import { describe, expect, it } from 'vitest';
import { iget } from '@/lib/object';

describe('iget', () => {
  const obj = {
    'blog.BlogPage': 'BlogComponent',
    'base.HomePage': 'HomeComponent',
  };

  it('returns the value for an exact-case key', () => {
    expect(iget(obj, 'blog.BlogPage')).toBe('BlogComponent');
  });

  it('returns the value for a different-case key', () => {
    expect(iget(obj, 'Blog.Blogpage')).toBe('BlogComponent');
    expect(iget(obj, 'BASE.HOMEPAGE')).toBe('HomeComponent');
  });

  it('returns undefined for a missing key', () => {
    expect(iget(obj, 'recipes.RecipePage')).toBeUndefined();
  });
});
