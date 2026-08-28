import { z } from "zod";

const ancestor_of = z.union([z.number(), z.null()]).optional();
const child_of = z.union([z.number(), z.string(), z.null()]).optional();
const locale = z.union([z.string(), z.null()]).optional();
const order = z
  .union([z.string(), z.array(z.string())])
  .optional()
  .default([]);
const search_operator = z.union([z.enum(["and", "or"]), z.null()]).optional();
const RichTextRemoval = z
  .object({
    tag: z.string(),
    action: z.enum(["unwrapped", "removed"]),
    reason: z.enum([
      "feature_disabled",
      "unknown_linktype",
      "unknown_embedtype",
      "missing_attribute",
    ]),
    attribute: z.union([z.string(), z.null()]).optional(),
    detail: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const BasePageMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]).optional(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const BasePageSchema = z
  .object({ meta: BasePageMetaSchema, id: z.number().int(), title: z.string() })
  .passthrough();
const PagedBasePageSchema = z
  .object({ items: z.array(BasePageSchema), count: z.number().int() })
  .passthrough();
const StandardPageCreateMetaSchema = z
  .object({
    type: z.string(),
    parent_id: z.number().int(),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const StandardPageCreateSchema = z
  .object({
    meta: StandardPageCreateMetaSchema,
    title: z.string().max(255),
    slug: z.union([z.string(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional().default(false),
  })
  .passthrough();
const HomePageCreateMetaSchema = z
  .object({
    type: z.string(),
    parent_id: z.number().int(),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const HomePageCreateSchema = z
  .object({
    meta: HomePageCreateMetaSchema,
    title: z.string().max(255),
    slug: z.union([z.string(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional().default(false),
  })
  .passthrough();
const GalleryPageCreateMetaSchema = z
  .object({
    type: z.string(),
    parent_id: z.number().int(),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const GalleryPageCreateSchema = z
  .object({
    meta: GalleryPageCreateMetaSchema,
    title: z.string().max(255),
    slug: z.union([z.string(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional().default(false),
  })
  .passthrough();
const FormPageCreateMetaSchema = z
  .object({
    type: z.string(),
    parent_id: z.number().int(),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const FormPageCreateSchema = z
  .object({
    meta: FormPageCreateMetaSchema,
    title: z.string().max(255),
    slug: z.union([z.string(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional().default(false),
  })
  .passthrough();
const BlogPageCreateMetaSchema = z
  .object({
    type: z.string(),
    parent_id: z.number().int(),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const BlogPersonRelationshipCreateSchema = z
  .object({ page_id: z.number().int(), person_id: z.number().int() })
  .passthrough();
const BlogPageCreateSchema = z
  .object({
    meta: BlogPageCreateMetaSchema,
    title: z.string().max(255),
    slug: z.union([z.string(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional().default(false),
    introduction: z.union([z.string(), z.null()]).optional(),
    image_id: z.union([z.number(), z.null()]).optional(),
    body: z.array(z.unknown()).optional().default([]),
    subtitle: z.union([z.string(), z.null()]).optional(),
    date_published: z.union([z.string(), z.null()]).optional(),
    blog_person_relationship: z
      .array(BlogPersonRelationshipCreateSchema)
      .optional()
      .default([]),
  })
  .passthrough();
const BlogIndexPageCreateMetaSchema = z
  .object({
    type: z.string(),
    parent_id: z.number().int(),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const BlogIndexPageCreateSchema = z
  .object({
    meta: BlogIndexPageCreateMetaSchema,
    title: z.string().max(255),
    slug: z.union([z.string(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional().default(false),
    introduction: z.union([z.string(), z.null()]).optional(),
    image_id: z.union([z.number(), z.null()]).optional(),
  })
  .passthrough();
const BreadPageCreateMetaSchema = z
  .object({
    type: z.string(),
    parent_id: z.number().int(),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const BreadPageCreateSchema = z
  .object({
    meta: BreadPageCreateMetaSchema,
    title: z.string().max(255),
    slug: z.union([z.string(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional().default(false),
  })
  .passthrough();
const BreadsIndexPageCreateMetaSchema = z
  .object({
    type: z.string(),
    parent_id: z.number().int(),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const BreadsIndexPageCreateSchema = z
  .object({
    meta: BreadsIndexPageCreateMetaSchema,
    title: z.string().max(255),
    slug: z.union([z.string(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional().default(false),
  })
  .passthrough();
const LocationsIndexPageCreateMetaSchema = z
  .object({
    type: z.string(),
    parent_id: z.number().int(),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const LocationsIndexPageCreateSchema = z
  .object({
    meta: LocationsIndexPageCreateMetaSchema,
    title: z.string().max(255),
    slug: z.union([z.string(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional().default(false),
  })
  .passthrough();
const LocationPageCreateMetaSchema = z
  .object({
    type: z.string(),
    parent_id: z.number().int(),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const LocationPageCreateSchema = z
  .object({
    meta: LocationPageCreateMetaSchema,
    title: z.string().max(255),
    slug: z.union([z.string(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional().default(false),
  })
  .passthrough();
const RecipePageCreateMetaSchema = z
  .object({
    type: z.string(),
    parent_id: z.number().int(),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const RecipePageCreateSchema = z
  .object({
    meta: RecipePageCreateMetaSchema,
    title: z.string().max(255),
    slug: z.union([z.string(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional().default(false),
  })
  .passthrough();
const RecipeIndexPageCreateMetaSchema = z
  .object({
    type: z.string(),
    parent_id: z.number().int(),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const RecipeIndexPageCreateSchema = z
  .object({
    meta: RecipeIndexPageCreateMetaSchema,
    title: z.string().max(255),
    slug: z.union([z.string(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional().default(false),
  })
  .passthrough();
const PersonPageCreateMetaSchema = z
  .object({
    type: z.string(),
    parent_id: z.number().int(),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const PersonPageCreateSchema = z
  .object({
    meta: PersonPageCreateMetaSchema,
    title: z.string().max(255),
    slug: z.union([z.string(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional().default(false),
  })
  .passthrough();
const PeopleIndexPageCreateMetaSchema = z
  .object({
    type: z.string(),
    parent_id: z.number().int(),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const PeopleIndexPageCreateSchema = z
  .object({
    meta: PeopleIndexPageCreateMetaSchema,
    title: z.string().max(255),
    slug: z.union([z.string(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional().default(false),
  })
  .passthrough();
const pages_create_Body = z.union([
  StandardPageCreateSchema,
  HomePageCreateSchema,
  GalleryPageCreateSchema,
  FormPageCreateSchema,
  BlogPageCreateSchema,
  BlogIndexPageCreateSchema,
  BreadPageCreateSchema,
  BreadsIndexPageCreateSchema,
  LocationsIndexPageCreateSchema,
  LocationPageCreateSchema,
  RecipePageCreateSchema,
  RecipeIndexPageCreateSchema,
  PersonPageCreateSchema,
  PeopleIndexPageCreateSchema,
]);
const rich_text_format = z
  .union([z.enum(["db_html", "html", "db_markdown", "markdown"]), z.null()])
  .optional();
const SimpleBasePageMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    warnings: z.union([
      z.array(z.union([RichTextRemoval, z.string()])),
      z.null(),
    ]),
    detail_url: z.union([z.string(), z.null()]),
    html_url: z.union([z.string(), z.null()]),
  })
  .partial()
  .passthrough();
const SimpleBasePageSchema = z
  .object({
    meta: SimpleBasePageMetaSchema,
    id: z.number().int(),
    title: z.string(),
  })
  .passthrough();
const abc__PageMetaSchema__1 = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    alias_of: z.union([SimpleBasePageSchema, z.null()]).optional(),
    parent: z.union([SimpleBasePageSchema, z.null()]).optional(),
  })
  .passthrough();
const PageSchema = z
  .object({
    meta: abc__PageMetaSchema__1,
    id: z.union([z.number(), z.null()]).optional(),
    title: z.string(),
  })
  .passthrough();
const StandardPageMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    alias_of: z.union([SimpleBasePageSchema, z.null()]).optional(),
    parent: z.union([SimpleBasePageSchema, z.null()]).optional(),
  })
  .passthrough();
const ImageMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
  })
  .passthrough();
const ImageForeignKeySchema = z
  .object({
    meta: ImageMetaSchema,
    id: z.union([z.number(), z.null()]).optional(),
  })
  .passthrough();
const StandardPageSchema = z
  .object({
    meta: StandardPageMetaSchema,
    id: z.number().int(),
    title: z.string(),
    introduction: z.union([z.string(), z.null()]).optional(),
    image: z.union([ImageForeignKeySchema, z.null()]).optional(),
    body: z.array(z.unknown()).optional().default([]),
    image_hero: z.unknown().optional(),
  })
  .passthrough();
const HomePageMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    alias_of: z.union([SimpleBasePageSchema, z.null()]).optional(),
    parent: z.union([SimpleBasePageSchema, z.null()]).optional(),
  })
  .passthrough();
const abc__PageMetaSchema__2 = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
  })
  .passthrough();
const PageForeignKeySchema = z
  .object({
    meta: abc__PageMetaSchema__2,
    id: z.union([z.number(), z.null()]).optional(),
  })
  .passthrough();
const HomePageSchema = z
  .object({
    meta: HomePageMetaSchema,
    id: z.number().int(),
    title: z.string(),
    hero_text: z.string().max(255),
    hero_cta: z.string().max(255),
    lead_title: z.union([z.string(), z.null()]).optional(),
    featured_section_1_title: z.union([z.string(), z.null()]).optional(),
    featured_section_2_title: z.union([z.string(), z.null()]).optional(),
    featured_section_3_title: z.union([z.string(), z.null()]).optional(),
    image: z.union([ImageForeignKeySchema, z.null()]).optional(),
    hero_cta_link: z.union([PageForeignKeySchema, z.null()]).optional(),
    body: z.array(z.unknown()).optional().default([]),
    lead_image: z.union([ImageForeignKeySchema, z.null()]).optional(),
    lead_text: z.union([z.string(), z.null()]).optional(),
    featured_section_1: z.union([PageForeignKeySchema, z.null()]).optional(),
    featured_section_2: z.union([PageForeignKeySchema, z.null()]).optional(),
    featured_section_3: z.union([PageForeignKeySchema, z.null()]).optional(),
    image_hero: z.unknown().optional(),
    lead_image_promo: z.unknown().optional(),
  })
  .passthrough();
const GalleryPageMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    alias_of: z.union([SimpleBasePageSchema, z.null()]).optional(),
    parent: z.union([SimpleBasePageSchema, z.null()]).optional(),
  })
  .passthrough();
const CollectionMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
  })
  .passthrough();
const CollectionForeignKeySchema = z
  .object({
    meta: CollectionMetaSchema,
    id: z.union([z.number(), z.null()]).optional(),
  })
  .passthrough();
const GalleryPageSchema = z
  .object({
    meta: GalleryPageMetaSchema,
    id: z.number().int(),
    title: z.string(),
    introduction: z.union([z.string(), z.null()]).optional(),
    image: z.union([ImageForeignKeySchema, z.null()]).optional(),
    body: z.array(z.unknown()).optional().default([]),
    collection: z.union([CollectionForeignKeySchema, z.null()]).optional(),
    image_hero: z.unknown().optional(),
  })
  .passthrough();
const FormPageMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    alias_of: z.union([SimpleBasePageSchema, z.null()]).optional(),
    parent: z.union([SimpleBasePageSchema, z.null()]).optional(),
  })
  .passthrough();
const FormFieldMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
  })
  .passthrough();
const FormFieldSchema = z
  .object({
    meta: FormFieldMetaSchema,
    id: z.union([z.number(), z.null()]).optional(),
    clean_name: z.union([z.string(), z.null()]).optional().default(""),
    label: z.string().max(255),
    field_type: z.string().max(16),
    help_text: z.union([z.string(), z.null()]).optional(),
    required: z.boolean().optional().default(true),
    choices: z.union([z.string(), z.null()]).optional(),
    default_value: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const FormPageSchema = z
  .object({
    meta: FormPageMetaSchema,
    id: z.number().int(),
    title: z.string(),
    from_address: z.union([z.string(), z.null()]).optional(),
    to_address: z.union([z.string(), z.null()]).optional(),
    subject: z.union([z.string(), z.null()]).optional(),
    form_fields: z.array(FormFieldSchema).optional().default([]),
    image: z.union([ImageForeignKeySchema, z.null()]).optional(),
    body: z.array(z.unknown()).optional().default([]),
    thank_you_text: z.union([z.string(), z.null()]).optional(),
    image_hero: z.unknown().optional(),
  })
  .passthrough();
const abc__BlogPageMetaSchema__1 = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    alias_of: z.union([SimpleBasePageSchema, z.null()]).optional(),
    parent: z.union([SimpleBasePageSchema, z.null()]).optional(),
  })
  .passthrough();
const BlogPersonRelationshipMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
  })
  .passthrough();
const abc__BlogPageMetaSchema__2 = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
  })
  .passthrough();
const BlogPageForeignKeySchema = z
  .object({
    meta: abc__BlogPageMetaSchema__2,
    id: z.union([z.number(), z.null()]).optional(),
  })
  .passthrough();
const PersonMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
  })
  .passthrough();
const PersonForeignKeySchema = z
  .object({
    meta: PersonMetaSchema,
    id: z.union([z.number(), z.null()]).optional(),
  })
  .passthrough();
const BlogPersonRelationshipSchema = z
  .object({
    meta: BlogPersonRelationshipMetaSchema,
    id: z.union([z.number(), z.null()]).optional(),
    page: BlogPageForeignKeySchema.optional(),
    person: PersonForeignKeySchema.optional(),
  })
  .passthrough();
const BlogPageSchema = z
  .object({
    meta: abc__BlogPageMetaSchema__1,
    id: z.number().int(),
    title: z.string(),
    introduction: z.union([z.string(), z.null()]).optional(),
    subtitle: z.union([z.string(), z.null()]).optional(),
    date_published: z.union([z.string(), z.null()]).optional(),
    image: z.union([ImageForeignKeySchema, z.null()]).optional(),
    body: z.array(z.unknown()).optional().default([]),
    tags: z.array(z.string()).optional().default([]),
    blog_person_relationship: z
      .array(BlogPersonRelationshipSchema)
      .optional()
      .default([]),
    image_hero: z.unknown().optional(),
    image_listing: z.unknown().optional(),
    image_picture_card: z.unknown().optional(),
  })
  .passthrough();
const BlogIndexPageMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    alias_of: z.union([SimpleBasePageSchema, z.null()]).optional(),
    parent: z.union([SimpleBasePageSchema, z.null()]).optional(),
  })
  .passthrough();
const BlogIndexPageSchema = z
  .object({
    meta: BlogIndexPageMetaSchema,
    id: z.number().int(),
    title: z.string(),
    introduction: z.union([z.string(), z.null()]).optional(),
    image: z.union([ImageForeignKeySchema, z.null()]).optional(),
  })
  .passthrough();
const BreadPageMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    alias_of: z.union([SimpleBasePageSchema, z.null()]).optional(),
    parent: z.union([SimpleBasePageSchema, z.null()]).optional(),
  })
  .passthrough();
const CountryMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
  })
  .passthrough();
const CountryForeignKeySchema = z
  .object({
    meta: CountryMetaSchema,
    id: z.union([z.number(), z.null()]).optional(),
  })
  .passthrough();
const BreadTypeMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
  })
  .passthrough();
const BreadTypeForeignKeySchema = z
  .object({
    meta: BreadTypeMetaSchema,
    id: z.union([z.number(), z.null()]).optional(),
  })
  .passthrough();
const BreadPageSchema = z
  .object({
    meta: BreadPageMetaSchema,
    id: z.number().int(),
    title: z.string(),
    introduction: z.union([z.string(), z.null()]).optional(),
    ingredients: z.array(z.number().int()),
    image: z.union([ImageForeignKeySchema, z.null()]).optional(),
    body: z.array(z.unknown()).optional().default([]),
    origin: z.union([CountryForeignKeySchema, z.null()]).optional(),
    bread_type: z.union([BreadTypeForeignKeySchema, z.null()]).optional(),
    image_hero: z.unknown().optional(),
    image_listing: z.unknown().optional(),
  })
  .passthrough();
const BreadsIndexPageMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    alias_of: z.union([SimpleBasePageSchema, z.null()]).optional(),
    parent: z.union([SimpleBasePageSchema, z.null()]).optional(),
  })
  .passthrough();
const BreadsIndexPageSchema = z
  .object({
    meta: BreadsIndexPageMetaSchema,
    id: z.number().int(),
    title: z.string(),
    introduction: z.union([z.string(), z.null()]).optional(),
    image: z.union([ImageForeignKeySchema, z.null()]).optional(),
  })
  .passthrough();
const LocationsIndexPageMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    alias_of: z.union([SimpleBasePageSchema, z.null()]).optional(),
    parent: z.union([SimpleBasePageSchema, z.null()]).optional(),
  })
  .passthrough();
const LocationsIndexPageSchema = z
  .object({
    meta: LocationsIndexPageMetaSchema,
    id: z.number().int(),
    title: z.string(),
    introduction: z.union([z.string(), z.null()]).optional(),
    image: z.union([ImageForeignKeySchema, z.null()]).optional(),
  })
  .passthrough();
const LocationPageMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    alias_of: z.union([SimpleBasePageSchema, z.null()]).optional(),
    parent: z.union([SimpleBasePageSchema, z.null()]).optional(),
  })
  .passthrough();
const LocationOperatingHoursMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
  })
  .passthrough();
const LocationOperatingHoursSchema = z
  .object({
    meta: LocationOperatingHoursMetaSchema,
    id: z.union([z.number(), z.null()]).optional(),
    day: z.string().max(3).optional().default("MON"),
    opening_time: z.union([z.string(), z.null()]).optional(),
    closing_time: z.union([z.string(), z.null()]).optional(),
    closed: z.union([z.boolean(), z.null()]).optional(),
    get_day_display: z.unknown().optional(),
  })
  .passthrough();
const LocationPageSchema = z
  .object({
    meta: LocationPageMetaSchema,
    id: z.number().int(),
    title: z.string(),
    introduction: z.union([z.string(), z.null()]).optional(),
    address: z.string(),
    lat_long: z.string().max(36),
    image: z.union([ImageForeignKeySchema, z.null()]).optional(),
    body: z.array(z.unknown()).optional().default([]),
    is_open: z.unknown().optional(),
    hours_of_operation: z
      .array(LocationOperatingHoursSchema)
      .optional()
      .default([]),
    image_hero: z.unknown().optional(),
    image_location_card: z.unknown().optional(),
    image_picture_card: z.unknown().optional(),
  })
  .passthrough();
const abc__RecipePageMetaSchema__1 = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    alias_of: z.union([SimpleBasePageSchema, z.null()]).optional(),
    parent: z.union([SimpleBasePageSchema, z.null()]).optional(),
  })
  .passthrough();
const RecipePersonRelationshipMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
  })
  .passthrough();
const abc__RecipePageMetaSchema__2 = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
  })
  .passthrough();
const RecipePageForeignKeySchema = z
  .object({
    meta: abc__RecipePageMetaSchema__2,
    id: z.union([z.number(), z.null()]).optional(),
  })
  .passthrough();
const RecipePersonRelationshipSchema = z
  .object({
    meta: RecipePersonRelationshipMetaSchema,
    id: z.union([z.number(), z.null()]).optional(),
    page: RecipePageForeignKeySchema.optional(),
    person: PersonForeignKeySchema.optional(),
  })
  .passthrough();
const RecipePageSchema = z
  .object({
    meta: abc__RecipePageMetaSchema__1,
    id: z.number().int(),
    title: z.string(),
    date_published: z.union([z.string(), z.null()]).optional(),
    subtitle: z.union([z.string(), z.null()]).optional(),
    introduction: z.union([z.string(), z.null()]).optional(),
    backstory: z.array(z.unknown()).optional().default([]),
    recipe_headline: z.union([z.string(), z.null()]).optional(),
    body: z.array(z.unknown()).optional().default([]),
    recipe_person_relationship: z
      .array(RecipePersonRelationshipSchema)
      .optional()
      .default([]),
  })
  .passthrough();
const RecipeIndexPageMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    alias_of: z.union([SimpleBasePageSchema, z.null()]).optional(),
    parent: z.union([SimpleBasePageSchema, z.null()]).optional(),
  })
  .passthrough();
const RecipeIndexPageSchema = z
  .object({
    meta: RecipeIndexPageMetaSchema,
    id: z.number().int(),
    title: z.string(),
    introduction: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const PersonPageMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    alias_of: z.union([SimpleBasePageSchema, z.null()]).optional(),
    parent: z.union([SimpleBasePageSchema, z.null()]).optional(),
  })
  .passthrough();
const PersonPageSchema = z
  .object({
    meta: PersonPageMetaSchema,
    id: z.number().int(),
    title: z.string(),
    introduction: z.union([z.string(), z.null()]).optional(),
    image: z.union([ImageForeignKeySchema, z.null()]).optional(),
    body: z.array(z.unknown()).optional().default([]),
    location: z.union([CountryForeignKeySchema, z.null()]).optional(),
    social_links: z.array(z.unknown()).optional().default([]),
    image_hero: z.unknown().optional(),
    image_listing: z.unknown().optional(),
  })
  .passthrough();
const PeopleIndexPageMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    html_url: z.union([z.string(), z.null()]).optional(),
    locale: z.union([z.string(), z.null()]).optional(),
    slug: z.string(),
    first_published_at: z.union([z.string(), z.null()]).optional(),
    show_in_menus: z.union([z.boolean(), z.null()]).optional(),
    seo_title: z.union([z.string(), z.null()]).optional(),
    search_description: z.union([z.string(), z.null()]).optional(),
    alias_of: z.union([SimpleBasePageSchema, z.null()]).optional(),
    parent: z.union([SimpleBasePageSchema, z.null()]).optional(),
  })
  .passthrough();
const PeopleIndexPageSchema = z
  .object({
    meta: PeopleIndexPageMetaSchema,
    id: z.number().int(),
    title: z.string(),
    introduction: z.union([z.string(), z.null()]).optional(),
    image: z.union([ImageForeignKeySchema, z.null()]).optional(),
  })
  .passthrough();
const version = z
  .union([z.enum(["live", "draft"]), z.null()])
  .optional()
  .default("live");
const StandardPagePatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const StandardPagePatchSchema = z
  .object({
    meta: z.union([StandardPagePatchMetaSchema, z.null()]),
    title: z.union([z.string(), z.null()]),
    slug: z.union([z.string(), z.null()]),
    seo_title: z.union([z.string(), z.null()]),
    search_description: z.union([z.string(), z.null()]),
    show_in_menus: z.union([z.boolean(), z.null()]).default(false),
  })
  .partial()
  .passthrough();
const HomePagePatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const HomePagePatchSchema = z
  .object({
    meta: z.union([HomePagePatchMetaSchema, z.null()]),
    title: z.union([z.string(), z.null()]),
    slug: z.union([z.string(), z.null()]),
    seo_title: z.union([z.string(), z.null()]),
    search_description: z.union([z.string(), z.null()]),
    show_in_menus: z.union([z.boolean(), z.null()]).default(false),
  })
  .partial()
  .passthrough();
const GalleryPagePatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const GalleryPagePatchSchema = z
  .object({
    meta: z.union([GalleryPagePatchMetaSchema, z.null()]),
    title: z.union([z.string(), z.null()]),
    slug: z.union([z.string(), z.null()]),
    seo_title: z.union([z.string(), z.null()]),
    search_description: z.union([z.string(), z.null()]),
    show_in_menus: z.union([z.boolean(), z.null()]).default(false),
  })
  .partial()
  .passthrough();
const FormPagePatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const FormPagePatchSchema = z
  .object({
    meta: z.union([FormPagePatchMetaSchema, z.null()]),
    title: z.union([z.string(), z.null()]),
    slug: z.union([z.string(), z.null()]),
    seo_title: z.union([z.string(), z.null()]),
    search_description: z.union([z.string(), z.null()]),
    show_in_menus: z.union([z.boolean(), z.null()]).default(false),
  })
  .partial()
  .passthrough();
const BlogPagePatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const BlogPersonRelationshipPatchSchema = z
  .object({
    id: z.union([z.number(), z.null()]),
    page_id: z.union([z.number(), z.null()]),
    person_id: z.union([z.number(), z.null()]),
  })
  .partial()
  .passthrough();
const BlogPagePatchSchema = z
  .object({
    meta: z.union([BlogPagePatchMetaSchema, z.null()]),
    title: z.union([z.string(), z.null()]),
    slug: z.union([z.string(), z.null()]),
    seo_title: z.union([z.string(), z.null()]),
    search_description: z.union([z.string(), z.null()]),
    show_in_menus: z.union([z.boolean(), z.null()]).default(false),
    introduction: z.union([z.string(), z.null()]),
    image_id: z.union([z.number(), z.null()]),
    body: z.array(z.unknown()).default([]),
    subtitle: z.union([z.string(), z.null()]),
    date_published: z.union([z.string(), z.null()]),
    blog_person_relationship: z
      .array(BlogPersonRelationshipPatchSchema)
      .default([]),
  })
  .partial()
  .passthrough();
const BlogIndexPagePatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const BlogIndexPagePatchSchema = z
  .object({
    meta: z.union([BlogIndexPagePatchMetaSchema, z.null()]),
    title: z.union([z.string(), z.null()]),
    slug: z.union([z.string(), z.null()]),
    seo_title: z.union([z.string(), z.null()]),
    search_description: z.union([z.string(), z.null()]),
    show_in_menus: z.union([z.boolean(), z.null()]).default(false),
    introduction: z.union([z.string(), z.null()]),
    image_id: z.union([z.number(), z.null()]),
  })
  .partial()
  .passthrough();
const BreadPagePatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const BreadPagePatchSchema = z
  .object({
    meta: z.union([BreadPagePatchMetaSchema, z.null()]),
    title: z.union([z.string(), z.null()]),
    slug: z.union([z.string(), z.null()]),
    seo_title: z.union([z.string(), z.null()]),
    search_description: z.union([z.string(), z.null()]),
    show_in_menus: z.union([z.boolean(), z.null()]).default(false),
  })
  .partial()
  .passthrough();
const BreadsIndexPagePatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const BreadsIndexPagePatchSchema = z
  .object({
    meta: z.union([BreadsIndexPagePatchMetaSchema, z.null()]),
    title: z.union([z.string(), z.null()]),
    slug: z.union([z.string(), z.null()]),
    seo_title: z.union([z.string(), z.null()]),
    search_description: z.union([z.string(), z.null()]),
    show_in_menus: z.union([z.boolean(), z.null()]).default(false),
  })
  .partial()
  .passthrough();
const LocationsIndexPagePatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const LocationsIndexPagePatchSchema = z
  .object({
    meta: z.union([LocationsIndexPagePatchMetaSchema, z.null()]),
    title: z.union([z.string(), z.null()]),
    slug: z.union([z.string(), z.null()]),
    seo_title: z.union([z.string(), z.null()]),
    search_description: z.union([z.string(), z.null()]),
    show_in_menus: z.union([z.boolean(), z.null()]).default(false),
  })
  .partial()
  .passthrough();
const LocationPagePatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const LocationPagePatchSchema = z
  .object({
    meta: z.union([LocationPagePatchMetaSchema, z.null()]),
    title: z.union([z.string(), z.null()]),
    slug: z.union([z.string(), z.null()]),
    seo_title: z.union([z.string(), z.null()]),
    search_description: z.union([z.string(), z.null()]),
    show_in_menus: z.union([z.boolean(), z.null()]).default(false),
  })
  .partial()
  .passthrough();
const RecipePagePatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const RecipePagePatchSchema = z
  .object({
    meta: z.union([RecipePagePatchMetaSchema, z.null()]),
    title: z.union([z.string(), z.null()]),
    slug: z.union([z.string(), z.null()]),
    seo_title: z.union([z.string(), z.null()]),
    search_description: z.union([z.string(), z.null()]),
    show_in_menus: z.union([z.boolean(), z.null()]).default(false),
  })
  .partial()
  .passthrough();
const RecipeIndexPagePatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const RecipeIndexPagePatchSchema = z
  .object({
    meta: z.union([RecipeIndexPagePatchMetaSchema, z.null()]),
    title: z.union([z.string(), z.null()]),
    slug: z.union([z.string(), z.null()]),
    seo_title: z.union([z.string(), z.null()]),
    search_description: z.union([z.string(), z.null()]),
    show_in_menus: z.union([z.boolean(), z.null()]).default(false),
  })
  .partial()
  .passthrough();
const PersonPagePatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const PersonPagePatchSchema = z
  .object({
    meta: z.union([PersonPagePatchMetaSchema, z.null()]),
    title: z.union([z.string(), z.null()]),
    slug: z.union([z.string(), z.null()]),
    seo_title: z.union([z.string(), z.null()]),
    search_description: z.union([z.string(), z.null()]),
    show_in_menus: z.union([z.boolean(), z.null()]).default(false),
  })
  .partial()
  .passthrough();
const PeopleIndexPagePatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const PeopleIndexPagePatchSchema = z
  .object({
    meta: z.union([PeopleIndexPagePatchMetaSchema, z.null()]),
    title: z.union([z.string(), z.null()]),
    slug: z.union([z.string(), z.null()]),
    seo_title: z.union([z.string(), z.null()]),
    search_description: z.union([z.string(), z.null()]),
    show_in_menus: z.union([z.boolean(), z.null()]).default(false),
  })
  .partial()
  .passthrough();
const pages_update_Body = z.union([
  StandardPagePatchSchema,
  HomePagePatchSchema,
  GalleryPagePatchSchema,
  FormPagePatchSchema,
  BlogPagePatchSchema,
  BlogIndexPagePatchSchema,
  BreadPagePatchSchema,
  BreadsIndexPagePatchSchema,
  LocationsIndexPagePatchSchema,
  LocationPagePatchSchema,
  RecipePagePatchSchema,
  RecipeIndexPagePatchSchema,
  PersonPagePatchSchema,
  PeopleIndexPagePatchSchema,
]);
const BaseMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
  })
  .passthrough();
const RevisionSchema = z
  .object({
    meta: BaseMetaSchema,
    id: z.number().int().gt(0),
    object_id: z.string(),
    created_at: z.string().datetime({ offset: true }),
    user_id: z.union([z.number(), z.string(), z.string(), z.null()]).optional(),
    object_str: z.string(),
    approved_go_live_at: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const PagedRevisionSchema = z
  .object({ items: z.array(RevisionSchema), count: z.number().int() })
  .passthrough();
const ContentTypeSchema = z
  .object({
    meta: BaseMetaSchema,
    id: z.number().int(),
    name: z.string(),
    label: z.string(),
  })
  .passthrough();
const PageRevisionDetailSchema = z
  .object({
    meta: BaseMetaSchema,
    id: z.number().int().gt(0),
    object_id: z.string(),
    created_at: z.string().datetime({ offset: true }),
    user_id: z.union([z.number(), z.string(), z.string(), z.null()]).optional(),
    object_str: z.string(),
    approved_go_live_at: z.union([z.string(), z.null()]).optional(),
    content_type: ContentTypeSchema,
    base_content_type: ContentTypeSchema,
    content_object: z.union([
      PageSchema,
      StandardPageSchema,
      HomePageSchema,
      GalleryPageSchema,
      FormPageSchema,
      BlogPageSchema,
      BlogIndexPageSchema,
      BreadPageSchema,
      BreadsIndexPageSchema,
      LocationsIndexPageSchema,
      LocationPageSchema,
      RecipePageSchema,
      RecipeIndexPageSchema,
      PersonPageSchema,
      PeopleIndexPageSchema,
    ]),
  })
  .passthrough();
const PageUnpublishSchema = z
  .object({ recursive: z.boolean().default(false) })
  .partial()
  .passthrough();
const pages_actions_unpublish_Body = PageUnpublishSchema;
const PageCopySchema = z
  .object({
    destination_id: z.union([z.number(), z.null()]),
    recursive: z.boolean().default(false),
    keep_live: z.boolean().default(true),
    slug: z.union([z.string(), z.null()]),
    title: z.union([z.string(), z.null()]),
  })
  .partial()
  .passthrough();
const pages_actions_copy_Body = PageCopySchema;
const PageMoveSchema = z
  .object({
    destination_id: z.number().int().gt(0),
    position: z
      .union([
        z.enum([
          "first-child",
          "last-child",
          "left",
          "right",
          "first-sibling",
          "last-sibling",
        ]),
        z.null(),
      ])
      .optional(),
  })
  .passthrough();
const PageRevertSchema = z
  .object({ revision_id: z.number().int().gt(0) })
  .passthrough();
const PageCreateAliasSchema = z
  .object({
    destination_id: z.union([z.number(), z.null()]),
    recursive: z.boolean().default(false),
    slug: z.union([z.string(), z.null()]),
  })
  .partial()
  .passthrough();
const pages_actions_create_alias_Body = PageCreateAliasSchema;
const PageCopyForTranslationSchema = z
  .object({
    locale: z.string(),
    copy_parents: z.boolean().optional().default(false),
    alias: z.boolean().optional().default(false),
    recursive: z.boolean().optional().default(false),
  })
  .passthrough();
const ContentTypeSummarySchema = z
  .object({ name: z.string(), label: z.string() })
  .passthrough();
const ContentTypeListSchema = z
  .object({ types: z.array(ContentTypeSummarySchema) })
  .passthrough();
const SchemaDetailResponse = z
  .object({
    read: z.union([z.object({}).partial().passthrough(), z.null()]),
    create: z.union([z.object({}).partial().passthrough(), z.null()]),
    patch: z.union([z.object({}).partial().passthrough(), z.null()]),
  })
  .partial()
  .passthrough();
const SiteSchema = z
  .object({
    id: z.number().int(),
    hostname: z.string(),
    port: z.number().int(),
    site_name: z.string(),
    root_page_id: z.number().int(),
    is_default_site: z.boolean(),
  })
  .passthrough();
const PagedSiteSchema = z
  .object({ items: z.array(SiteSchema), count: z.number().int() })
  .passthrough();
const SiteInputSchema = z
  .object({
    hostname: z.string(),
    port: z.number().int().optional().default(80),
    site_name: z.string().optional().default(""),
    root_page_id: z.number().int(),
    is_default_site: z.boolean().optional().default(false),
  })
  .passthrough();
const WhoAmIUserSchema = z
  .object({
    id: z.string(),
    username: z.string(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    is_superuser: z.boolean(),
  })
  .passthrough();
const WhoAmIProfileSchema = z
  .object({ avatar_url: z.union([z.string(), z.null()]) })
  .passthrough();
const WhoAmISchema = z
  .object({
    user: WhoAmIUserSchema,
    profile: WhoAmIProfileSchema,
    groups: z.array(z.string()),
  })
  .passthrough();
const BreadIngredientMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const BreadIngredientSchema = z
  .object({
    meta: BreadIngredientMetaSchema,
    id: z.union([z.number(), z.null()]).optional(),
    name: z.string().max(255),
  })
  .passthrough();
const BreadTypeSchema = z
  .object({
    meta: BreadTypeMetaSchema,
    id: z.union([z.number(), z.null()]).optional(),
    title: z.string().max(255),
  })
  .passthrough();
const FooterTextMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const FooterTextSchema = z
  .object({
    meta: FooterTextMetaSchema,
    id: z.union([z.number(), z.null()]).optional(),
    body: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const PersonSchema = z
  .object({
    meta: PersonMetaSchema,
    id: z.union([z.number(), z.null()]).optional(),
    first_name: z.string().max(254),
    last_name: z.string().max(254),
    job_title: z.string().max(254),
    image: z.union([ImageForeignKeySchema, z.null()]).optional(),
    image_avatar: z.unknown().optional(),
    image_listing: z.unknown().optional(),
  })
  .passthrough();
const PagedAnnotated = z
  .object({
    items: z.array(
      z.union([
        BreadIngredientSchema,
        BreadTypeSchema,
        FooterTextSchema,
        PersonSchema,
      ])
    ),
    count: z.number().int(),
  })
  .passthrough();
const BreadIngredientCreateMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const BreadIngredientCreateSchema = z
  .object({ meta: z.union([BreadIngredientCreateMetaSchema, z.null()]) })
  .partial()
  .passthrough();
const BreadTypeCreateMetaSchema = z
  .object({ type: z.union([z.string(), z.null()]) })
  .passthrough();
const BreadTypeCreateSchema = z
  .object({ meta: z.union([BreadTypeCreateMetaSchema, z.null()]) })
  .partial()
  .passthrough();
const FooterTextCreateMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const FooterTextCreateSchema = z
  .object({ meta: z.union([FooterTextCreateMetaSchema, z.null()]) })
  .partial()
  .passthrough();
const PersonCreateMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const PersonCreateSchema = z
  .object({ meta: z.union([PersonCreateMetaSchema, z.null()]) })
  .partial()
  .passthrough();
const snippets_create_Body = z.union([
  BreadIngredientCreateSchema,
  BreadTypeCreateSchema,
  FooterTextCreateSchema,
  PersonCreateSchema,
]);
const BreadIngredientPatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const BreadIngredientPatchSchema = z
  .object({ meta: z.union([BreadIngredientPatchMetaSchema, z.null()]) })
  .partial()
  .passthrough();
const BreadTypePatchMetaSchema = z
  .object({ type: z.union([z.string(), z.null()]) })
  .passthrough();
const BreadTypePatchSchema = z
  .object({ meta: z.union([BreadTypePatchMetaSchema, z.null()]) })
  .partial()
  .passthrough();
const FooterTextPatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const FooterTextPatchSchema = z
  .object({ meta: z.union([FooterTextPatchMetaSchema, z.null()]) })
  .partial()
  .passthrough();
const PersonPatchMetaSchema = z
  .object({
    type: z.union([z.string(), z.null()]),
    action: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const PersonPatchSchema = z
  .object({ meta: z.union([PersonPatchMetaSchema, z.null()]) })
  .partial()
  .passthrough();
const snippets_update_Body = z.union([
  BreadIngredientPatchSchema,
  BreadTypePatchSchema,
  FooterTextPatchSchema,
  PersonPatchSchema,
]);
const SnippetRevisionDetailSchema = z
  .object({
    meta: BaseMetaSchema,
    id: z.number().int().gt(0),
    object_id: z.string(),
    created_at: z.string().datetime({ offset: true }),
    user_id: z.union([z.number(), z.string(), z.string(), z.null()]).optional(),
    object_str: z.string(),
    approved_go_live_at: z.union([z.string(), z.null()]).optional(),
    content_type: ContentTypeSchema,
    base_content_type: ContentTypeSchema,
    content_object: z.union([
      BreadIngredientSchema,
      BreadTypeSchema,
      FooterTextSchema,
      PersonSchema,
    ]),
  })
  .passthrough();
const SnippetRevertSchema = z
  .object({ revision_id: z.number().int().gt(0) })
  .passthrough();
const SnippetCopyForTranslationSchema = z
  .object({ locale: z.string() })
  .passthrough();
const DocumentDetailMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    tags: z.array(z.string()).optional().default([]),
    download_url: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const DocumentSchema = z
  .object({
    meta: DocumentDetailMetaSchema,
    id: z.union([z.number(), z.null()]).optional(),
    title: z.string(),
    collection: CollectionForeignKeySchema,
  })
  .passthrough();
const PagedDocumentSchema = z
  .object({ items: z.array(DocumentSchema), count: z.number().int() })
  .passthrough();
const documents_create_Body = z
  .object({
    file: z.instanceof(File),
    title: z.string().max(255),
    collection_id: z.union([z.number(), z.null()]).optional(),
  })
  .passthrough();
const DocumentPatchSchema = z
  .object({
    title: z.union([z.string(), z.null()]),
    collection_id: z.union([z.number(), z.null()]),
  })
  .partial()
  .passthrough();
const ImageDetailMetaSchema = z
  .object({
    type: z.string(),
    warnings: z
      .union([z.array(z.union([RichTextRemoval, z.string()])), z.null()])
      .optional(),
    detail_url: z.union([z.string(), z.null()]).optional(),
    tags: z.array(z.string()).optional().default([]),
    download_url: z.union([z.string(), z.null()]).optional(),
  })
  .passthrough();
const ImageSchema = z
  .object({
    meta: ImageDetailMetaSchema,
    id: z.union([z.number(), z.null()]).optional(),
    title: z.string(),
    width: z.number().int(),
    height: z.number().int(),
    description: z.union([z.string(), z.null()]).optional(),
    collection: CollectionForeignKeySchema.optional(),
    focal_point_x: z.union([z.number(), z.null()]).optional(),
    focal_point_y: z.union([z.number(), z.null()]).optional(),
    focal_point_width: z.union([z.number(), z.null()]).optional(),
    focal_point_height: z.union([z.number(), z.null()]).optional(),
  })
  .passthrough();
const PagedImageSchema = z
  .object({ items: z.array(ImageSchema), count: z.number().int() })
  .passthrough();
const images_create_Body = z
  .object({
    file: z.instanceof(File),
    title: z.string().max(255),
    description: z.union([z.string(), z.null()]).optional().default(""),
    collection_id: z.union([z.number(), z.null()]).optional(),
    focal_point_x: z.union([z.number(), z.null()]).optional(),
    focal_point_y: z.union([z.number(), z.null()]).optional(),
    focal_point_width: z.union([z.number(), z.null()]).optional(),
    focal_point_height: z.union([z.number(), z.null()]).optional(),
  })
  .passthrough();
const ImagePatchSchema = z
  .object({
    title: z.union([z.string(), z.null()]),
    description: z.union([z.string(), z.null()]).default(""),
    collection_id: z.union([z.number(), z.null()]),
    focal_point_x: z.union([z.number(), z.null()]),
    focal_point_y: z.union([z.number(), z.null()]),
    focal_point_width: z.union([z.number(), z.null()]),
    focal_point_height: z.union([z.number(), z.null()]),
  })
  .partial()
  .passthrough();
const LocaleSchema = z
  .object({
    meta: BaseMetaSchema,
    id: z.number().int().gt(0),
    language_code: z.string(),
    display_name: z.string(),
    is_bidi: z.boolean(),
    is_default: z.boolean(),
  })
  .passthrough();
const PagedLocaleSchema = z
  .object({ items: z.array(LocaleSchema), count: z.number().int() })
  .passthrough();
const LocaleInputSchema = z.object({ language_code: z.string() }).passthrough();
const RedirectSchema = z
  .object({
    id: z.number().int(),
    old_path: z.string(),
    site_id: z.union([z.number(), z.null()]),
    is_permanent: z.boolean(),
    redirect_page_id: z.union([z.number(), z.null()]),
    redirect_page_route_path: z.string(),
    redirect_link: z.string(),
    automatically_created: z.boolean(),
    created_at: z.union([z.string(), z.null()]),
  })
  .passthrough();
const PagedRedirectSchema = z
  .object({ items: z.array(RedirectSchema), count: z.number().int() })
  .passthrough();
const RedirectInputSchema = z
  .object({
    old_path: z.string(),
    site: z.union([z.number(), z.null()]).optional(),
    is_permanent: z.boolean().optional().default(true),
    redirect_page_id: z.union([z.number(), z.null()]).optional(),
    redirect_page_route_path: z.string().optional().default(""),
    redirect_link: z.string().optional().default(""),
  })
  .passthrough();
const Input = z
  .object({
    limit: z.number().int().gte(1).default(20),
    offset: z.number().int().gte(0).default(0),
  })
  .partial()
  .passthrough();
const OrderingSchema = z
  .object({ order: z.union([z.string(), z.array(z.string())]).default([]) })
  .partial()
  .passthrough();
const PageFilterSchema = z
  .object({
    type: z
      .array(
        z.enum([
          "wagtailcore.Page",
          "base.StandardPage",
          "base.HomePage",
          "base.GalleryPage",
          "base.FormPage",
          "blog.BlogPage",
          "blog.BlogIndexPage",
          "breads.BreadPage",
          "breads.BreadsIndexPage",
          "locations.LocationsIndexPage",
          "locations.LocationPage",
          "recipes.RecipePage",
          "recipes.RecipeIndexPage",
          "people.PersonPage",
          "people.PeopleIndexPage",
        ])
      )
      .default([]),
    ancestor_of: z.union([z.number(), z.null()]),
    child_of: z.union([z.number(), z.string(), z.null()]),
    descendant_of: z.union([z.number(), z.string(), z.null()]),
    translation_of: z.union([z.number(), z.string(), z.null()]),
    locale: z.union([z.string(), z.null()]),
    site: z.union([z.string(), z.null()]),
  })
  .partial()
  .passthrough();
const SearchSchema = z
  .object({
    search: z.union([z.string(), z.null()]),
    search_operator: z.union([z.enum(["and", "or"]), z.null()]),
  })
  .partial()
  .passthrough();
const RevisionFilterSchema = z
  .object({
    created_at_from: z.union([z.string(), z.null()]),
    created_at_to: z.union([z.string(), z.null()]),
    user_id: z.union([z.number(), z.string(), z.null()]),
    approved_go_live_at_from: z.union([z.string(), z.null()]),
    approved_go_live_at_to: z.union([z.string(), z.null()]),
    object_str: z.union([z.string(), z.null()]),
  })
  .partial()
  .passthrough();
const TranslationFilterSchema = z
  .object({
    locale: z.union([z.string(), z.null()]),
    translation_of: z.union([z.string(), z.null()]),
  })
  .partial()
  .passthrough();
const DocumentCreateSchema = z
  .object({
    title: z.string().max(255),
    collection_id: z.union([z.number(), z.null()]).optional(),
  })
  .passthrough();
const ImageCreateSchema = z
  .object({
    title: z.string().max(255),
    description: z.union([z.string(), z.null()]).optional().default(""),
    collection_id: z.union([z.number(), z.null()]).optional(),
    focal_point_x: z.union([z.number(), z.null()]).optional(),
    focal_point_y: z.union([z.number(), z.null()]).optional(),
    focal_point_width: z.union([z.number(), z.null()]).optional(),
    focal_point_height: z.union([z.number(), z.null()]).optional(),
  })
  .passthrough();

export const schemas = {
  ancestor_of,
  child_of,
  locale,
  order,
  search_operator,
  RichTextRemoval,
  BasePageMetaSchema,
  BasePageSchema,
  PagedBasePageSchema,
  StandardPageCreateMetaSchema,
  StandardPageCreateSchema,
  HomePageCreateMetaSchema,
  HomePageCreateSchema,
  GalleryPageCreateMetaSchema,
  GalleryPageCreateSchema,
  FormPageCreateMetaSchema,
  FormPageCreateSchema,
  BlogPageCreateMetaSchema,
  BlogPersonRelationshipCreateSchema,
  BlogPageCreateSchema,
  BlogIndexPageCreateMetaSchema,
  BlogIndexPageCreateSchema,
  BreadPageCreateMetaSchema,
  BreadPageCreateSchema,
  BreadsIndexPageCreateMetaSchema,
  BreadsIndexPageCreateSchema,
  LocationsIndexPageCreateMetaSchema,
  LocationsIndexPageCreateSchema,
  LocationPageCreateMetaSchema,
  LocationPageCreateSchema,
  RecipePageCreateMetaSchema,
  RecipePageCreateSchema,
  RecipeIndexPageCreateMetaSchema,
  RecipeIndexPageCreateSchema,
  PersonPageCreateMetaSchema,
  PersonPageCreateSchema,
  PeopleIndexPageCreateMetaSchema,
  PeopleIndexPageCreateSchema,
  pages_create_Body,
  rich_text_format,
  SimpleBasePageMetaSchema,
  SimpleBasePageSchema,
  abc__PageMetaSchema__1,
  PageSchema,
  StandardPageMetaSchema,
  ImageMetaSchema,
  ImageForeignKeySchema,
  StandardPageSchema,
  HomePageMetaSchema,
  abc__PageMetaSchema__2,
  PageForeignKeySchema,
  HomePageSchema,
  GalleryPageMetaSchema,
  CollectionMetaSchema,
  CollectionForeignKeySchema,
  GalleryPageSchema,
  FormPageMetaSchema,
  FormFieldMetaSchema,
  FormFieldSchema,
  FormPageSchema,
  abc__BlogPageMetaSchema__1,
  BlogPersonRelationshipMetaSchema,
  abc__BlogPageMetaSchema__2,
  BlogPageForeignKeySchema,
  PersonMetaSchema,
  PersonForeignKeySchema,
  BlogPersonRelationshipSchema,
  BlogPageSchema,
  BlogIndexPageMetaSchema,
  BlogIndexPageSchema,
  BreadPageMetaSchema,
  CountryMetaSchema,
  CountryForeignKeySchema,
  BreadTypeMetaSchema,
  BreadTypeForeignKeySchema,
  BreadPageSchema,
  BreadsIndexPageMetaSchema,
  BreadsIndexPageSchema,
  LocationsIndexPageMetaSchema,
  LocationsIndexPageSchema,
  LocationPageMetaSchema,
  LocationOperatingHoursMetaSchema,
  LocationOperatingHoursSchema,
  LocationPageSchema,
  abc__RecipePageMetaSchema__1,
  RecipePersonRelationshipMetaSchema,
  abc__RecipePageMetaSchema__2,
  RecipePageForeignKeySchema,
  RecipePersonRelationshipSchema,
  RecipePageSchema,
  RecipeIndexPageMetaSchema,
  RecipeIndexPageSchema,
  PersonPageMetaSchema,
  PersonPageSchema,
  PeopleIndexPageMetaSchema,
  PeopleIndexPageSchema,
  version,
  StandardPagePatchMetaSchema,
  StandardPagePatchSchema,
  HomePagePatchMetaSchema,
  HomePagePatchSchema,
  GalleryPagePatchMetaSchema,
  GalleryPagePatchSchema,
  FormPagePatchMetaSchema,
  FormPagePatchSchema,
  BlogPagePatchMetaSchema,
  BlogPersonRelationshipPatchSchema,
  BlogPagePatchSchema,
  BlogIndexPagePatchMetaSchema,
  BlogIndexPagePatchSchema,
  BreadPagePatchMetaSchema,
  BreadPagePatchSchema,
  BreadsIndexPagePatchMetaSchema,
  BreadsIndexPagePatchSchema,
  LocationsIndexPagePatchMetaSchema,
  LocationsIndexPagePatchSchema,
  LocationPagePatchMetaSchema,
  LocationPagePatchSchema,
  RecipePagePatchMetaSchema,
  RecipePagePatchSchema,
  RecipeIndexPagePatchMetaSchema,
  RecipeIndexPagePatchSchema,
  PersonPagePatchMetaSchema,
  PersonPagePatchSchema,
  PeopleIndexPagePatchMetaSchema,
  PeopleIndexPagePatchSchema,
  pages_update_Body,
  BaseMetaSchema,
  RevisionSchema,
  PagedRevisionSchema,
  ContentTypeSchema,
  PageRevisionDetailSchema,
  PageUnpublishSchema,
  pages_actions_unpublish_Body,
  PageCopySchema,
  pages_actions_copy_Body,
  PageMoveSchema,
  PageRevertSchema,
  PageCreateAliasSchema,
  pages_actions_create_alias_Body,
  PageCopyForTranslationSchema,
  ContentTypeSummarySchema,
  ContentTypeListSchema,
  SchemaDetailResponse,
  SiteSchema,
  PagedSiteSchema,
  SiteInputSchema,
  WhoAmIUserSchema,
  WhoAmIProfileSchema,
  WhoAmISchema,
  BreadIngredientMetaSchema,
  BreadIngredientSchema,
  BreadTypeSchema,
  FooterTextMetaSchema,
  FooterTextSchema,
  PersonSchema,
  PagedAnnotated,
  BreadIngredientCreateMetaSchema,
  BreadIngredientCreateSchema,
  BreadTypeCreateMetaSchema,
  BreadTypeCreateSchema,
  FooterTextCreateMetaSchema,
  FooterTextCreateSchema,
  PersonCreateMetaSchema,
  PersonCreateSchema,
  snippets_create_Body,
  BreadIngredientPatchMetaSchema,
  BreadIngredientPatchSchema,
  BreadTypePatchMetaSchema,
  BreadTypePatchSchema,
  FooterTextPatchMetaSchema,
  FooterTextPatchSchema,
  PersonPatchMetaSchema,
  PersonPatchSchema,
  snippets_update_Body,
  SnippetRevisionDetailSchema,
  SnippetRevertSchema,
  SnippetCopyForTranslationSchema,
  DocumentDetailMetaSchema,
  DocumentSchema,
  PagedDocumentSchema,
  documents_create_Body,
  DocumentPatchSchema,
  ImageDetailMetaSchema,
  ImageSchema,
  PagedImageSchema,
  images_create_Body,
  ImagePatchSchema,
  LocaleSchema,
  PagedLocaleSchema,
  LocaleInputSchema,
  RedirectSchema,
  PagedRedirectSchema,
  RedirectInputSchema,
  Input,
  OrderingSchema,
  PageFilterSchema,
  SearchSchema,
  RevisionFilterSchema,
  TranslationFilterSchema,
  DocumentCreateSchema,
  ImageCreateSchema,
};
