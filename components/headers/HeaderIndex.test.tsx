import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HeaderIndex from '@/components/headers/HeaderIndex';

describe('HeaderIndex', () => {
  it('renders title with correct class', () => {
    const { container } = render(<HeaderIndex title="Our Breads" />);
    expect(container.querySelector('.index-header__title')).toHaveTextContent(
      'Our Breads',
    );
  });

  it('renders introduction when provided', () => {
    const { container } = render(
      <HeaderIndex title="Blog" introduction="Welcome to our blog." />,
    );
    expect(
      container.querySelector('.index-header__introduction'),
    ).toHaveTextContent('Welcome to our blog.');
  });

  it('omits introduction paragraph when not provided', () => {
    const { container } = render(<HeaderIndex title="Blog" />);
    expect(container.querySelector('.index-header__introduction')).toBeNull();
  });
});
