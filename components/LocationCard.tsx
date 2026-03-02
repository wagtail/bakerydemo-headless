import Image from 'next/image';
import Link from 'next/link';
import type { locations } from '@/models';

function truncateWords(text: string, count: number): string {
  const words = text.split(/\s+/);
  if (words.length <= count) return text;
  return `${words.slice(0, count).join(' ')} …`;
}

interface LocationCardProps {
  location: locations.LocationPage;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="location-card col-sm-4">
      <Link className="location-card__link" href={location.meta.html_path}>
        <figure className="location-card__image">
          {location.image && (
            <Image
              src={location.image.meta.download_url}
              alt={location.image.title}
              width={430}
              height={320}
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
