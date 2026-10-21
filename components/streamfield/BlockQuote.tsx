import type { Block } from './types';

export default function BlockQuote({
  block: { value },
}: {
  block: Block<'block_quote'>;
}) {
  const theme = value.settings?.theme || '';
  const textSize = value.settings?.text_size || '';

  const className = [
    'blockquote',
    theme && `blockquote--${theme}`,
    textSize && `blockquote--text-${textSize}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <blockquote className={className}>
      <p className="text">{value.text}</p>
      {value.attribute_name && (
        <p className="attribute-name">{value.attribute_name}</p>
      )}
    </blockquote>
  );
}
