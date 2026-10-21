import { cookies, draftMode } from 'next/headers';
import DynamicUserbar from '@/components/DynamicUserbar';
import { getPageComponent, resolvePageType } from '@/components/pages';
import api from '@/lib/api';

export default async function Preview({
  searchParams,
}: {
  searchParams: Promise<{
    inPreviewPanel?: string;
  }>;
}) {
  const draft = await draftMode();
  const cookieStore = await cookies();

  let data: { contentType: string; token: string } | Record<string, never>;
  try {
    data = JSON.parse(cookieStore.get('__wagtail_preview_data')?.value || '');
  } catch {
    data = {};
  }

  if (!draft.isEnabled || !data.token || !data.contentType) {
    return (
      <main id="main-content">
        <h1>Preview unavailable.</h1>
      </main>
    );
  }

  const params = await searchParams;
  const { token } = data;
  // Wagtail sends a lowercase content type, e.g. `blog.blogpage`
  const contentType = resolvePageType(data.contentType);
  if (!contentType) {
    return (
      <main id="main-content">
        <h1>Preview unavailable.</h1>
      </main>
    );
  }

  const page = await api.getPreview(contentType, token);
  const PageComponent = getPageComponent(contentType);

  return (
    <>
      <DynamicUserbar
        hidden={params.inPreviewPanel === 'true'}
        pageId={page.id ?? undefined}
      />
      <main id="main-content">
        <PageComponent page={page} searchParams={searchParams} />
      </main>
    </>
  );
}
