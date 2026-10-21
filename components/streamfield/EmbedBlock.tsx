import type { Block } from './types';

export default function EmbedBlock({
  block: { value },
}: {
  block: Block<'embed_block'>;
}) {
  if (!value) return null;

  // The recipes StreamField uses Wagtail's EmbedBlock as-is, which only
  // outputs the URL, rather than the bakerydemo CustomEmbedBlock's HTML.
  if (typeof value === 'string') {
    return <a href={value}>{value}</a>;
  }

  return <div dangerouslySetInnerHTML={{ __html: value.html ?? '' }} />;
}
