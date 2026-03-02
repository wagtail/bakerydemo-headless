import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import BlockQuote from '@/components/streamfield/BlockQuote';

describe('BlockQuote', () => {
  it('applies theme and text_size as BEM modifier classes', () => {
    const { container } = render(
      <BlockQuote
        block={{
          type: 'block_quote',
          id: 'test',
          value: {
            text: 'A great quote',
            settings: { theme: 'highlight', text_size: 'large' },
          },
        }}
      />,
    );
    const blockquote = container.querySelector('blockquote');
    expect(blockquote).toHaveClass('blockquote');
    expect(blockquote).toHaveClass('blockquote--highlight');
    expect(blockquote).toHaveClass('blockquote--text-large');
  });

  it('renders only base class when no settings', () => {
    const { container } = render(
      <BlockQuote
        block={{
          type: 'block_quote',
          id: 'test',
          value: { text: 'Plain quote' },
        }}
      />,
    );
    const blockquote = container.querySelector('blockquote');
    expect(blockquote).toHaveAttribute('class', 'blockquote');
  });

  it('renders attribution when provided', () => {
    render(
      <BlockQuote
        block={{
          type: 'block_quote',
          id: 'test',
          value: { text: 'Quote text', attribute_name: 'Mary Berry' },
        }}
      />,
    );
    const attribution = screen.getByText('Mary Berry');
    expect(attribution).toHaveClass('attribute-name');
  });

  it('omits attribution when not provided', () => {
    const { container } = render(
      <BlockQuote
        block={{
          type: 'block_quote',
          id: 'test',
          value: { text: 'No attribution' },
        }}
      />,
    );
    expect(container.querySelector('.attribute-name')).toBeNull();
  });
});
