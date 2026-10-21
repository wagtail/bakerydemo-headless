import Image from 'next/image';
import type { ImageBlockValue } from './types';

/**
 * Render the value of an `ImageBlock`, as used in the recipe StreamField and
 * in `TypedTableBlock` cells.
 */
export function ImageBlockImage({ value }: { value: ImageBlockValue }) {
  if (!value.image) return null;
  const { rendition } = value.image.meta;
  return (
    <Image
      src={rendition.full_url}
      alt={value.decorative ? '' : (value.alt_text ?? rendition.alt)}
      width={rendition.width}
      height={rendition.height}
    />
  );
}

export default function ImageBlock({
  block: { value },
}: {
  block: { value: ImageBlockValue };
}) {
  return (
    <figure>
      <ImageBlockImage value={value} />
    </figure>
  );
}
