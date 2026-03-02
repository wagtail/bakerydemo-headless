import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import BlogListingCard from '@/components/cards/BlogListingCard';

describe('BlogListingCard', () => {
  it('truncates introduction to 15 words', () => {
    const longIntro =
      'One two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen';
    render(
      <BlogListingCard
        url="/blog/test"
        title="Test"
        introduction={longIntro}
      />,
    );
    const intro = screen.getByText(/One two three/);
    const words = intro.textContent!.replace(' …', '').split(/\s+/);
    expect(words).toHaveLength(15);
    expect(intro.textContent).toContain('…');
  });

  it('does not truncate introduction at or under 15 words', () => {
    const shortIntro = 'One two three four five';
    render(
      <BlogListingCard
        url="/blog/test"
        title="Test"
        introduction={shortIntro}
      />,
    );
    expect(screen.getByText('One two three four five')).toBeInTheDocument();
  });

  it('formats date and joins authors', () => {
    render(
      <BlogListingCard
        url="/blog/test"
        title="Test"
        date_published="2024-06-15"
        authors={['Alice Smith', 'Bob Jones']}
      />,
    );
    expect(screen.getByText(/June 15, 2024/)).toBeInTheDocument();
    expect(screen.getByText(/Alice Smith, Bob Jones/)).toBeInTheDocument();
  });

  it('renders the required BEM class structure', () => {
    const { container } = render(
      <BlogListingCard url="/blog/test" title="Test" />,
    );
    expect(container.querySelector('.blog-listing-card')).toBeInTheDocument();
    expect(
      container.querySelector('.blog-listing-card__link'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.blog-listing-card__contents'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.blog-listing-card__title'),
    ).toBeInTheDocument();
  });
});
