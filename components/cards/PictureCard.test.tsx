import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PictureCard from '@/components/cards/PictureCard';

const fakeImage = {
  url: '/media/images/test.fill-645x480.jpg',
  full_url: 'http://localhost:8000/media/images/test.fill-645x480.jpg',
  width: 645,
  height: 480,
  alt: 'Test image',
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

  it('uses the rendition dimensions', () => {
    render(<PictureCard url="/test" title="Test" image={fakeImage} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('width', '645');
    expect(img).toHaveAttribute('height', '480');
    expect(img).toHaveAttribute('alt', 'Test image');
  });

  it('sets different image sizes for portrait vs landscape', () => {
    const { rerender } = render(
      <PictureCard url="/test" title="Test" image={fakeImage} />,
    );
    expect(screen.getByRole('img')).toHaveAttribute(
      'sizes',
      '(max-width: 768px) 150px, 30vw',
    );

    rerender(
      <PictureCard url="/test" title="Test" image={fakeImage} portrait />,
    );
    expect(screen.getByRole('img')).toHaveAttribute(
      'sizes',
      '(max-width: 768px) 125px, 400px',
    );
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
