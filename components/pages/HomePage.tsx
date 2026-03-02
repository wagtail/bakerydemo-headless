import Image from 'next/image';
import Link from 'next/link';
import ListingCard from '@/components/cards/ListingCard';
import PictureCard from '@/components/cards/PictureCard';
import LocationCard from '@/components/LocationCard';
import ChevronIcon from '@/components/layout/ChevronIcon';
import api from '@/lib/api';
import type { base } from '@/models';
import BaseStreamBlock from '../streamfield/BaseStreamBlock';
import type { PageComponentProps } from './types';

export default async function HomePage({
  page,
}: PageComponentProps<base.HomePage>) {
  const featuredSection1Children = page.featured_section_1
    ? (
        await api.getPages('breads.BreadPage', {
          child_of: page.featured_section_1.id.toString(),
          limit: '3',
        })
      ).items
    : [];

  const featuredSection2Children = page.featured_section_2
    ? (
        await api.getPages('locations.LocationPage', {
          child_of: page.featured_section_2.id.toString(),
          limit: '3',
        })
      ).items
    : [];

  const featuredSection3Children = page.featured_section_3
    ? (
        await api.getPages('blog.BlogPage', {
          child_of: page.featured_section_3.id.toString(),
          limit: '6',
        })
      ).items
    : [];

  return (
    <div className="homepage">
      <div className="container-fluid hero">
        {page.image && (
          <Image
            src={page.image.meta.download_url}
            alt=""
            width={1920}
            height={900}
            sizes="100vw"
            className="hero-image"
            priority
          />
        )}
        <div className="hero-gradient-mask" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-1 col-lg-5 home-hero">
              <h1>{page.title}</h1>
              <p className="lead">{page.hero_text}</p>
              {page.hero_cta_link ? (
                <Link
                  href={page.hero_cta_link.meta.html_path}
                  className="hero-cta-link"
                >
                  {page.hero_cta}
                </Link>
              ) : (
                page.hero_cta
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row promo-row">
          <div className="featured-cards col-sm-5 col-sm-offset-1">
            {page.featured_section_1 && (
              <>
                <h2 className="featured-cards__title">
                  {page.featured_section_1_title}
                </h2>
                <ul className="featured-cards__list">
                  {featuredSection1Children.map((child) => (
                    <li key={child.id}>
                      <ListingCard
                        url={child.meta.html_path}
                        title={child.title}
                        image={child.image}
                        meta={[
                          ...(child.origin
                            ? [
                                {
                                  label: 'Origin',
                                  value: child.origin.title,
                                },
                              ]
                            : []),
                          ...(child.bread_type
                            ? [
                                {
                                  label: 'Type',
                                  value: child.bread_type.title,
                                },
                              ]
                            : []),
                        ]}
                      />
                    </li>
                  ))}
                </ul>
                <Link className="featured-cards__link" href="/breads">
                  <span>View more of our breads</span>
                  <ChevronIcon className="featured-cards__chevron-icon" />
                </Link>
              </>
            )}
          </div>

          <div className="col-sm-6 promo">
            {(page.promo_image || page.promo_title || page.promo_text) && (
              <div className="col-lg-10 promo-text">
                {page.promo_title && <h2>{page.promo_title}</h2>}
                {page.promo_text && (
                  <div dangerouslySetInnerHTML={{ __html: page.promo_text }} />
                )}
              </div>
            )}
            {page.promo_image && (
              <figure>
                <Image
                  src={page.promo_image.meta.download_url}
                  alt={page.promo_image.title}
                  width={590}
                  height={413}
                />
              </figure>
            )}
          </div>
        </div>
      </div>

      {page.body.length > 0 && (
        <div className="container-fluid streamfield">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 streamfield-column">
              <BaseStreamBlock blocks={page.body} />
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <div className="row">
          <div className="col-md-12 locations-section">
            {page.featured_section_2 && (
              <>
                <h2 className="locations-section__title">
                  {page.featured_section_2_title}
                </h2>
                {featuredSection2Children.map((child) => (
                  <LocationCard key={child.id} location={child} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {page.featured_section_3 && (
        <div className="blog-section__background">
          <div className="container">
            <div className="row">
              <div className="col-md-12 blog-section">
                <h2 className="blog-section__title">
                  {page.featured_section_3_title}
                </h2>
                <div className="blog-section__grid">
                  {featuredSection3Children.map((child) => (
                    <PictureCard
                      key={child.id}
                      url={child.meta.html_path}
                      title={child.title}
                      image={child.image!}
                      portrait
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
