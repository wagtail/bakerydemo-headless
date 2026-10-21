import Image from 'next/image';
import HeaderBlog from '@/components/headers/HeaderBlog';
import { getRendition, type Page } from '@/lib/wagtail';
import BaseStreamBlock from '../streamfield/BaseStreamBlock';
import RecipeStreamBlock from '../streamfield/RecipeStreamBlock';
import type { PageComponentProps } from './types';

export default async function RecipePage({
  page,
}: PageComponentProps<Page<'recipes.RecipePage'>>) {
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
                  {page.recipe_person_relationship.map(({ person }) => {
                    if (!person) return null;
                    const avatar = getRendition(person.image_avatar);
                    return (
                      <div key={person.id} className="blog__author">
                        {avatar && (
                          <Image
                            src={avatar.full_url}
                            alt=""
                            width={avatar.width}
                            height={avatar.height}
                            className="blog__avatar"
                          />
                        )}
                        {person.first_name} {person.last_name}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {page.backstory.length > 0 && (
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
