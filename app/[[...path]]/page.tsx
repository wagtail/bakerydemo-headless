import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { getPageComponent, type PageType } from '@/components/pages';
import api from '@/lib/api';

interface PageProps {
  params: Promise<{ path?: string[] }>;
  searchParams: Promise<Record<string, string>>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { path: pathSplit = [] } = await params;
  const path = `/${pathSplit.join('/')}`;
  const basicPage = await api.getPage(path, 'wagtailcore.Page');
  return {
    title: basicPage.meta.seo_title || basicPage.title,
    description: basicPage.meta.search_description,
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { path: pathSplit = [] } = await params;
  const path = `/${pathSplit.join('/')}`;

  try {
    // First fetch to get the specific page type
    const basicPage = await api.getPage(path, 'wagtailcore.Page');

    // Get the specific page type from meta
    const pageType = basicPage.meta.type as PageType;

    // Check if we have a component for this page type
    const PageComponent = getPageComponent(pageType);

    // Second fetch to get the full page data with the specific type
    const page = await api.getPage(basicPage.id, pageType);

    return (
      <>
        <Breadcrumbs page={basicPage} />
        <main id="main-content">
          <PageComponent page={page} searchParams={searchParams} />
        </main>
      </>
    );
  } catch {
    notFound();
  }
}
