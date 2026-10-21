import Image from 'next/image';
import Link from 'next/link';
import { getPath, getRendition, type Page } from '@/lib/wagtail';

function truncateWords(text: string, count: number): string {
  const words = text.split(/\s+/);
  if (words.length <= count) return text;
  return `${words.slice(0, count).join(' ')} …`;
}

interface LocationCardProps {
  location: Page<'locations.LocationPage'>;
}

export default function LocationCard({ location }: LocationCardProps) {
  const image = getRendition(location.image_location_card);

  return (
    <div className="location-card col-sm-4">
      <Link
        className="location-card__link"
        href={getPath(location.meta.html_url)}
      >
        <figure className="location-card__image">
          {image && (
            <Image
              src={image.full_url}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 768px) 150px, 400px"
              loading="lazy"
            />
          )}
        </figure>
        <div className="location-card__contents">
          <h3 className="location-card__title">{location.title}</h3>
          {location.introduction && (
            <p className="location-card__text">
              {truncateWords(location.introduction, 15)}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
