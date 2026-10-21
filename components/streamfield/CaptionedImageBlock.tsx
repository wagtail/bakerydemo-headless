import Image from 'next/image';
import type { BaseBlock } from './types';

export default function CaptionedImageBlock({
  block: { value },
}: {
  block: BaseBlock<'image_block'>;
}) {
  if (!value.image) return null;
  const { rendition } = value.image.meta;

  return (
    <figure>
      <Image
        src={rendition.full_url}
        alt={rendition.alt}
        width={rendition.width}
        height={rendition.height}
        loading="lazy"
      />
      <figcaption>
        {value.caption} - {value.attribution}
      </figcaption>
    </figure>
  );
}
