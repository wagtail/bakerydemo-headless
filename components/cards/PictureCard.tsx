import Image from 'next/image';
import Link from 'next/link';
import type { wagtailimages } from '@/models';

interface PictureCardProps {
  url: string;
  title: string;
  image: wagtailimages.Image;
  portrait?: boolean;
}

export default function PictureCard({
  url,
  title,
  image,
  portrait = false,
}: PictureCardProps) {
  const Heading = portrait ? 'h3' : 'h2';
  const width = portrait ? 433 : 645;
  const height = portrait ? 487 : 480;
  const sizes = portrait
    ? '(max-width: 768px) 125px, 400px'
    : '(max-width: 768px) 150px, 30vw';

  return (
    <div className="picture-card">
      <Link className="picture-card__link" href={url}>
        <figure className="picture-card__image">
          <Image
            src={image.meta.download_url}
            alt={image.title}
            width={width}
            height={height}
            sizes={sizes}
            loading="lazy"
          />
          <div className="picture-card__contents">
            <Heading className="picture-card__title">{title}</Heading>
          </div>
        </figure>
      </Link>
    </div>
  );
}
