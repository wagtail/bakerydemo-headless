import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

function makePage(overrides: {
  title: string;
  parent?: { id: number; title: string; html_url: string } | null;
}) {
  return {
    id: 10,
    title: overrides.title,
    meta: {
      type: 'base.StandardPage',
      html_url: 'http://localhost/',
      html_path: '/',
      slug: 'test',
      show_in_menus: true,
      seo_title: '',
      search_description: '',
      first_published_at: null,
      alias_of: null,
      locale: 'en',
      parent: overrides.parent
        ? {
            id: overrides.parent.id,
            title: overrides.parent.title,
            meta: {
              type: 'wagtailcore.Page',
              html_url: overrides.parent.html_url,
              html_path: overrides.parent.html_url.replace(
                /^https?:\/\/[^/]+/,
                '',
              ),
            },
          }
        : null,
    },
  };
}

describe('Breadcrumbs', () => {
  it('renders nothing on the home page (no parent)', () => {
    const page = makePage({ title: 'Home', parent: null });
    const { container } = render(<Breadcrumbs page={page} />);
    expect(container.innerHTML).toBe('');
  });

  it('renders Home > Current for a top-level child page', () => {
    const page = makePage({
      title: 'Breads',
      parent: { id: 2, title: 'Home', html_url: 'http://localhost:8000/' },
    });
    const { container } = render(<Breadcrumbs page={page} />);
    expect(container.querySelector('nav')).toHaveAttribute(
      'aria-label',
      'Breadcrumb',
    );

    const items = container.querySelectorAll('ol.breadcrumb > li');
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent('Home');
    expect(items[0].querySelector('a')).toHaveAttribute('href', '/');
    expect(items[1]).toHaveTextContent('Breads');
    expect(items[1]).toHaveAttribute('aria-current', 'page');
  });

  it('renders Home > Parent > Current for a nested page', () => {
    const page = makePage({
      title: 'Sourdough',
      parent: {
        id: 5,
        title: 'Breads',
        html_url: 'http://localhost:8000/breads/',
      },
    });
    const { container } = render(<Breadcrumbs page={page} />);
    const items = container.querySelectorAll('ol.breadcrumb > li');
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent('Home');
    expect(items[1]).toHaveTextContent('Breads');
    expect(items[1].querySelector('a')).toHaveAttribute('href', '/breads');
    expect(items[2]).toHaveTextContent('Sourdough');
    expect(items[2]).toHaveAttribute('aria-current', 'page');
  });

  it('includes chevron icons between ancestor links', () => {
    const page = makePage({
      title: 'Sourdough',
      parent: {
        id: 5,
        title: 'Breads',
        html_url: 'http://localhost:8000/breads/',
      },
    });
    const { container } = render(<Breadcrumbs page={page} />);
    const chevrons = container.querySelectorAll('.breadcrumb__chevron-icon');
    expect(chevrons).toHaveLength(2);
  });

  it('renders the correct BEM class structure', () => {
    const page = makePage({
      title: 'Test',
      parent: { id: 2, title: 'Home', html_url: 'http://localhost:8000/' },
    });
    const { container } = render(<Breadcrumbs page={page} />);
    expect(
      container.querySelector('.breadcrumb-container'),
    ).toBeInTheDocument();
    expect(container.querySelector('ol.breadcrumb')).toBeInTheDocument();
  });
});
