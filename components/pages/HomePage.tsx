import Image from 'next/image';
import Link from 'next/link';
import ListingCard from '@/components/cards/ListingCard';
import PictureCard from '@/components/cards/PictureCard';
import LocationCard from '@/components/LocationCard';
import ChevronIcon from '@/components/layout/ChevronIcon';
import api from '@/lib/api';
import { getPath, getRendition, type Page } from '@/lib/wagtail';
import BaseStreamBlock from '../streamfield/BaseStreamBlock';
import type { PageComponentProps } from './types';

export default async function HomePage({
  page,
}: PageComponentProps<Page<'base.HomePage'>>) {
  const featuredSection1Children = page.featured_section_1
    ? (
        await api.getPages({
          type: 'breads.BreadPage',
          child_of: page.featured_section_1.id,
          limit: 3,
        })
      ).items
    : [];

  const featuredSection2Children = page.featured_section_2
    ? (
        await api.getPages({
          type: 'locations.LocationPage',
          child_of: page.featured_section_2.id,
          limit: 3,
        })
      ).items
    : [];

  const featuredSection3Children = page.featured_section_3
    ? (
        await api.getPages({
          type: 'blog.BlogPage',
          child_of: page.featured_section_3.id,
          limit: 6,
        })
      ).items
    : [];

  const heroImage = getRendition(page.image_hero);
  const leadImage = getRendition(page.lead_image_promo);

  return (
    <div className="homepage">
      <div className="container-fluid hero">
        {heroImage && (
          <Image
            src={heroImage.full_url}
            alt=""
            width={heroImage.width}
            height={heroImage.height}
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
                  href={getPath(page.hero_cta_link.meta.html_url)}
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
                        url={getPath(child.meta.html_url)}
                        title={child.title}
                        image={getRendition(child.image_listing)}
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
            {(leadImage || page.lead_title || page.lead_text) && (
              <div className="col-lg-10 promo-text">
                {page.lead_title && <h2>{page.lead_title}</h2>}
                {page.lead_text && (
                  <div dangerouslySetInnerHTML={{ __html: page.lead_text }} />
                )}
              </div>
            )}
            {leadImage && (
              <figure>
                <Image
                  src={leadImage.full_url}
                  alt={leadImage.alt}
                  width={leadImage.width}
                  height={leadImage.height}
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
                      url={getPath(child.meta.html_url)}
                      title={child.title}
                      image={getRendition(child.image_picture_card)}
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
