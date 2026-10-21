import BlogListingCard from '@/components/cards/BlogListingCard';
import HeaderIndex from '@/components/headers/HeaderIndex';
import api from '@/lib/api';
import { getPath, getRendition, type Page } from '@/lib/wagtail';
import type { PageComponentProps } from './types';

interface BlogSearchParams {
  tags?: string;
}

export default async function BlogIndexPage({
  page,
  searchParams,
}: PageComponentProps<Page<'blog.BlogIndexPage'>>) {
  const { tags: searchTags } = (await searchParams) as BlogSearchParams;

  const { items: posts } = page.id
    ? await api.getPages({
        type: 'blog.BlogPage',
        child_of: page.id,
        filters: searchTags ? { tags: searchTags } : {},
      })
    : { items: [] };

  return (
    <>
      {!searchTags && (
        <HeaderIndex title={page.title} introduction={page.introduction} />
      )}

      <div className="container">
        {searchTags && (
          <div className="row">
            <div className="col-md-12">
              <h1 className="index-header__title">Blog</h1>
            </div>
            <div className="col-md-12">
              <p className="index-header__introduction">
                Viewing all blog posts sorted by the tag{' '}
                <span className="blog-tags__tag">{searchTags}</span>.
              </p>
            </div>
          </div>
        )}

        <div className="blog-list">
          {posts.length > 0 ? (
            posts.map((post) => (
              <BlogListingCard
                key={post.id}
                url={getPath(post.meta.html_url)}
                title={post.title}
                image={getRendition(post.image_listing)}
                introduction={post.introduction}
                date_published={post.date_published}
                authors={post.blog_person_relationship.flatMap(({ person }) =>
                  person ? [`${person.first_name} ${person.last_name}`] : [],
                )}
              />
            ))
          ) : (
            <div className="col-md-12">
              <p>
                Oh, snap. Looks like we were too busy baking to write any blog
                posts. Sorry.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
