import HeaderHero from '@/components/headers/HeaderHero';
import { getRendition, type Page } from '@/lib/wagtail';
import BaseStreamBlock from '../streamfield/BaseStreamBlock';
import type { PageComponentProps } from './types';

export default async function StandardPage({
  page,
}: PageComponentProps<Page<'base.StandardPage'>>) {
  return (
    <>
      <HeaderHero title={page.title} image={getRendition(page.image_hero)} />

      <div className="container bread-detail">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-7">
              <div className="row">
                {page.introduction && (
                  <p className="bread-detail__introduction">
                    {page.introduction}
                  </p>
                )}
                <BaseStreamBlock blocks={page.body} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
