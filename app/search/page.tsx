import type { Metadata } from 'next';
import Link from 'next/link';
import api from '@/lib/api';

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

function getContentTypeLabel(type: string): string {
  if (type.includes('BlogPage')) return 'Blog Post';
  if (type.includes('LocationPage')) return 'Location';
  if (type.includes('RecipePage')) return 'Recipe';
  if (type.includes('PersonPage')) return 'Person';
  return 'Bread';
}

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: `Search${q ? ` results for "${q}"` : ''}`,
    description: `Search${q ? ` results for "${q}"` : ''}`,
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: searchQuery } = await searchParams;

  const results = searchQuery
    ? await api.getPages('wagtailcore.Page', { search: searchQuery })
    : null;

  return (
    <main id="main-content">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Search results</h1>
            {results && results.items.length > 0 ? (
              <>
                <p className="search__introduction">
                  You searched for &ldquo;{searchQuery}&rdquo;,{' '}
                  {results.items.length} result
                  {results.items.length !== 1 ? 's' : ''} found.
                </p>
                <ul className="search__results">
                  {results.items.map((result) => (
                    <li key={result.id} className="listing-card">
                      <Link
                        className="listing-card__link"
                        href={result.meta.html_path}
                      >
                        <div className="listing-card__contents">
                          <h3 className="listing-card__title">
                            {result.title}
                          </h3>
                          <p className="listing-card__content-type">
                            {getContentTypeLabel(result.meta.type)}
                          </p>
                          {result.meta.search_description && (
                            <p className="listing-card__description">
                              {result.meta.search_description}
                            </p>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : searchQuery ? (
              <p className="search__introduction">
                No results found for &ldquo;{searchQuery}&rdquo;.
              </p>
            ) : (
              <p className="search__introduction">
                You didn&apos;t search for anything!
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
