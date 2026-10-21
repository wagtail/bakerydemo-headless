import ListingCard from '@/components/cards/ListingCard';
import HeaderIndex from '@/components/headers/HeaderIndex';
import Pagination from '@/components/Pagination';
import api from '@/lib/api';
import { getPath, getRendition, type Page } from '@/lib/wagtail';
import type { PageComponentProps } from './types';

export default async function PeopleIndexPage({
  page,
  searchParams,
}: PageComponentProps<Page<'people.PeopleIndexPage'>>) {
  const currentPage = Number((await searchParams)?.page || '1');
  const pageSize = 12;
  const offset = (currentPage - 1) * pageSize;

  const { items: persons, count } = page.id
    ? await api.getPages({
        type: 'people.PersonPage',
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
          {persons.map((person) => (
            <li key={person.id}>
              <ListingCard
                url={getPath(person.meta.html_url)}
                title={person.title}
                image={getRendition(person.image_listing)}
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
