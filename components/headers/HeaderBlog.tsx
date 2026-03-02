import Image from 'next/image';
import { formatDate } from '@/lib/format';
import type { wagtailimages } from '@/models';

interface HeaderBlogProps {
  title: string;
  subtitle?: string;
  introduction?: string;
  date_published?: string | null;
  image?: wagtailimages.Image | null;
}

export default function HeaderBlog({
  title,
  subtitle,
  introduction,
  date_published,
  image,
}: HeaderBlogProps) {
  return (
    <>
      {image && (
        <div className="container-fluid hero hero--blog">
          <Image
            src={image.meta.download_url}
            alt=""
            width={1920}
            height={600}
            sizes="100vw"
            className="hero-image"
            priority
          />
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-9">
            <h1 className="index-header__title index-header__title--blog">
              {title}
            </h1>
            {subtitle && <p>{subtitle}</p>}
          </div>
          <div className="col-sm-12 col-md-7">
            {introduction && (
              <p className="index-header__introduction index-header__introduction--blog">
                {introduction}
              </p>
            )}
            {date_published && (
              <div className="blog__published">
                {formatDate(date_published)}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
