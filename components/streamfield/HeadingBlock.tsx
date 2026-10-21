import type { Block } from './types';

export default function HeadingBlock({
  block: { value },
}: {
  block: Block<'heading_block'>;
}) {
  switch (value.size) {
    case 'h2':
      return <h2>{value.heading_text}</h2>;
    case 'h3':
      return <h3>{value.heading_text}</h3>;
    case 'h4':
      return <h4>{value.heading_text}</h4>;
    default:
      return <p>Unsupported: {value.size}</p>;
  }
}
