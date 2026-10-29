import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DynamicUserbar from '@/components/DynamicUserbar';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { getPageComponent } from '@/components/pages';
import api, { APIError } from '@/lib/api';

interface PageProps {
  params: Promise<{ path?: string[] }>;
  searchParams: Promise<Record<string, string>>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { path: pathSplit = [] } = await params;
  const path = `/${pathSplit.join('/')}`;
  try {
    const page = await api.getPage(path);
    return {
      title: page.meta.seo_title || page.title,
      description: page.meta.search_description,
    };
  } catch (error) {
    if (error instanceof APIError && error.status === 404) notFound();
    throw error;
  }
}

export default async function Page({ params, searchParams }: PageProps) {
  const { path: pathSplit = [] } = await params;
  const path = `/${pathSplit.join('/')}`;

  try {
    // The page detail is already resolved to its specific type
    const page = await api.getPage(path);
    const PageComponent = getPageComponent(page.meta.type);

    return (
      <>
        <Breadcrumbs page={page} />
        <DynamicUserbar pageId={page.id ?? undefined} />
        <main id="main-content">
          <PageComponent page={page} searchParams={searchParams} />
        </main>
      </>
    );
  } catch (error) {
    if (!(error instanceof APIError && error.status === 404)) {
      console.error(`Error fetching page for path ${path}:`, error);
    }
    notFound();
  }
}
