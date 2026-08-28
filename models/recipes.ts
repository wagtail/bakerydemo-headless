import { z } from 'zod';
import { schemas as generated } from '@/lib/generated/schemas';
import base from './base';
import blocks from './blocks';
import { withHtmlPath } from './wagtailcore';

// RecipePersonRelationship schema
const recipePersonRelationshipSchema =
  generated.RecipePersonRelationshipSchema.extend({
    person: base.Person,
  });

// RecipePage schema
const recipePageSchema = generated.RecipePageSchema.extend({
  meta: withHtmlPath(generated.RecipePageSchema.shape.meta),
  backstory: blocks.base.BaseStreamBlock,
  body: blocks.recipes.RecipeStreamBlock,
  recipe_person_relationship: z.array(recipePersonRelationshipSchema),
});

// RecipeIndexPage schema
const recipeIndexPageSchema = generated.RecipeIndexPageSchema.extend({
  meta: withHtmlPath(generated.RecipeIndexPageSchema.shape.meta),
});

// Export schemas
const schemas = {
  RecipePersonRelationship: recipePersonRelationshipSchema,
  RecipePage: recipePageSchema,
  RecipeIndexPage: recipeIndexPageSchema,
} as const;

export default schemas;

// Derived TypeScript types
export namespace recipes {
  export type RecipePersonRelationship = z.infer<
    typeof schemas.RecipePersonRelationship
  >;
  export type RecipePage = z.infer<typeof schemas.RecipePage>;
  export type RecipeIndexPage = z.infer<typeof schemas.RecipeIndexPage>;
}
