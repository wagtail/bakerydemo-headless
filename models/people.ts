import { z } from 'zod';
import blocks from './blocks/base';
import breads from './breads';
import wagtailcore from './wagtailcore';
import wagtailimages from './wagtailimages';

const socialMediaLinkSchema = z.object({
  type: z.literal('social'),
  id: z.string(),
  value: z.object({
    platform: z.enum([
      'github',
      'twitter',
      'linkedin',
      'instagram',
      'facebook',
      'mastodon',
      'website',
    ]),
    url: z.url(),
  }),
});

const personPageSchema = wagtailcore.Page.extend({
  introduction: z.string(),
  image: wagtailimages.Image.nullable(),
  body: blocks.BaseStreamBlock,
  location: breads.Country.nullable(),
  social_links: z.array(socialMediaLinkSchema),
});

const peopleIndexPageSchema = wagtailcore.Page.extend({
  introduction: z.string(),
  image: wagtailimages.Image.nullable(),
});

const schemas = {
  SocialMediaLink: socialMediaLinkSchema,
  PersonPage: personPageSchema,
  PeopleIndexPage: peopleIndexPageSchema,
} as const;

export default schemas;

export namespace people {
  export type SocialMediaLink = z.infer<typeof schemas.SocialMediaLink>;
  export type PersonPage = z.infer<typeof schemas.PersonPage>;
  export type PeopleIndexPage = z.infer<typeof schemas.PeopleIndexPage>;
}
