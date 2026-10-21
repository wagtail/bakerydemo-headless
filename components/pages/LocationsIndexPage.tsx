import PictureCard from '@/components/cards/PictureCard';
import HeaderIndex from '@/components/headers/HeaderIndex';
import api from '@/lib/api';
import { getPath, getRendition, type Page } from '@/lib/wagtail';
import type { PageComponentProps } from './types';

export default async function LocationsIndexPage({
  page,
}: PageComponentProps<Page<'locations.LocationsIndexPage'>>) {
  const { items: locationItems } = page.id
    ? await api.getPages({ type: 'locations.LocationPage', child_of: page.id })
    : { items: [] };

  return (
    <>
      <HeaderIndex title={page.title} introduction={page.introduction} />

      <div className="container">
        <div className="location-list-page">
          {locationItems.map((location) => (
            <PictureCard
              key={location.id}
              url={getPath(location.meta.html_url)}
              title={location.title}
              image={getRendition(location.image_picture_card)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
