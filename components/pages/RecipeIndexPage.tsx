import BlogListingCard from '@/components/cards/BlogListingCard';
import HeaderIndex from '@/components/headers/HeaderIndex';
import api from '@/lib/api';
import { getPath, type Page } from '@/lib/wagtail';
import type { PageComponentProps } from './types';

export default async function RecipeIndexPage({
  page,
}: PageComponentProps<Page<'recipes.RecipeIndexPage'>>) {
  const { items: recipeItems } = page.id
    ? await api.getPages({ type: 'recipes.RecipePage', child_of: page.id })
    : { items: [] };

  return (
    <>
      <HeaderIndex title={page.title} introduction={page.introduction} />

      <div className="container">
        <div className="blog-list">
          {recipeItems.length > 0 ? (
            recipeItems.map((recipe) => (
              <BlogListingCard
                key={recipe.id}
                url={getPath(recipe.meta.html_url)}
                title={recipe.title}
                introduction={recipe.introduction}
                date_published={recipe.date_published}
                authors={recipe.recipe_person_relationship.flatMap(
                  ({ person }) =>
                    person ? [`${person.first_name} ${person.last_name}`] : [],
                )}
              />
            ))
          ) : (
            <div className="col-md-12">
              <p>
                Oh, snap. Looks like we were too busy baking to write any
                recipes. Sorry.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
