import ListingCard from '@/components/cards/ListingCard';
import HeaderIndex from '@/components/headers/HeaderIndex';
import Pagination from '@/components/Pagination';
import api from '@/lib/api';
import { getPath, getRendition, type Page } from '@/lib/wagtail';
import type { PageComponentProps } from './types';

export default async function BreadsIndexPage({
  page,
  searchParams,
}: PageComponentProps<Page<'breads.BreadsIndexPage'>>) {
  const currentPage = Number((await searchParams)?.page || '1');
  const pageSize = 12;
  const offset = (currentPage - 1) * pageSize;

  const { items: breads, count } = page.id
    ? await api.getPages({
        type: 'breads.BreadPage',
        child_of: page.id,
        limit: pageSize,
        offset,
      })
    : { items: [], count: 0 };

  const totalPages = Math.ceil(count / pageSize);

  return (
    <>
      <HeaderIndex title={page.title} introduction={page.introduction} />

      <div className="container">
        <ul className="bread-list">
          {breads.map((bread) => (
            <li key={bread.id}>
              <ListingCard
                url={getPath(bread.meta.html_url)}
                title={bread.title}
                image={getRendition(bread.image_listing)}
                h2
                meta={[
                  ...(bread.origin
                    ? [{ label: 'Origin', value: bread.origin.title }]
                    : []),
                  ...(bread.bread_type
                    ? [{ label: 'Type', value: bread.bread_type.title }]
                    : []),
                ]}
              />
            </li>
          ))}
        </ul>
      </div>

      {count > pageSize && (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                baseUrl=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
