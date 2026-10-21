import type { components } from '@/lib/generated/schema';
import type { Page } from '@/lib/wagtail';

export type BaseStreamBlockValue = Page<'base.StandardPage'>['body'];
export type RecipeStreamBlockValue = Page<'recipes.RecipePage'>['body'];

type BaseBlockItem = BaseStreamBlockValue[number];
type RecipeBlockItem = RecipeStreamBlockValue[number];

/** A block of the given type in `BaseStreamBlock`. */
export type BaseBlock<T extends BaseBlockItem['type']> = Extract<
  BaseBlockItem,
  { type: T }
>;
/** A block of the given type in `RecipeStreamBlock`. */
export type RecipeBlock<T extends RecipeBlockItem['type']> = Extract<
  RecipeBlockItem,
  { type: T }
>;
/** A block of the given type, from any of the StreamFields that use it. */
export type Block<T extends BaseBlockItem['type'] | RecipeBlockItem['type']> =
  Extract<BaseBlockItem | RecipeBlockItem, { type: T }>;

export type ImageBlockValue = components['schemas']['CustomImageBlock'];
