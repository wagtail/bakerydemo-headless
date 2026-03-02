import Image from 'next/image';
import HeaderBlog from '@/components/headers/HeaderBlog';
import type { recipes } from '@/models';
import BaseStreamBlock from '../streamfield/BaseStreamBlock';
import RecipeStreamBlock from '../streamfield/RecipeStreamBlock';
import type { PageComponentProps } from './types';

export default async function RecipePage({
  page,
}: PageComponentProps<recipes.RecipePage>) {
  return (
    <>
      <HeaderBlog
        title={page.title}
        subtitle={page.subtitle}
        introduction={page.introduction}
        date_published={page.date_published}
      />

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="blog__meta">
              {page.recipe_person_relationship.length > 0 && (
                <div className="blog__avatars">
                  {page.recipe_person_relationship.map(({ person }) => (
                    <div key={person.id} className="blog__author">
                      {person.image && (
                        <Image
                          src={person.image.meta.download_url}
                          alt=""
                          width={50}
                          height={50}
                          className="blog__avatar"
                        />
                      )}
                      {person.first_name} {person.last_name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {page.backstory && page.backstory.length > 0 && (
              <>
                <BaseStreamBlock blocks={page.backstory} />
                <hr />
              </>
            )}

            <div id="recipe-headline" className="sr-only">
              Recipe
              {page.recipe_headline && (
                <>
                  :{' '}
                  <span
                    dangerouslySetInnerHTML={{ __html: page.recipe_headline }}
                  />
                </>
              )}
            </div>

            <section aria-labelledby="recipe-headline">
              <RecipeStreamBlock blocks={page.body} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
