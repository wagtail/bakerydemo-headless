import { notFound } from 'next/navigation';
import { iget } from '@/lib/object';
import type { Page, PageType } from '@/lib/wagtail';
import BlogIndexPage from './BlogIndexPage';
import BlogPage from './BlogPage';
import BreadPage from './BreadPage';
import BreadsIndexPage from './BreadsIndexPage';
import FormPage from './FormPage';
import GalleryPage from './GalleryPage';
import HomePage from './HomePage';
import LocationPage from './LocationPage';
import LocationsIndexPage from './LocationsIndexPage';
import PeopleIndexPage from './PeopleIndexPage';
import PersonPage from './PersonPage';
import RecipeIndexPage from './RecipeIndexPage';
import RecipePage from './RecipePage';
import StandardPage from './StandardPage';
import type { PageComponentProps } from './types';

const pageComponents = {
  'base.HomePage': HomePage,
  'base.StandardPage': StandardPage,
  'base.FormPage': FormPage,
  'base.GalleryPage': GalleryPage,
  'blog.BlogIndexPage': BlogIndexPage,
  'blog.BlogPage': BlogPage,
  'recipes.RecipeIndexPage': RecipeIndexPage,
  'recipes.RecipePage': RecipePage,
  'breads.BreadsIndexPage': BreadsIndexPage,
  'breads.BreadPage': BreadPage,
  'locations.LocationsIndexPage': LocationsIndexPage,
  'locations.LocationPage': LocationPage,
  'people.PeopleIndexPage': PeopleIndexPage,
  'people.PersonPage': PersonPage,
} satisfies {
  [T in PageType]?: React.ComponentType<PageComponentProps<Page<T>>>;
};

export type PageComponent = React.ComponentType<PageComponentProps>;

export default pageComponents;

/**
 * Get the page type with the correct casing for a content type string, e.g.
 * `blog.blogpage` (as used by Wagtail's preview URLs) to `blog.BlogPage`.
 */
export function resolvePageType(contentType: string): PageType | undefined {
  const ikey = contentType.toLowerCase();
  return Object.keys(pageComponents).find(
    (key) => key.toLowerCase() === ikey,
  ) as PageType | undefined;
}

export function getPageComponent(contentType: string) {
  // Check if we have a component for this page type
  const PageComponent = iget(pageComponents, contentType) as PageComponent;
  if (!PageComponent) {
    console.error(`No component found for page type: ${contentType}`);
    notFound();
  }
  return PageComponent;
}
