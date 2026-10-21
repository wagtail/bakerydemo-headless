import type { PageDetail } from '@/lib/wagtail';

export type PageComponentProps<T extends PageDetail = PageDetail> = {
  page: T;
  searchParams?: Promise<Record<string, string>>;
  params?: Promise<Record<string, string>>;
};
