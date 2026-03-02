import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PictureCard from '@/components/cards/PictureCard';

const fakeImage = {
  id: 1,
  title: 'Test image',
  meta: {
    type: 'wagtailimages.Image',
    download_url: '/media/images/test.jpg',
  },
};

describe('PictureCard', () => {
  it('uses h2 in landscape mode (default)', () => {
    render(
      <PictureCard url="/locations/london" title="London" image={fakeImage} />,
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'London',
    );
  });

  it('uses h3 in portrait mode', () => {
    render(
      <PictureCard
        url="/blog/post"
        title="Blog Post"
        image={fakeImage}
        portrait
      />,
    );
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Blog Post',
    );
  });

  it('sets different image sizes for portrait vs landscape', () => {
    const { rerender } = render(
      <PictureCard url="/test" title="Test" image={fakeImage} />,
    );
    const landscapeImg = screen.getByRole('img');
    expect(landscapeImg).toHaveAttribute('width', '645');
    expect(landscapeImg).toHaveAttribute('height', '480');

    rerender(
      <PictureCard url="/test" title="Test" image={fakeImage} portrait />,
    );
    const portraitImg = screen.getByRole('img');
    expect(portraitImg).toHaveAttribute('width', '433');
    expect(portraitImg).toHaveAttribute('height', '487');
  });

  it('renders the required BEM class structure', () => {
    const { container } = render(
      <PictureCard url="/test" title="Test" image={fakeImage} />,
    );
    expect(container.querySelector('.picture-card')).toBeInTheDocument();
    expect(container.querySelector('.picture-card__link')).toBeInTheDocument();
    expect(container.querySelector('.picture-card__image')).toBeInTheDocument();
    expect(
      container.querySelector('.picture-card__contents'),
    ).toBeInTheDocument();
    expect(container.querySelector('.picture-card__title')).toBeInTheDocument();
  });
});
