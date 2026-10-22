import type { Block } from './types';

export default function RichTextBlock({
  block,
}: {
  block: Block<'paragraph_block'>;
}) {
  return <div dangerouslySetInnerHTML={{ __html: block.value ?? '' }} />;
}
