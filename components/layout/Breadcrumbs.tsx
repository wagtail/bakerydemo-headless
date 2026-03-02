import Link from 'next/link';
import type { wagtailcore } from '@/models';
import ChevronIcon from './ChevronIcon';

interface BreadcrumbsProps {
  page: wagtailcore.Page;
}

export default function Breadcrumbs({ page }: BreadcrumbsProps) {
  const parent = page.meta.parent;
  if (!parent) return null;

  const ancestors: Array<{ title: string; url: string }> = [];

  const parentIsHome = parent.meta.html_path === '/';
  if (parentIsHome) {
    ancestors.push({ title: 'Home', url: '/' });
  } else {
    ancestors.push({ title: 'Home', url: '/' });
    ancestors.push({ title: parent.title, url: parent.meta.html_path });
  }

  return (
    <nav className="breadcrumb-container" aria-label="Breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ol className="breadcrumb">
              {ancestors.map((ancestor) => (
                <li key={ancestor.url}>
                  <Link href={ancestor.url}>{ancestor.title}</Link>
                  <ChevronIcon className="breadcrumb__chevron-icon" />
                </li>
              ))}
              <li aria-current="page">{page.title}</li>
            </ol>
          </div>
        </div>
      </div>
    </nav>
  );
}
