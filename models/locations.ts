import { z } from 'zod';
import { schemas as generated } from '@/lib/generated/schemas';
import blocks from './blocks/base';
import { withHtmlPath } from './wagtailcore';
import wagtailimages from './wagtailimages';

// Operating Hours schema
const operatingHoursSchema = generated.LocationOperatingHoursSchema.extend({
  day: z.enum(['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']),
});

// LocationPage schema
const locationPageSchema = generated.LocationPageSchema.extend({
  meta: withHtmlPath(generated.LocationPageSchema.shape.meta),
  image: wagtailimages.Image.nullable(),
  body: blocks.BaseStreamBlock,
  is_open: z.boolean(),
  hours_of_operation: z.array(operatingHoursSchema),
  image_hero: wagtailimages.ImageRendition.optional(),
  image_location_card: wagtailimages.ImageRendition.optional(),
  image_picture_card: wagtailimages.ImageRendition.optional(),
});

// LocationsIndexPage schema
const locationsIndexPageSchema = generated.LocationsIndexPageSchema.extend({
  meta: withHtmlPath(generated.LocationsIndexPageSchema.shape.meta),
  image: wagtailimages.Image.nullable(),
});

// Export schemas
const schemas = {
  OperatingHours: operatingHoursSchema,
  LocationPage: locationPageSchema,
  LocationsIndexPage: locationsIndexPageSchema,
} as const;

export default schemas;

// Derived TypeScript types
export namespace locations {
  export type OperatingHours = z.infer<typeof schemas.OperatingHours>;
  export type LocationPage = z.infer<typeof schemas.LocationPage>;
  export type LocationsIndexPage = z.infer<typeof schemas.LocationsIndexPage>;
}
