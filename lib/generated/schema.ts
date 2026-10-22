export interface paths {
    "/api/v3-preview/pages/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List pages */
        get: operations["pages_list"];
        put?: never;
        /** Create page */
        post: operations["pages_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/find/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Find page */
        get: operations["pages_find"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Page detail */
        get: operations["pages_detail"];
        put?: never;
        post?: never;
        /** Delete page */
        delete: operations["pages_delete"];
        options?: never;
        head?: never;
        /** Update page */
        patch: operations["pages_update"];
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/revisions/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List page revisions */
        get: operations["pages_revisions_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/revisions/{revision_id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Page revision detail */
        get: operations["pages_revisions_detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/workflow/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Page workflow status */
        get: operations["pages_workflow_status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/workflow/history/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List page workflow states */
        get: operations["pages_workflow_history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/actions/publish/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Publish page */
        post: operations["pages_actions_publish"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/actions/unpublish/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Unpublish page */
        post: operations["pages_actions_unpublish"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/actions/copy/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Copy page */
        post: operations["pages_actions_copy"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/actions/move/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Move page */
        post: operations["pages_actions_move"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/actions/delete/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete page */
        delete: operations["pages_actions_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/actions/revert/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Revert page to a previous revision */
        post: operations["pages_actions_revert"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/actions/convert_alias/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Convert alias page to a regular page */
        post: operations["pages_actions_convert_alias"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/actions/create_alias/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create an alias of a page */
        post: operations["pages_actions_create_alias"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/actions/copy_for_translation/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Copy page for translation */
        post: operations["pages_actions_copy_for_translation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/actions/workflow/submit/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Submit page for moderation */
        post: operations["pages_actions_workflow_submit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/actions/workflow/approve/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Approve the current workflow task */
        post: operations["pages_actions_workflow_approve"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/actions/workflow/reject/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reject the current workflow task */
        post: operations["pages_actions_workflow_reject"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/actions/workflow/resume/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Resume the workflow after changes were requested */
        post: operations["pages_actions_workflow_resume"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/pages/{page_id}/actions/workflow/cancel/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel the current workflow */
        post: operations["pages_actions_workflow_cancel"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/schema/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List registered content types */
        get: operations["schema_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/schema/{type_name}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Schemas for a content type */
        get: operations["schema_detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/sites/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List sites */
        get: operations["sites_list"];
        put?: never;
        /** Create site */
        post: operations["sites_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/sites/{site_id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Site detail */
        get: operations["sites_detail"];
        /** Update site */
        put: operations["sites_update"];
        post?: never;
        /** Delete site */
        delete: operations["sites_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/whoami/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Current API user */
        get: operations["whoami"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List snippets */
        get: operations["snippets_list"];
        put?: never;
        /** Create snippet */
        post: operations["snippets_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/{pk}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Snippet detail */
        get: operations["snippets_detail"];
        put?: never;
        post?: never;
        /** Delete snippet */
        delete: operations["snippets_delete"];
        options?: never;
        head?: never;
        /** Update snippet */
        patch: operations["snippets_update"];
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/{pk}/revisions/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List snippet revisions */
        get: operations["snippets_revisions_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/{pk}/revisions/{revision_id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Snippet revision detail */
        get: operations["snippets_revisions_detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/{pk}/workflow/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Snippet workflow status */
        get: operations["snippets_workflow_status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/{pk}/workflow/history/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List snippet workflow states */
        get: operations["snippets_workflow_history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/{pk}/actions/delete/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete snippet */
        delete: operations["snippets_actions_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/{pk}/actions/publish/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Publish snippet */
        post: operations["snippets_actions_publish"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/{pk}/actions/unpublish/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Unpublish snippet */
        post: operations["snippets_actions_unpublish"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/{pk}/actions/revert/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Revert snippet to a previous revision */
        post: operations["snippets_actions_revert"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/{pk}/actions/copy_for_translation/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Copy snippet for translation */
        post: operations["snippets_actions_copy_for_translation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/{pk}/actions/workflow/submit/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Submit snippet for moderation */
        post: operations["snippets_actions_workflow_submit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/{pk}/actions/workflow/approve/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Approve the current workflow task */
        post: operations["snippets_actions_workflow_approve"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/{pk}/actions/workflow/reject/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reject the current workflow task */
        post: operations["snippets_actions_workflow_reject"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/{pk}/actions/workflow/resume/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Resume the workflow after changes were requested */
        post: operations["snippets_actions_workflow_resume"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/snippets/{type}/{pk}/actions/workflow/cancel/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel the current workflow */
        post: operations["snippets_actions_workflow_cancel"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/documents/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List documents */
        get: operations["documents_list"];
        put?: never;
        /** Create document */
        post: operations["documents_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/documents/{document_id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Document detail */
        get: operations["documents_detail"];
        put?: never;
        post?: never;
        /** Delete document */
        delete: operations["documents_delete"];
        options?: never;
        head?: never;
        /** Update document */
        patch: operations["documents_update"];
        trace?: never;
    };
    "/api/v3-preview/images/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List images */
        get: operations["images_list"];
        put?: never;
        /** Create image */
        post: operations["images_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/images/{image_id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Image detail */
        get: operations["images_detail"];
        put?: never;
        post?: never;
        /** Delete image */
        delete: operations["images_delete"];
        options?: never;
        head?: never;
        /** Update image */
        patch: operations["images_update"];
        trace?: never;
    };
    "/api/v3-preview/locales/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List locales */
        get: operations["locales_list"];
        put?: never;
        /** Create locale */
        post: operations["locales_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/locales/{locale_id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Locale detail */
        get: operations["locales_detail"];
        /** Update locale */
        put: operations["locales_update"];
        post?: never;
        /** Delete locale */
        delete: operations["locales_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/redirects/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List redirects */
        get: operations["redirects_list"];
        put?: never;
        /** Create redirect */
        post: operations["redirects_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/redirects/find/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Find redirect */
        get: operations["redirects_find"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/redirects/{redirect_id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Redirect detail */
        get: operations["redirects_detail"];
        /** Update redirect */
        put: operations["redirects_update"];
        post?: never;
        /** Delete redirect */
        delete: operations["redirects_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/preview/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Page preview detail */
        get: operations["preview_detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v3-preview/listing/pages/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List pages with their full detail */
        get: operations["listing_pages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Input */
        Input: {
            /**
             * Limit
             * @default 20
             */
            limit: number;
            /**
             * Offset
             * @default 0
             */
            offset: number;
        };
        /**
         * OrderingSchema
         * @description Order a queryset by one or more of its own APIFields.
         *
         *     Generic across content types: ``base_fields`` (passed to
         *     ``order_queryset``) names the fields every model of this kind always
         *     allows to order by, on top of the queryset's own ``api_fields``.
         */
        OrderingSchema: {
            /**
             * Order
             * @default []
             */
            order: "random" | string[];
        };
        /** PageFilterSchema */
        PageFilterSchema: {
            /**
             * Type
             * @default []
             */
            type: ("wagtailcore.Page" | "base.StandardPage" | "base.HomePage" | "base.GalleryPage" | "base.FormPage" | "blog.BlogPage" | "blog.BlogIndexPage" | "breads.BreadPage" | "breads.BreadsIndexPage" | "locations.LocationsIndexPage" | "locations.LocationPage" | "recipes.RecipePage" | "recipes.RecipeIndexPage" | "people.PersonPage" | "people.PeopleIndexPage")[];
            /** Ancestor Of */
            ancestor_of?: number | null;
            /** Child Of */
            child_of?: number | "root" | null;
            /** Descendant Of */
            descendant_of?: number | "root" | null;
            /** Translation Of */
            translation_of?: number | "root" | null;
            /** Locale */
            locale?: string | null;
            /** Site */
            site?: string | null;
        };
        /**
         * SearchSchema
         * @description Full-text search a queryset, generic across content types.
         */
        SearchSchema: {
            /** Search */
            search?: string | null;
            /** Search Operator */
            search_operator?: ("and" | "or") | null;
        };
        /** BasePageMetaSchema */
        BasePageMetaSchema: {
            /** Type */
            type?: string | null;
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
        };
        /** BasePageSchema */
        BasePageSchema: {
            meta: components["schemas"]["BasePageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
        };
        /** PagedBasePageSchema */
        PagedBasePageSchema: {
            /** Items */
            items: components["schemas"]["BasePageSchema"][];
            /** Count */
            count: number;
        };
        /**
         * RichTextRemoval
         * @description One out-of-features / unresolvable construct stripped from rich text input.
         *
         *     ``detail`` is a short snippet of the affected source markup. It is raw
         *     input content: API clients must treat it as untrusted.
         */
        RichTextRemoval: {
            /** Tag */
            tag: string;
            /**
             * Action
             * @enum {string}
             */
            action: "unwrapped" | "removed";
            /**
             * Reason
             * @enum {string}
             */
            reason: "feature_disabled" | "unknown_linktype" | "unknown_embedtype" | "missing_attribute";
            /** Attribute */
            attribute?: string | null;
            /** Detail */
            detail?: string | null;
        };
        /** BaseStreamBlockBlockQuoteItem */
        BaseStreamBlockBlockQuoteItem: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "block_quote";
            value: components["schemas"]["BlockQuote"];
            /** Id */
            id: string | null;
        };
        /** BaseStreamBlockEmbedBlockItem */
        BaseStreamBlockEmbedBlockItem: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "embed_block";
            value: components["schemas"]["EmbedValue"];
            /** Id */
            id: string | null;
        };
        /** BaseStreamBlockHeadingBlockItem */
        BaseStreamBlockHeadingBlockItem: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "heading_block";
            value: components["schemas"]["HeadingBlock"];
            /** Id */
            id: string | null;
        };
        /** BaseStreamBlockImageBlockItem */
        BaseStreamBlockImageBlockItem: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "image_block";
            value: components["schemas"]["CaptionedImageBlock"];
            /** Id */
            id: string | null;
        };
        /** BaseStreamBlockParagraphBlockItem */
        BaseStreamBlockParagraphBlockItem: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "paragraph_block";
            /** Value */
            value: string | null;
            /** Id */
            id: string | null;
        };
        /** BlockQuote */
        BlockQuote: {
            /** Text */
            text: string | null;
            /** Attribute Name */
            attribute_name: string | null;
            settings: components["schemas"]["ThemeSettingsBlock"];
        };
        /** BlogIndexPageMetaSchema */
        BlogIndexPageMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "blog.BlogIndexPage";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
            /** Show In Menus */
            show_in_menus?: boolean | null;
            /** Seo Title */
            seo_title?: string | null;
            /** Search Description */
            search_description?: string | null;
            alias_of?: components["schemas"]["SimpleBasePageSchema"] | null;
            parent?: components["schemas"]["SimpleBasePageSchema"] | null;
        };
        /** BlogIndexPageSchema */
        BlogIndexPageSchema: {
            meta: components["schemas"]["BlogIndexPageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
            /**
             * Introduction
             * @description Text to describe the page
             */
            introduction?: string | null;
            image?: components["schemas"]["ImageForeignKeySchema"] | null;
        };
        /** BlogPageMetaSchema */
        BlogPageMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "blog.BlogPage";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
            /** Show In Menus */
            show_in_menus?: boolean | null;
            /** Seo Title */
            seo_title?: string | null;
            /** Search Description */
            search_description?: string | null;
            alias_of?: components["schemas"]["SimpleBasePageSchema"] | null;
            parent?: components["schemas"]["SimpleBasePageSchema"] | null;
        };
        /** BlogPageSchema */
        BlogPageSchema: {
            meta: components["schemas"]["BlogPageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
            /**
             * Introduction
             * @description Text to describe the page
             */
            introduction?: string | null;
            /** Subtitle */
            subtitle?: string | null;
            /** Date article published */
            date_published?: string | null;
            image?: components["schemas"]["ImageForeignKeySchema"] | null;
            /**
             * Body
             * @default []
             */
            body: (components["schemas"]["BaseStreamBlockHeadingBlockItem"] | components["schemas"]["BaseStreamBlockParagraphBlockItem"] | components["schemas"]["BaseStreamBlockImageBlockItem"] | components["schemas"]["BaseStreamBlockBlockQuoteItem"] | components["schemas"]["BaseStreamBlockEmbedBlockItem"])[];
            /**
             * Tags
             * @default []
             */
            tags: string[];
            /**
             * Blog Person Relationship
             * @default []
             */
            blog_person_relationship: components["schemas"]["BlogPersonRelationshipSchema"][];
            /** Image Hero */
            image_hero?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
            /** Image Listing */
            image_listing?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
            /** Image Picture Card */
            image_picture_card?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
        };
        /** BlogPersonRelationshipMetaSchema */
        BlogPersonRelationshipMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "blog.BlogPersonRelationship";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
        };
        /** BlogPersonRelationshipSchema */
        BlogPersonRelationshipSchema: {
            meta: components["schemas"]["BlogPersonRelationshipMetaSchema"];
            /** ID */
            id?: number | null;
            page?: components["schemas"]["PageLink"] | null;
            person?: components["schemas"]["PersonForeignKeySchema"];
        };
        /** BreadIngredientForeignKeyMetaSchema */
        BreadIngredientForeignKeyMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "breads.BreadIngredient";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
        };
        /** BreadIngredientForeignKeySchema */
        BreadIngredientForeignKeySchema: {
            meta: components["schemas"]["BreadIngredientForeignKeyMetaSchema"];
            /** ID */
            id?: number | null;
            /** Name */
            name: string;
        };
        /** BreadPageMetaSchema */
        BreadPageMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "breads.BreadPage";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
            /** Show In Menus */
            show_in_menus?: boolean | null;
            /** Seo Title */
            seo_title?: string | null;
            /** Search Description */
            search_description?: string | null;
            alias_of?: components["schemas"]["SimpleBasePageSchema"] | null;
            parent?: components["schemas"]["SimpleBasePageSchema"] | null;
        };
        /** BreadPageSchema */
        BreadPageSchema: {
            meta: components["schemas"]["BreadPageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
            /**
             * Introduction
             * @description Text to describe the page
             */
            introduction?: string | null;
            image?: components["schemas"]["ImageForeignKeySchema"] | null;
            /**
             * Body
             * @default []
             */
            body: (components["schemas"]["BaseStreamBlockHeadingBlockItem"] | components["schemas"]["BaseStreamBlockParagraphBlockItem"] | components["schemas"]["BaseStreamBlockImageBlockItem"] | components["schemas"]["BaseStreamBlockBlockQuoteItem"] | components["schemas"]["BaseStreamBlockEmbedBlockItem"])[];
            origin?: components["schemas"]["CountryForeignKeySchema"] | null;
            bread_type?: components["schemas"]["BreadTypeForeignKeySchema"] | null;
            /** Ingredients */
            ingredients?: components["schemas"]["BreadIngredientForeignKeySchema"][];
            /** Image Hero */
            image_hero?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
            /** Image Listing */
            image_listing?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
        };
        /** BreadTypeForeignKeyMetaSchema */
        BreadTypeForeignKeyMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "breads.BreadType";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
        };
        /** BreadTypeForeignKeySchema */
        BreadTypeForeignKeySchema: {
            meta: components["schemas"]["BreadTypeForeignKeyMetaSchema"];
            /** ID */
            id?: number | null;
            /** Title */
            title: string;
        };
        /** BreadsIndexPageMetaSchema */
        BreadsIndexPageMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "breads.BreadsIndexPage";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
            /** Show In Menus */
            show_in_menus?: boolean | null;
            /** Seo Title */
            seo_title?: string | null;
            /** Search Description */
            search_description?: string | null;
            alias_of?: components["schemas"]["SimpleBasePageSchema"] | null;
            parent?: components["schemas"]["SimpleBasePageSchema"] | null;
        };
        /** BreadsIndexPageSchema */
        BreadsIndexPageSchema: {
            meta: components["schemas"]["BreadsIndexPageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
            /**
             * Introduction
             * @description Text to describe the page
             */
            introduction?: string | null;
            image?: components["schemas"]["ImageForeignKeySchema"] | null;
        };
        /** CaptionedImageBlock */
        CaptionedImageBlock: {
            image: components["schemas"]["StreamFieldImage"] | null;
            /** Caption */
            caption: string | null;
            /** Attribution */
            attribution: string | null;
        };
        /** CollectionForeignKeyMetaSchema */
        CollectionForeignKeyMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "wagtailcore.Collection";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
        };
        /** CollectionForeignKeySchema */
        CollectionForeignKeySchema: {
            meta: components["schemas"]["CollectionForeignKeyMetaSchema"];
            /** ID */
            id?: number | null;
        };
        /** CountryForeignKeyMetaSchema */
        CountryForeignKeyMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "breads.Country";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
        };
        /** CountryForeignKeySchema */
        CountryForeignKeySchema: {
            meta: components["schemas"]["CountryForeignKeyMetaSchema"];
            /** ID */
            id?: number | null;
            /** Title */
            title: string;
        };
        /** CustomImageBlock */
        CustomImageBlock: {
            image: components["schemas"]["StreamFieldImage"] | null;
            /** Decorative */
            decorative: boolean | null;
            /** Alt Text */
            alt_text: string | null;
        };
        /** EmbedValue */
        EmbedValue: {
            /** Url */
            url: string;
            /** Html */
            html: string | null;
        };
        /** FormFieldMetaSchema */
        FormFieldMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "base.FormField";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
        };
        /** FormFieldSchema */
        FormFieldSchema: {
            meta: components["schemas"]["FormFieldMetaSchema"];
            /** ID */
            id?: number | null;
            /**
             * Name
             * @description Safe name of the form field, the label converted to ascii_snake_case
             * @default
             */
            clean_name: string | null;
            /**
             * Label
             * @description The label of the form field
             */
            label: string;
            /** Field Type */
            field_type: string;
            /** Help Text */
            help_text?: string | null;
            /**
             * Required
             * @default true
             */
            required: boolean;
            /**
             * Choices
             * @description Comma or new line separated list of choices. Only applicable in checkboxes, radio and dropdown.
             */
            choices?: string | null;
            /**
             * Default Value
             * @description Default value. Comma or new line separated values supported for checkboxes.
             */
            default_value?: string | null;
        };
        /** FormPageMetaSchema */
        FormPageMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "base.FormPage";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
            /** Show In Menus */
            show_in_menus?: boolean | null;
            /** Seo Title */
            seo_title?: string | null;
            /** Search Description */
            search_description?: string | null;
            alias_of?: components["schemas"]["SimpleBasePageSchema"] | null;
            parent?: components["schemas"]["SimpleBasePageSchema"] | null;
        };
        /** FormPageSchema */
        FormPageSchema: {
            meta: components["schemas"]["FormPageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
            /** From Address */
            from_address?: string | null;
            /**
             * To Address
             * @description Optional - form submissions will be emailed to these addresses. Separate multiple addresses by comma.
             */
            to_address?: string | null;
            /** Subject */
            subject?: string | null;
            /**
             * Form Fields
             * @default []
             */
            form_fields: components["schemas"]["FormFieldSchema"][];
            image?: components["schemas"]["ImageForeignKeySchema"] | null;
            /**
             * Body
             * @default []
             */
            body: (components["schemas"]["BaseStreamBlockHeadingBlockItem"] | components["schemas"]["BaseStreamBlockParagraphBlockItem"] | components["schemas"]["BaseStreamBlockImageBlockItem"] | components["schemas"]["BaseStreamBlockBlockQuoteItem"] | components["schemas"]["BaseStreamBlockEmbedBlockItem"])[];
            /** Thank You Text */
            thank_you_text?: string | null;
            /** Image Hero */
            image_hero?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
        };
        /** GalleryPageMetaSchema */
        GalleryPageMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "base.GalleryPage";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
            /** Show In Menus */
            show_in_menus?: boolean | null;
            /** Seo Title */
            seo_title?: string | null;
            /** Search Description */
            search_description?: string | null;
            alias_of?: components["schemas"]["SimpleBasePageSchema"] | null;
            parent?: components["schemas"]["SimpleBasePageSchema"] | null;
        };
        /** GalleryPageSchema */
        GalleryPageSchema: {
            meta: components["schemas"]["GalleryPageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
            /**
             * Introduction
             * @description Text to describe the page
             */
            introduction?: string | null;
            image?: components["schemas"]["ImageForeignKeySchema"] | null;
            /**
             * Body
             * @default []
             */
            body: (components["schemas"]["BaseStreamBlockHeadingBlockItem"] | components["schemas"]["BaseStreamBlockParagraphBlockItem"] | components["schemas"]["BaseStreamBlockImageBlockItem"] | components["schemas"]["BaseStreamBlockBlockQuoteItem"] | components["schemas"]["BaseStreamBlockEmbedBlockItem"])[];
            collection?: components["schemas"]["CollectionForeignKeySchema"] | null;
            /** Image Hero */
            image_hero?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
        };
        /** HeadingBlock */
        HeadingBlock: {
            /** Heading Text */
            heading_text: string | null;
            /** Size */
            size: ("h2" | "h3" | "h4") | null;
        };
        /** HomePageMetaSchema */
        HomePageMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "base.HomePage";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
            /** Show In Menus */
            show_in_menus?: boolean | null;
            /** Seo Title */
            seo_title?: string | null;
            /** Search Description */
            search_description?: string | null;
            alias_of?: components["schemas"]["SimpleBasePageSchema"] | null;
            parent?: components["schemas"]["SimpleBasePageSchema"] | null;
        };
        /** HomePageSchema */
        HomePageSchema: {
            meta: components["schemas"]["HomePageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
            /**
             * Hero Text
             * @description Write an introduction for the bakery
             */
            hero_text: string;
            /**
             * Hero CTA
             * @description Text to display on Call to Action
             */
            hero_cta: string;
            /**
             * Lead Title
             * @description Title to display above the promo copy
             */
            lead_title?: string | null;
            /**
             * Featured Section 1 Title
             * @description Heading for the first featured section
             */
            featured_section_1_title?: string | null;
            /**
             * Featured Section 2 Title
             * @description Heading for the second featured section
             */
            featured_section_2_title?: string | null;
            /**
             * Featured Section 3 Title
             * @description Heading for the third featured section
             */
            featured_section_3_title?: string | null;
            image?: components["schemas"]["ImageForeignKeySchema"] | null;
            hero_cta_link?: components["schemas"]["PageLink"] | null;
            /**
             * Body
             * @default []
             */
            body: (components["schemas"]["BaseStreamBlockHeadingBlockItem"] | components["schemas"]["BaseStreamBlockParagraphBlockItem"] | components["schemas"]["BaseStreamBlockImageBlockItem"] | components["schemas"]["BaseStreamBlockBlockQuoteItem"] | components["schemas"]["BaseStreamBlockEmbedBlockItem"])[];
            lead_image?: components["schemas"]["ImageForeignKeySchema"] | null;
            /** Lead Text */
            lead_text?: string | null;
            featured_section_1?: components["schemas"]["PageLink"] | null;
            featured_section_2?: components["schemas"]["PageLink"] | null;
            featured_section_3?: components["schemas"]["PageLink"] | null;
            /** Image Hero */
            image_hero?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
            /** Lead Image Promo */
            lead_image_promo?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
        };
        /** ImageForeignKeyMetaSchema */
        ImageForeignKeyMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "wagtailimages.Image";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
        };
        /** ImageForeignKeySchema */
        ImageForeignKeySchema: {
            meta: components["schemas"]["ImageForeignKeyMetaSchema"];
            /** ID */
            id?: number | null;
            collection?: components["schemas"]["CollectionForeignKeySchema"];
        };
        /** ImageRenditionDict */
        ImageRenditionDict: {
            /** Url */
            url: string;
            /** Full Url */
            full_url: string;
            /** Width */
            width: number;
            /** Height */
            height: number;
            /** Alt */
            alt: string;
        };
        /** ImageRenditionErrorDict */
        ImageRenditionErrorDict: {
            /**
             * Error
             * @constant
             */
            error: "SourceImageIOError";
        };
        /** LocationOperatingDayMetaSchema */
        LocationOperatingDayMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "locations.LocationOperatingDay";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
        };
        /** LocationOperatingDaySchema */
        LocationOperatingDaySchema: {
            meta: components["schemas"]["LocationOperatingDayMetaSchema"];
            /** Custom Id */
            custom_id?: number | null;
            /**
             * Day
             * @default MON
             */
            day: string;
            /**
             * Closed?
             * @description Tick if location is closed on this day
             * @default false
             */
            closed: boolean | null;
            /** Get Day Display */
            get_day_display?: unknown;
            /**
             * Time Slots
             * @default []
             */
            time_slots: components["schemas"]["LocationOperatingTimeSlotSchema"][];
        };
        /** LocationOperatingTimeSlotMetaSchema */
        LocationOperatingTimeSlotMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "locations.LocationOperatingTimeSlot";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
        };
        /** LocationOperatingTimeSlotSchema */
        LocationOperatingTimeSlotSchema: {
            meta: components["schemas"]["LocationOperatingTimeSlotMetaSchema"];
            /** Custom Id */
            custom_id?: number | null;
            /**
             * Opening Time
             * Format: time
             */
            opening_time: string;
            /**
             * Closing Time
             * Format: time
             */
            closing_time: string;
        };
        /** LocationPageMetaSchema */
        LocationPageMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "locations.LocationPage";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
            /** Show In Menus */
            show_in_menus?: boolean | null;
            /** Seo Title */
            seo_title?: string | null;
            /** Search Description */
            search_description?: string | null;
            alias_of?: components["schemas"]["SimpleBasePageSchema"] | null;
            parent?: components["schemas"]["SimpleBasePageSchema"] | null;
        };
        /** LocationPageSchema */
        LocationPageSchema: {
            meta: components["schemas"]["LocationPageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
            /**
             * Introduction
             * @description Text to describe the page
             */
            introduction?: string | null;
            /** Address */
            address: string;
            /**
             * Lat Long
             * @description Comma separated lat/long. (Ex. 64.144367, -21.939182)                    Right click Google Maps and select 'What's Here'
             */
            lat_long: string;
            image?: components["schemas"]["ImageForeignKeySchema"] | null;
            /**
             * Body
             * @default []
             */
            body: (components["schemas"]["BaseStreamBlockHeadingBlockItem"] | components["schemas"]["BaseStreamBlockParagraphBlockItem"] | components["schemas"]["BaseStreamBlockImageBlockItem"] | components["schemas"]["BaseStreamBlockBlockQuoteItem"] | components["schemas"]["BaseStreamBlockEmbedBlockItem"])[];
            /** Is Open */
            is_open?: unknown;
            /**
             * Operating Days
             * @default []
             */
            operating_days: components["schemas"]["LocationOperatingDaySchema"][];
            /** Image Hero */
            image_hero?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
            /** Image Location Card */
            image_location_card?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
            /** Image Picture Card */
            image_picture_card?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
        };
        /** LocationsIndexPageMetaSchema */
        LocationsIndexPageMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "locations.LocationsIndexPage";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
            /** Show In Menus */
            show_in_menus?: boolean | null;
            /** Seo Title */
            seo_title?: string | null;
            /** Search Description */
            search_description?: string | null;
            alias_of?: components["schemas"]["SimpleBasePageSchema"] | null;
            parent?: components["schemas"]["SimpleBasePageSchema"] | null;
        };
        /** LocationsIndexPageSchema */
        LocationsIndexPageSchema: {
            meta: components["schemas"]["LocationsIndexPageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
            /**
             * Introduction
             * @description Text to describe the page
             */
            introduction?: string | null;
            image?: components["schemas"]["ImageForeignKeySchema"] | null;
        };
        /** PageLink */
        PageLink: {
            /** Id */
            id: number;
            /** Title */
            title: string;
            meta: components["schemas"]["PageLinkMeta"];
        };
        /** PageLinkMeta */
        PageLinkMeta: {
            /** Type */
            type: string;
            /** Html Url */
            html_url: string | null;
        };
        /** PageMetaSchema */
        PageMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "wagtailcore.Page";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
            /** Show In Menus */
            show_in_menus?: boolean | null;
            /** Seo Title */
            seo_title?: string | null;
            /** Search Description */
            search_description?: string | null;
            alias_of?: components["schemas"]["SimpleBasePageSchema"] | null;
            parent?: components["schemas"]["SimpleBasePageSchema"] | null;
        };
        /** PageSchema */
        PageSchema: {
            meta: components["schemas"]["PageMetaSchema"];
            /** ID */
            id?: number | null;
            /** Title */
            title: string;
        };
        /** PeopleIndexPageMetaSchema */
        PeopleIndexPageMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "people.PeopleIndexPage";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
            /** Show In Menus */
            show_in_menus?: boolean | null;
            /** Seo Title */
            seo_title?: string | null;
            /** Search Description */
            search_description?: string | null;
            alias_of?: components["schemas"]["SimpleBasePageSchema"] | null;
            parent?: components["schemas"]["SimpleBasePageSchema"] | null;
        };
        /** PeopleIndexPageSchema */
        PeopleIndexPageSchema: {
            meta: components["schemas"]["PeopleIndexPageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
            /**
             * Introduction
             * @description Text to describe the page
             */
            introduction?: string | null;
            image?: components["schemas"]["ImageForeignKeySchema"] | null;
        };
        /** PersonForeignKeyMetaSchema */
        PersonForeignKeyMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "base.Person";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
        };
        /** PersonForeignKeySchema */
        PersonForeignKeySchema: {
            meta: components["schemas"]["PersonForeignKeyMetaSchema"];
            /** ID */
            id?: number | null;
            /** First name */
            first_name: string;
            /** Last name */
            last_name: string;
            /** Job title */
            job_title: string;
            image?: components["schemas"]["ImageForeignKeySchema"] | null;
            /** Image Avatar */
            image_avatar?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
            /** Image Listing */
            image_listing?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
        };
        /** PersonPageMetaSchema */
        PersonPageMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "people.PersonPage";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
            /** Show In Menus */
            show_in_menus?: boolean | null;
            /** Seo Title */
            seo_title?: string | null;
            /** Search Description */
            search_description?: string | null;
            alias_of?: components["schemas"]["SimpleBasePageSchema"] | null;
            parent?: components["schemas"]["SimpleBasePageSchema"] | null;
        };
        /** PersonPageSchema */
        PersonPageSchema: {
            meta: components["schemas"]["PersonPageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
            /**
             * Introduction
             * @description Text to describe the page
             */
            introduction?: string | null;
            image?: components["schemas"]["ImageForeignKeySchema"] | null;
            /**
             * Body
             * @default []
             */
            body: (components["schemas"]["BaseStreamBlockHeadingBlockItem"] | components["schemas"]["BaseStreamBlockParagraphBlockItem"] | components["schemas"]["BaseStreamBlockImageBlockItem"] | components["schemas"]["BaseStreamBlockBlockQuoteItem"] | components["schemas"]["BaseStreamBlockEmbedBlockItem"])[];
            location?: components["schemas"]["CountryForeignKeySchema"] | null;
            /**
             * Social Links
             * @default []
             */
            social_links: components["schemas"]["PersonPageSocialLinksSocialItem"][];
            /** Image Hero */
            image_hero?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
            /** Image Listing */
            image_listing?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
        };
        /** PersonPageSocialLinksSocialItem */
        PersonPageSocialLinksSocialItem: {
            /**
             * Type
             * @constant
             */
            type: "social";
            value: components["schemas"]["SocialMediaBlock"];
            /** Id */
            id: string | null;
        };
        /** RecipeIndexPageMetaSchema */
        RecipeIndexPageMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "recipes.RecipeIndexPage";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
            /** Show In Menus */
            show_in_menus?: boolean | null;
            /** Seo Title */
            seo_title?: string | null;
            /** Search Description */
            search_description?: string | null;
            alias_of?: components["schemas"]["SimpleBasePageSchema"] | null;
            parent?: components["schemas"]["SimpleBasePageSchema"] | null;
        };
        /** RecipeIndexPageSchema */
        RecipeIndexPageSchema: {
            meta: components["schemas"]["RecipeIndexPageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
            /**
             * Introduction
             * @description Text to describe the page
             */
            introduction?: string | null;
        };
        /** RecipePageMetaSchema */
        RecipePageMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "recipes.RecipePage";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
            /** Show In Menus */
            show_in_menus?: boolean | null;
            /** Seo Title */
            seo_title?: string | null;
            /** Search Description */
            search_description?: string | null;
            alias_of?: components["schemas"]["SimpleBasePageSchema"] | null;
            parent?: components["schemas"]["SimpleBasePageSchema"] | null;
        };
        /** RecipePageSchema */
        RecipePageSchema: {
            meta: components["schemas"]["RecipePageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
            /** Date article published */
            date_published?: string | null;
            /** Subtitle */
            subtitle?: string | null;
            /** Introduction */
            introduction?: string | null;
            /**
             * Backstory
             * @default []
             */
            backstory: (components["schemas"]["BaseStreamBlockHeadingBlockItem"] | components["schemas"]["BaseStreamBlockParagraphBlockItem"] | components["schemas"]["BaseStreamBlockImageBlockItem"] | components["schemas"]["BaseStreamBlockBlockQuoteItem"] | components["schemas"]["BaseStreamBlockEmbedBlockItem"])[];
            /** Recipe Headline */
            recipe_headline?: string | null;
            /**
             * Body
             * @default []
             */
            body: (components["schemas"]["RecipeStreamBlockHeadingBlockItem"] | components["schemas"]["RecipeStreamBlockParagraphBlockItem"] | components["schemas"]["RecipeStreamBlockBlockQuoteItem"] | components["schemas"]["RecipeStreamBlockTableBlockItem"] | components["schemas"]["RecipeStreamBlockTypedTableBlockItem"] | components["schemas"]["RecipeStreamBlockImageBlockItem"] | components["schemas"]["RecipeStreamBlockEmbedBlockItem"] | components["schemas"]["RecipeStreamBlockIngredientsListItem"] | components["schemas"]["RecipeStreamBlockStepsListItem"])[];
            /**
             * Recipe Person Relationship
             * @default []
             */
            recipe_person_relationship: components["schemas"]["RecipePersonRelationshipSchema"][];
        };
        /** RecipePersonRelationshipMetaSchema */
        RecipePersonRelationshipMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "recipes.RecipePersonRelationship";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
        };
        /** RecipePersonRelationshipSchema */
        RecipePersonRelationshipSchema: {
            meta: components["schemas"]["RecipePersonRelationshipMetaSchema"];
            /** ID */
            id?: number | null;
            page?: components["schemas"]["PageLink"] | null;
            person?: components["schemas"]["PersonForeignKeySchema"];
        };
        /** RecipeStepBlock */
        RecipeStepBlock: {
            /** Text */
            text: string | null;
            /** Difficulty */
            difficulty: ("S" | "M" | "L") | null;
        };
        /** RecipeStreamBlockBlockQuoteItem */
        RecipeStreamBlockBlockQuoteItem: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "block_quote";
            value: components["schemas"]["BlockQuote"];
            /** Id */
            id: string | null;
        };
        /** RecipeStreamBlockEmbedBlockItem */
        RecipeStreamBlockEmbedBlockItem: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "embed_block";
            /** Value */
            value: string | null;
            /** Id */
            id: string | null;
        };
        /** RecipeStreamBlockHeadingBlockItem */
        RecipeStreamBlockHeadingBlockItem: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "heading_block";
            value: components["schemas"]["HeadingBlock"];
            /** Id */
            id: string | null;
        };
        /** RecipeStreamBlockImageBlockItem */
        RecipeStreamBlockImageBlockItem: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "image_block";
            value: components["schemas"]["CustomImageBlock"];
            /** Id */
            id: string | null;
        };
        /** RecipeStreamBlockIngredientsListItem */
        RecipeStreamBlockIngredientsListItem: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "ingredients_list";
            /** Value */
            value: (string | null)[];
            /** Id */
            id: string | null;
        };
        /** RecipeStreamBlockParagraphBlockItem */
        RecipeStreamBlockParagraphBlockItem: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "paragraph_block";
            /** Value */
            value: string | null;
            /** Id */
            id: string | null;
        };
        /** RecipeStreamBlockStepsListItem */
        RecipeStreamBlockStepsListItem: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "steps_list";
            /** Value */
            value: components["schemas"]["RecipeStepBlock"][];
            /** Id */
            id: string | null;
        };
        /** RecipeStreamBlockTableBlockItem */
        RecipeStreamBlockTableBlockItem: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "table_block";
            value: components["schemas"]["TableBlock"] | null;
            /** Id */
            id: string | null;
        };
        /** RecipeStreamBlockTypedTableBlock */
        RecipeStreamBlockTypedTableBlock: {
            /** Columns */
            columns: components["schemas"]["RecipeStreamBlockTypedTableBlockColumn"][];
            /** Rows */
            rows: components["schemas"]["RecipeStreamBlockTypedTableBlockRow"][];
            /** Caption */
            caption: string;
        };
        /** RecipeStreamBlockTypedTableBlockColumn */
        RecipeStreamBlockTypedTableBlockColumn: {
            /**
             * Type
             * @enum {string}
             */
            type: "text" | "numeric" | "rich_text" | "image";
            /** Heading */
            heading: string;
        };
        /** RecipeStreamBlockTypedTableBlockItem */
        RecipeStreamBlockTypedTableBlockItem: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "typed_table_block";
            value: components["schemas"]["RecipeStreamBlockTypedTableBlock"];
            /** Id */
            id: string | null;
        };
        /** RecipeStreamBlockTypedTableBlockRow */
        RecipeStreamBlockTypedTableBlockRow: {
            /** Values */
            values: (string | number | components["schemas"]["CustomImageBlock"] | null)[];
        };
        /** SimpleBasePageMetaSchema */
        SimpleBasePageMetaSchema: {
            /** Type */
            type?: string | null;
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
        };
        /** SimpleBasePageSchema */
        SimpleBasePageSchema: {
            meta: components["schemas"]["SimpleBasePageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
        };
        /** SocialMediaBlock */
        SocialMediaBlock: {
            /** Platform */
            platform: ("github" | "twitter" | "linkedin" | "instagram" | "facebook" | "mastodon" | "website") | null;
            /** Url */
            url: string | null;
        };
        /** StandardPageMetaSchema */
        StandardPageMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "base.StandardPage";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /** Html Url */
            html_url?: string | null;
            /** Locale */
            locale?: string | null;
            /** Slug */
            slug: string;
            /** First Published At */
            first_published_at?: string | null;
            /** Show In Menus */
            show_in_menus?: boolean | null;
            /** Seo Title */
            seo_title?: string | null;
            /** Search Description */
            search_description?: string | null;
            alias_of?: components["schemas"]["SimpleBasePageSchema"] | null;
            parent?: components["schemas"]["SimpleBasePageSchema"] | null;
        };
        /** StandardPageSchema */
        StandardPageSchema: {
            meta: components["schemas"]["StandardPageMetaSchema"];
            /** Id */
            id: number;
            /** Title */
            title: string;
            /**
             * Introduction
             * @description Text to describe the page
             */
            introduction?: string | null;
            image?: components["schemas"]["ImageForeignKeySchema"] | null;
            /**
             * Body
             * @default []
             */
            body: (components["schemas"]["BaseStreamBlockHeadingBlockItem"] | components["schemas"]["BaseStreamBlockParagraphBlockItem"] | components["schemas"]["BaseStreamBlockImageBlockItem"] | components["schemas"]["BaseStreamBlockBlockQuoteItem"] | components["schemas"]["BaseStreamBlockEmbedBlockItem"])[];
            /** Image Hero */
            image_hero?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
        };
        /**
         * StreamFieldImage
         * @description See ``bakerydemo.base.blocks.get_image_api_representation``.
         */
        StreamFieldImage: {
            /** Id */
            id: number;
            /** Title */
            title: string;
            meta: components["schemas"]["StreamFieldImageMeta"];
        };
        /** StreamFieldImageMeta */
        StreamFieldImageMeta: {
            /** Type */
            type: string;
            /** Download Url */
            download_url: string;
            rendition: components["schemas"]["ImageRenditionDict"];
        };
        /** TableBlock */
        TableBlock: {
            /** Data */
            data: (string | null)[][];
            /**
             * Table Header Choice
             * @enum {string}
             */
            table_header_choice: "row" | "column" | "both" | "neither";
            /** First Row Is Table Header */
            first_row_is_table_header: boolean;
            /** First Col Is Header */
            first_col_is_header: boolean;
            /** Table Caption */
            table_caption?: string;
            /** Cell */
            cell?: components["schemas"]["TableBlockCell"][];
            /** Mergecells */
            mergeCells?: components["schemas"]["TableBlockMergedCell"][];
        };
        /** TableBlockCell */
        TableBlockCell: {
            /** Row */
            row: number;
            /** Col */
            col: number;
            /** Classname */
            className?: string;
            /** Hidden */
            hidden?: boolean;
        };
        /** TableBlockMergedCell */
        TableBlockMergedCell: {
            /** Row */
            row: number;
            /** Col */
            col: number;
            /** Rowspan */
            rowspan: number;
            /** Colspan */
            colspan: number;
        };
        /** ThemeSettingsBlock */
        ThemeSettingsBlock: {
            /** Theme */
            theme: ("default" | "highlight") | null;
            /** Text Size */
            text_size: ("default" | "large") | null;
        };
        /** BaseStreamBlockBlockQuoteItemInput */
        BaseStreamBlockBlockQuoteItemInput: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "block_quote";
            value: components["schemas"]["BlockQuoteInput"];
            /** Id */
            id?: string | null;
        };
        /** BaseStreamBlockEmbedBlockItemInput */
        BaseStreamBlockEmbedBlockItemInput: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "embed_block";
            /** Value */
            value: string | null;
            /** Id */
            id?: string | null;
        };
        /** BaseStreamBlockHeadingBlockItemInput */
        BaseStreamBlockHeadingBlockItemInput: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "heading_block";
            value: components["schemas"]["HeadingBlockInput"];
            /** Id */
            id?: string | null;
        };
        /** BaseStreamBlockImageBlockItemInput */
        BaseStreamBlockImageBlockItemInput: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "image_block";
            value: components["schemas"]["CaptionedImageBlockInput"];
            /** Id */
            id?: string | null;
        };
        /** BaseStreamBlockParagraphBlockItemInput */
        BaseStreamBlockParagraphBlockItemInput: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "paragraph_block";
            /** Value */
            value: string | components["schemas"]["RichTextInputSchema"] | null;
            /** Id */
            id?: string | null;
        };
        /** BlockQuoteInput */
        BlockQuoteInput: {
            /** Text */
            text?: string | null;
            /** Attribute Name */
            attribute_name?: string | null;
            settings?: components["schemas"]["ThemeSettingsBlockInput"];
        };
        /** BlogIndexPageCreateMetaSchema */
        BlogIndexPageCreateMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "blog.BlogIndexPage";
            /** Parent Id */
            parent_id: number;
            /** Action */
            action?: "publish" | null;
        };
        /** BlogIndexPageCreateSchema */
        BlogIndexPageCreateSchema: {
            meta: components["schemas"]["BlogIndexPageCreateMetaSchema"];
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title: string;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
            /**
             * Introduction
             * @description Text to describe the page
             */
            introduction?: string | null;
            /**
             * Image
             * @description Landscape mode only; horizontal width between 1000px and 3000px.
             */
            image_id?: number | null;
        };
        /** BlogPageCreateMetaSchema */
        BlogPageCreateMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "blog.BlogPage";
            /** Parent Id */
            parent_id: number;
            /** Action */
            action?: "publish" | null;
        };
        /** BlogPageCreateSchema */
        BlogPageCreateSchema: {
            meta: components["schemas"]["BlogPageCreateMetaSchema"];
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title: string;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
            /**
             * Introduction
             * @description Text to describe the page
             */
            introduction?: string | null;
            /**
             * Image
             * @description Landscape mode only; horizontal width between 1000px and 3000px.
             */
            image_id?: number | null;
            /**
             * Body
             * @default []
             */
            body: (components["schemas"]["BaseStreamBlockHeadingBlockItemInput"] | components["schemas"]["BaseStreamBlockParagraphBlockItemInput"] | components["schemas"]["BaseStreamBlockImageBlockItemInput"] | components["schemas"]["BaseStreamBlockBlockQuoteItemInput"] | components["schemas"]["BaseStreamBlockEmbedBlockItemInput"])[];
            /** Subtitle */
            subtitle?: string | null;
            /** Date article published */
            date_published?: string | null;
            /**
             * Blog Person Relationship
             * @default []
             */
            blog_person_relationship: components["schemas"]["BlogPersonRelationshipCreateSchema"][];
        };
        /** BlogPersonRelationshipCreateSchema */
        BlogPersonRelationshipCreateSchema: {
            /** Person */
            person_id: number;
        };
        /** BreadPageCreateMetaSchema */
        BreadPageCreateMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "breads.BreadPage";
            /** Parent Id */
            parent_id: number;
            /** Action */
            action?: "publish" | null;
        };
        /** BreadPageCreateSchema */
        BreadPageCreateSchema: {
            meta: components["schemas"]["BreadPageCreateMetaSchema"];
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title: string;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** BreadsIndexPageCreateMetaSchema */
        BreadsIndexPageCreateMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "breads.BreadsIndexPage";
            /** Parent Id */
            parent_id: number;
            /** Action */
            action?: "publish" | null;
        };
        /** BreadsIndexPageCreateSchema */
        BreadsIndexPageCreateSchema: {
            meta: components["schemas"]["BreadsIndexPageCreateMetaSchema"];
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title: string;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** CaptionedImageBlockInput */
        CaptionedImageBlockInput: {
            /** Image */
            image?: number | null;
            /** Caption */
            caption?: string | null;
            /** Attribution */
            attribution?: string | null;
        };
        /** CustomImageBlockInput */
        CustomImageBlockInput: {
            /** Image */
            image?: number | null;
            /** Decorative */
            decorative?: boolean | null;
            /** Alt Text */
            alt_text?: string | null;
        };
        /** FormPageCreateMetaSchema */
        FormPageCreateMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "base.FormPage";
            /** Parent Id */
            parent_id: number;
            /** Action */
            action?: "publish" | null;
        };
        /** FormPageCreateSchema */
        FormPageCreateSchema: {
            meta: components["schemas"]["FormPageCreateMetaSchema"];
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title: string;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** GalleryPageCreateMetaSchema */
        GalleryPageCreateMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "base.GalleryPage";
            /** Parent Id */
            parent_id: number;
            /** Action */
            action?: "publish" | null;
        };
        /** GalleryPageCreateSchema */
        GalleryPageCreateSchema: {
            meta: components["schemas"]["GalleryPageCreateMetaSchema"];
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title: string;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** HeadingBlockInput */
        HeadingBlockInput: {
            /** Heading Text */
            heading_text?: string | null;
            /** Size */
            size?: ("h2" | "h3" | "h4") | null;
        };
        /** HomePageCreateMetaSchema */
        HomePageCreateMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "base.HomePage";
            /** Parent Id */
            parent_id: number;
            /** Action */
            action?: "publish" | null;
        };
        /** HomePageCreateSchema */
        HomePageCreateSchema: {
            meta: components["schemas"]["HomePageCreateMetaSchema"];
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title: string;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** LocationOperatingDayCreateSchema */
        LocationOperatingDayCreateSchema: {
            /**
             * Day
             * @default MON
             */
            day: string;
            /**
             * Closed?
             * @description Tick if location is closed on this day
             * @default false
             */
            closed: boolean | null;
            /**
             * Time Slots
             * @default []
             */
            time_slots: components["schemas"]["LocationOperatingTimeSlotCreateSchema"][];
        };
        /** LocationOperatingTimeSlotCreateSchema */
        LocationOperatingTimeSlotCreateSchema: {
            /**
             * Opening Time
             * Format: time
             */
            opening_time: string;
            /**
             * Closing Time
             * Format: time
             */
            closing_time: string;
        };
        /** LocationPageCreateMetaSchema */
        LocationPageCreateMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "locations.LocationPage";
            /** Parent Id */
            parent_id: number;
            /** Action */
            action?: "publish" | null;
        };
        /** LocationPageCreateSchema */
        LocationPageCreateSchema: {
            meta: components["schemas"]["LocationPageCreateMetaSchema"];
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title: string;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
            /**
             * Operating Days
             * @default []
             */
            operating_days: components["schemas"]["LocationOperatingDayCreateSchema"][];
        };
        /** LocationsIndexPageCreateMetaSchema */
        LocationsIndexPageCreateMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "locations.LocationsIndexPage";
            /** Parent Id */
            parent_id: number;
            /** Action */
            action?: "publish" | null;
        };
        /** LocationsIndexPageCreateSchema */
        LocationsIndexPageCreateSchema: {
            meta: components["schemas"]["LocationsIndexPageCreateMetaSchema"];
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title: string;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** PeopleIndexPageCreateMetaSchema */
        PeopleIndexPageCreateMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "people.PeopleIndexPage";
            /** Parent Id */
            parent_id: number;
            /** Action */
            action?: "publish" | null;
        };
        /** PeopleIndexPageCreateSchema */
        PeopleIndexPageCreateSchema: {
            meta: components["schemas"]["PeopleIndexPageCreateMetaSchema"];
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title: string;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** PersonPageCreateMetaSchema */
        PersonPageCreateMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "people.PersonPage";
            /** Parent Id */
            parent_id: number;
            /** Action */
            action?: "publish" | null;
        };
        /** PersonPageCreateSchema */
        PersonPageCreateSchema: {
            meta: components["schemas"]["PersonPageCreateMetaSchema"];
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title: string;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** RecipeIndexPageCreateMetaSchema */
        RecipeIndexPageCreateMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "recipes.RecipeIndexPage";
            /** Parent Id */
            parent_id: number;
            /** Action */
            action?: "publish" | null;
        };
        /** RecipeIndexPageCreateSchema */
        RecipeIndexPageCreateSchema: {
            meta: components["schemas"]["RecipeIndexPageCreateMetaSchema"];
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title: string;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** RecipePageCreateMetaSchema */
        RecipePageCreateMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "recipes.RecipePage";
            /** Parent Id */
            parent_id: number;
            /** Action */
            action?: "publish" | null;
        };
        /** RecipePageCreateSchema */
        RecipePageCreateSchema: {
            meta: components["schemas"]["RecipePageCreateMetaSchema"];
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title: string;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
            /** Date article published */
            date_published?: string | null;
            /** Subtitle */
            subtitle?: string | null;
            /** Introduction */
            introduction?: string | null;
            /**
             * Backstory
             * @default []
             */
            backstory: (components["schemas"]["BaseStreamBlockHeadingBlockItemInput"] | components["schemas"]["BaseStreamBlockParagraphBlockItemInput"] | components["schemas"]["BaseStreamBlockImageBlockItemInput"] | components["schemas"]["BaseStreamBlockBlockQuoteItemInput"] | components["schemas"]["BaseStreamBlockEmbedBlockItemInput"])[];
            /**
             * Recipe Headline
             * @default
             */
            recipe_headline: string | components["schemas"]["RichTextInputSchema"];
            /**
             * Body
             * @default []
             */
            body: (components["schemas"]["RecipeStreamBlockHeadingBlockItemInput"] | components["schemas"]["RecipeStreamBlockParagraphBlockItemInput"] | components["schemas"]["RecipeStreamBlockBlockQuoteItemInput"] | components["schemas"]["RecipeStreamBlockTableBlockItemInput"] | components["schemas"]["RecipeStreamBlockTypedTableBlockItemInput"] | components["schemas"]["RecipeStreamBlockImageBlockItemInput"] | components["schemas"]["RecipeStreamBlockEmbedBlockItemInput"] | components["schemas"]["RecipeStreamBlockIngredientsListItemInput"] | components["schemas"]["RecipeStreamBlockStepsListItemInput"])[];
            /**
             * Recipe Person Relationship
             * @default []
             */
            recipe_person_relationship: components["schemas"]["RecipePersonRelationshipCreateSchema"][];
        };
        /** RecipePersonRelationshipCreateSchema */
        RecipePersonRelationshipCreateSchema: {
            /** Person */
            person_id: number;
        };
        /** RecipeStepBlockInput */
        RecipeStepBlockInput: {
            /** Text */
            text?: string | components["schemas"]["RichTextInputSchema"] | null;
            /** Difficulty */
            difficulty?: ("S" | "M" | "L") | null;
        };
        /** RecipeStreamBlockBlockQuoteItemInput */
        RecipeStreamBlockBlockQuoteItemInput: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "block_quote";
            value: components["schemas"]["BlockQuoteInput"];
            /** Id */
            id?: string | null;
        };
        /** RecipeStreamBlockEmbedBlockItemInput */
        RecipeStreamBlockEmbedBlockItemInput: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "embed_block";
            /** Value */
            value: string | null;
            /** Id */
            id?: string | null;
        };
        /** RecipeStreamBlockHeadingBlockItemInput */
        RecipeStreamBlockHeadingBlockItemInput: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "heading_block";
            value: components["schemas"]["HeadingBlockInput"];
            /** Id */
            id?: string | null;
        };
        /** RecipeStreamBlockImageBlockItemInput */
        RecipeStreamBlockImageBlockItemInput: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "image_block";
            value: components["schemas"]["CustomImageBlockInput"];
            /** Id */
            id?: string | null;
        };
        /** RecipeStreamBlockIngredientsListBlockItemInput */
        RecipeStreamBlockIngredientsListBlockItemInput: {
            /**
             * Type
             * @constant
             */
            type: "item";
            /** Value */
            value: string | components["schemas"]["RichTextInputSchema"] | null;
            /** Id */
            id: string | null;
        };
        /** RecipeStreamBlockIngredientsListItemInput */
        RecipeStreamBlockIngredientsListItemInput: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "ingredients_list";
            /** Value */
            value: (string | components["schemas"]["RichTextInputSchema"] | components["schemas"]["RecipeStreamBlockIngredientsListBlockItemInput"] | null)[];
            /** Id */
            id?: string | null;
        };
        /** RecipeStreamBlockParagraphBlockItemInput */
        RecipeStreamBlockParagraphBlockItemInput: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "paragraph_block";
            /** Value */
            value: string | components["schemas"]["RichTextInputSchema"] | null;
            /** Id */
            id?: string | null;
        };
        /** RecipeStreamBlockStepsListBlockItemInput */
        RecipeStreamBlockStepsListBlockItemInput: {
            /**
             * Type
             * @constant
             */
            type: "item";
            value: components["schemas"]["RecipeStepBlockInput"];
            /** Id */
            id: string | null;
        };
        /** RecipeStreamBlockStepsListItemInput */
        RecipeStreamBlockStepsListItemInput: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "steps_list";
            /** Value */
            value: (components["schemas"]["RecipeStepBlockInput"] | components["schemas"]["RecipeStreamBlockStepsListBlockItemInput"])[];
            /** Id */
            id?: string | null;
        };
        /** RecipeStreamBlockTableBlockItemInput */
        RecipeStreamBlockTableBlockItemInput: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "table_block";
            value: components["schemas"]["TableBlockInput"] | null;
            /** Id */
            id?: string | null;
        };
        /** RecipeStreamBlockTypedTableBlockColumnInput */
        RecipeStreamBlockTypedTableBlockColumnInput: {
            /**
             * Type
             * @enum {string}
             */
            type: "text" | "numeric" | "rich_text" | "image";
            /** Heading */
            heading?: string;
        };
        /** RecipeStreamBlockTypedTableBlockInput */
        RecipeStreamBlockTypedTableBlockInput: {
            /** Columns */
            columns?: components["schemas"]["RecipeStreamBlockTypedTableBlockColumnInput"][];
            /** Rows */
            rows?: components["schemas"]["RecipeStreamBlockTypedTableBlockRowInput"][];
            /** Caption */
            caption?: string;
        };
        /** RecipeStreamBlockTypedTableBlockItemInput */
        RecipeStreamBlockTypedTableBlockItemInput: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "typed_table_block";
            value: components["schemas"]["RecipeStreamBlockTypedTableBlockInput"];
            /** Id */
            id?: string | null;
        };
        /** RecipeStreamBlockTypedTableBlockRowInput */
        RecipeStreamBlockTypedTableBlockRowInput: {
            /** Values */
            values?: (string | number | components["schemas"]["RichTextInputSchema"] | components["schemas"]["CustomImageBlockInput"] | null)[];
        };
        /**
         * RichTextInputSchema
         * @description Envelope form of rich text input. A plain string means DB HTML.
         */
        RichTextInputSchema: {
            /**
             * Format
             * @default db_html
             * @enum {string}
             */
            format: "db_html" | "db_markdown";
            /** Content */
            content: string;
            /**
             * Removals
             * @default []
             */
            removals: components["schemas"]["RichTextRemoval"][];
        };
        /** StandardPageCreateMetaSchema */
        StandardPageCreateMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "base.StandardPage";
            /** Parent Id */
            parent_id: number;
            /** Action */
            action?: "publish" | null;
        };
        /** StandardPageCreateSchema */
        StandardPageCreateSchema: {
            meta: components["schemas"]["StandardPageCreateMetaSchema"];
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title: string;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** TableBlockCellInput */
        TableBlockCellInput: {
            /** Row */
            row: number;
            /** Col */
            col: number;
            /** Classname */
            className?: string;
            /** Hidden */
            hidden?: boolean;
        };
        /** TableBlockInput */
        TableBlockInput: {
            /** Data */
            data?: (string | null)[][];
            /**
             * Table Header Choice
             * @enum {string}
             */
            table_header_choice?: "row" | "column" | "both" | "neither";
            /** First Row Is Table Header */
            first_row_is_table_header?: boolean;
            /** First Col Is Header */
            first_col_is_header?: boolean;
            /** Table Caption */
            table_caption?: string;
            /** Cell */
            cell?: components["schemas"]["TableBlockCellInput"][];
            /** Mergecells */
            mergeCells?: components["schemas"]["TableBlockMergedCellInput"][];
        };
        /** TableBlockMergedCellInput */
        TableBlockMergedCellInput: {
            /** Row */
            row: number;
            /** Col */
            col: number;
            /** Rowspan */
            rowspan: number;
            /** Colspan */
            colspan: number;
        };
        /** ThemeSettingsBlockInput */
        ThemeSettingsBlockInput: {
            /** Theme */
            theme?: ("default" | "highlight") | null;
            /** Text Size */
            text_size?: ("default" | "large") | null;
        };
        /** BlogIndexPagePatchMetaSchema */
        BlogIndexPagePatchMetaSchema: {
            /** Type */
            type: "blog.BlogIndexPage" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** BlogIndexPagePatchSchema */
        BlogIndexPagePatchSchema: {
            meta?: components["schemas"]["BlogIndexPagePatchMetaSchema"] | null;
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title?: string | null;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
            /**
             * Introduction
             * @description Text to describe the page
             */
            introduction?: string | null;
            /**
             * Image
             * @description Landscape mode only; horizontal width between 1000px and 3000px.
             */
            image_id?: number | null;
        };
        /** BlogPagePatchMetaSchema */
        BlogPagePatchMetaSchema: {
            /** Type */
            type: "blog.BlogPage" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** BlogPagePatchSchema */
        BlogPagePatchSchema: {
            meta?: components["schemas"]["BlogPagePatchMetaSchema"] | null;
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title?: string | null;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
            /**
             * Introduction
             * @description Text to describe the page
             */
            introduction?: string | null;
            /**
             * Image
             * @description Landscape mode only; horizontal width between 1000px and 3000px.
             */
            image_id?: number | null;
            /**
             * Body
             * @default []
             */
            body: (components["schemas"]["BaseStreamBlockHeadingBlockItemInput"] | components["schemas"]["BaseStreamBlockParagraphBlockItemInput"] | components["schemas"]["BaseStreamBlockImageBlockItemInput"] | components["schemas"]["BaseStreamBlockBlockQuoteItemInput"] | components["schemas"]["BaseStreamBlockEmbedBlockItemInput"])[];
            /** Subtitle */
            subtitle?: string | null;
            /** Date article published */
            date_published?: string | null;
            /**
             * Blog Person Relationship
             * @default []
             */
            blog_person_relationship: components["schemas"]["BlogPersonRelationshipPatchSchema"][];
        };
        /** BlogPersonRelationshipPatchSchema */
        BlogPersonRelationshipPatchSchema: {
            /** ID */
            id?: number | null;
            /** Person */
            person_id?: number | null;
        };
        /** BreadPagePatchMetaSchema */
        BreadPagePatchMetaSchema: {
            /** Type */
            type: "breads.BreadPage" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** BreadPagePatchSchema */
        BreadPagePatchSchema: {
            meta?: components["schemas"]["BreadPagePatchMetaSchema"] | null;
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title?: string | null;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** BreadsIndexPagePatchMetaSchema */
        BreadsIndexPagePatchMetaSchema: {
            /** Type */
            type: "breads.BreadsIndexPage" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** BreadsIndexPagePatchSchema */
        BreadsIndexPagePatchSchema: {
            meta?: components["schemas"]["BreadsIndexPagePatchMetaSchema"] | null;
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title?: string | null;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** FormPagePatchMetaSchema */
        FormPagePatchMetaSchema: {
            /** Type */
            type: "base.FormPage" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** FormPagePatchSchema */
        FormPagePatchSchema: {
            meta?: components["schemas"]["FormPagePatchMetaSchema"] | null;
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title?: string | null;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** GalleryPagePatchMetaSchema */
        GalleryPagePatchMetaSchema: {
            /** Type */
            type: "base.GalleryPage" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** GalleryPagePatchSchema */
        GalleryPagePatchSchema: {
            meta?: components["schemas"]["GalleryPagePatchMetaSchema"] | null;
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title?: string | null;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** HomePagePatchMetaSchema */
        HomePagePatchMetaSchema: {
            /** Type */
            type: "base.HomePage" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** HomePagePatchSchema */
        HomePagePatchSchema: {
            meta?: components["schemas"]["HomePagePatchMetaSchema"] | null;
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title?: string | null;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** LocationOperatingDayPatchSchema */
        LocationOperatingDayPatchSchema: {
            /**
             * Day
             * @default MON
             */
            day: string;
            /**
             * Closed?
             * @description Tick if location is closed on this day
             * @default false
             */
            closed: boolean | null;
            /** Custom Id */
            custom_id?: number | null;
            /**
             * Time Slots
             * @default []
             */
            time_slots: components["schemas"]["LocationOperatingTimeSlotPatchSchema"][];
        };
        /** LocationOperatingTimeSlotPatchSchema */
        LocationOperatingTimeSlotPatchSchema: {
            /** Opening Time */
            opening_time?: string | null;
            /** Closing Time */
            closing_time?: string | null;
            /** Custom Id */
            custom_id?: number | null;
        };
        /** LocationPagePatchMetaSchema */
        LocationPagePatchMetaSchema: {
            /** Type */
            type: "locations.LocationPage" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** LocationPagePatchSchema */
        LocationPagePatchSchema: {
            meta?: components["schemas"]["LocationPagePatchMetaSchema"] | null;
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title?: string | null;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
            /**
             * Operating Days
             * @default []
             */
            operating_days: components["schemas"]["LocationOperatingDayPatchSchema"][];
        };
        /** LocationsIndexPagePatchMetaSchema */
        LocationsIndexPagePatchMetaSchema: {
            /** Type */
            type: "locations.LocationsIndexPage" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** LocationsIndexPagePatchSchema */
        LocationsIndexPagePatchSchema: {
            meta?: components["schemas"]["LocationsIndexPagePatchMetaSchema"] | null;
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title?: string | null;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** PeopleIndexPagePatchMetaSchema */
        PeopleIndexPagePatchMetaSchema: {
            /** Type */
            type: "people.PeopleIndexPage" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** PeopleIndexPagePatchSchema */
        PeopleIndexPagePatchSchema: {
            meta?: components["schemas"]["PeopleIndexPagePatchMetaSchema"] | null;
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title?: string | null;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** PersonPagePatchMetaSchema */
        PersonPagePatchMetaSchema: {
            /** Type */
            type: "people.PersonPage" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** PersonPagePatchSchema */
        PersonPagePatchSchema: {
            meta?: components["schemas"]["PersonPagePatchMetaSchema"] | null;
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title?: string | null;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** RecipeIndexPagePatchMetaSchema */
        RecipeIndexPagePatchMetaSchema: {
            /** Type */
            type: "recipes.RecipeIndexPage" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** RecipeIndexPagePatchSchema */
        RecipeIndexPagePatchSchema: {
            meta?: components["schemas"]["RecipeIndexPagePatchMetaSchema"] | null;
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title?: string | null;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** RecipePagePatchMetaSchema */
        RecipePagePatchMetaSchema: {
            /** Type */
            type: "recipes.RecipePage" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** RecipePagePatchSchema */
        RecipePagePatchSchema: {
            meta?: components["schemas"]["RecipePagePatchMetaSchema"] | null;
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title?: string | null;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
            /** Date article published */
            date_published?: string | null;
            /** Subtitle */
            subtitle?: string | null;
            /** Introduction */
            introduction?: string | null;
            /**
             * Backstory
             * @default []
             */
            backstory: (components["schemas"]["BaseStreamBlockHeadingBlockItemInput"] | components["schemas"]["BaseStreamBlockParagraphBlockItemInput"] | components["schemas"]["BaseStreamBlockImageBlockItemInput"] | components["schemas"]["BaseStreamBlockBlockQuoteItemInput"] | components["schemas"]["BaseStreamBlockEmbedBlockItemInput"])[];
            /**
             * Recipe Headline
             * @default
             */
            recipe_headline: string | components["schemas"]["RichTextInputSchema"];
            /**
             * Body
             * @default []
             */
            body: (components["schemas"]["RecipeStreamBlockHeadingBlockItemInput"] | components["schemas"]["RecipeStreamBlockParagraphBlockItemInput"] | components["schemas"]["RecipeStreamBlockBlockQuoteItemInput"] | components["schemas"]["RecipeStreamBlockTableBlockItemInput"] | components["schemas"]["RecipeStreamBlockTypedTableBlockItemInput"] | components["schemas"]["RecipeStreamBlockImageBlockItemInput"] | components["schemas"]["RecipeStreamBlockEmbedBlockItemInput"] | components["schemas"]["RecipeStreamBlockIngredientsListItemInput"] | components["schemas"]["RecipeStreamBlockStepsListItemInput"])[];
            /**
             * Recipe Person Relationship
             * @default []
             */
            recipe_person_relationship: components["schemas"]["RecipePersonRelationshipPatchSchema"][];
        };
        /** RecipePersonRelationshipPatchSchema */
        RecipePersonRelationshipPatchSchema: {
            /** ID */
            id?: number | null;
            /** Person */
            person_id?: number | null;
        };
        /** StandardPagePatchMetaSchema */
        StandardPagePatchMetaSchema: {
            /** Type */
            type: "base.StandardPage" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** StandardPagePatchSchema */
        StandardPagePatchSchema: {
            meta?: components["schemas"]["StandardPagePatchMetaSchema"] | null;
            /**
             * Title
             * @description The page title as you'd like it to be seen by the public
             */
            title?: string | null;
            /**
             * Slug
             * @description The name of the page as it will appear in URLs e.g http://domain.com/blog/[my-slug]/
             */
            slug?: string | null;
            /**
             * Title Tag
             * @description The name of the page displayed on search engine results as the clickable headline.
             */
            seo_title?: string | null;
            /**
             * Meta Description
             * @description The descriptive text displayed underneath a headline in search engine results.
             */
            search_description?: string | null;
            /**
             * Show In Menus
             * @description Whether a link to this page will appear in automatically generated menus
             * @default false
             */
            show_in_menus: boolean | null;
        };
        /** RevisionFilterSchema */
        RevisionFilterSchema: {
            /** Created At From */
            created_at_from?: string | null;
            /** Created At To */
            created_at_to?: string | null;
            /** User Id */
            user_id?: number | string | null;
            /** Approved Go Live At From */
            approved_go_live_at_from?: string | null;
            /** Approved Go Live At To */
            approved_go_live_at_to?: string | null;
            /** Object Str */
            object_str?: string | null;
        };
        /** BaseMetaSchema */
        BaseMetaSchema: {
            /** Type */
            type: string;
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
        };
        /** PagedRevisionSchema */
        PagedRevisionSchema: {
            /** Items */
            items: components["schemas"]["RevisionSchema"][];
            /** Count */
            count: number;
        };
        /** RevisionSchema */
        RevisionSchema: {
            meta: components["schemas"]["BaseMetaSchema"];
            /** Id */
            id: number;
            /** Object Id */
            object_id: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /** User Id */
            user_id?: number | string | null;
            /** Object Str */
            object_str: string;
            /** Approved Go Live At */
            approved_go_live_at?: string | null;
        };
        /** ContentTypeSchema */
        ContentTypeSchema: {
            meta: components["schemas"]["BaseMetaSchema"];
            /** Id */
            id: number;
            /** Name */
            name: string;
            /** Label */
            label: string;
        };
        /** PageRevisionDetailSchema */
        PageRevisionDetailSchema: {
            meta: components["schemas"]["BaseMetaSchema"];
            /** Id */
            id: number;
            /** Object Id */
            object_id: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /** User Id */
            user_id?: number | string | null;
            /** Object Str */
            object_str: string;
            /** Approved Go Live At */
            approved_go_live_at?: string | null;
            content_type: components["schemas"]["ContentTypeSchema"];
            base_content_type: components["schemas"]["ContentTypeSchema"];
            /**
             * Content Object
             * @description A union of models, discriminated by the content type in `meta.type`.
             */
            content_object: components["schemas"]["PageSchema"] | components["schemas"]["StandardPageSchema"] | components["schemas"]["HomePageSchema"] | components["schemas"]["GalleryPageSchema"] | components["schemas"]["FormPageSchema"] | components["schemas"]["BlogPageSchema"] | components["schemas"]["BlogIndexPageSchema"] | components["schemas"]["BreadPageSchema"] | components["schemas"]["BreadsIndexPageSchema"] | components["schemas"]["LocationsIndexPageSchema"] | components["schemas"]["LocationPageSchema"] | components["schemas"]["RecipePageSchema"] | components["schemas"]["RecipeIndexPageSchema"] | components["schemas"]["PersonPageSchema"] | components["schemas"]["PeopleIndexPageSchema"];
        };
        /** WorkflowStateDetailSchema */
        WorkflowStateDetailSchema: {
            meta: components["schemas"]["BaseMetaSchema"];
            /** Id */
            id: number;
            workflow: components["schemas"]["WorkflowSummarySchema"];
            /**
             * Status
             * @enum {string}
             */
            status: "in_progress" | "needs_changes" | "approved" | "cancelled";
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            requested_by?: components["schemas"]["WorkflowUserSummarySchema"] | null;
            current_task_state?: components["schemas"]["WorkflowTaskStateSchema"] | null;
            /** Task States */
            task_states: components["schemas"]["WorkflowTaskStateSchema"][];
            /** Tasks */
            tasks: components["schemas"]["WorkflowTaskTimelineItemSchema"][];
        };
        /** WorkflowStatusSchema */
        WorkflowStatusSchema: {
            workflow?: components["schemas"]["WorkflowSummarySchema"] | null;
            workflow_state?: components["schemas"]["WorkflowStateDetailSchema"] | null;
            /**
             * Allowed Actions
             * @default []
             */
            allowed_actions: string[];
        };
        /** WorkflowSummarySchema */
        WorkflowSummarySchema: {
            /** Id */
            id: number;
            /** Name */
            name: string;
        };
        /** WorkflowTaskStateSchema */
        WorkflowTaskStateSchema: {
            meta: components["schemas"]["BaseMetaSchema"];
            /** Id */
            id: number;
            task: components["schemas"]["WorkflowTaskSummarySchema"];
            /**
             * Status
             * @enum {string}
             */
            status: "in_progress" | "approved" | "rejected" | "skipped" | "cancelled";
            /** Revision Id */
            revision_id: number;
            /**
             * Started At
             * Format: date-time
             */
            started_at: string;
            /** Finished At */
            finished_at?: string | null;
            finished_by?: components["schemas"]["WorkflowUserSummarySchema"] | null;
            /** Comment */
            comment: string;
        };
        /** WorkflowTaskSummarySchema */
        WorkflowTaskSummarySchema: {
            /** Id */
            id: number;
            /** Name */
            name: string;
            /** Type */
            type: string;
        };
        /** WorkflowTaskTimelineItemSchema */
        WorkflowTaskTimelineItemSchema: {
            task: components["schemas"]["WorkflowTaskSummarySchema"];
            task_state?: components["schemas"]["WorkflowTaskStateSchema"] | null;
        };
        /** WorkflowUserSummarySchema */
        WorkflowUserSummarySchema: {
            /** Id */
            id: number | string;
            /** Name */
            name: string;
        };
        /** PagedWorkflowStateSchema */
        PagedWorkflowStateSchema: {
            /** Items */
            items: components["schemas"]["WorkflowStateSchema"][];
            /** Count */
            count: number;
        };
        /** WorkflowStateSchema */
        WorkflowStateSchema: {
            meta: components["schemas"]["BaseMetaSchema"];
            /** Id */
            id: number;
            workflow: components["schemas"]["WorkflowSummarySchema"];
            /**
             * Status
             * @enum {string}
             */
            status: "in_progress" | "needs_changes" | "approved" | "cancelled";
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            requested_by?: components["schemas"]["WorkflowUserSummarySchema"] | null;
            current_task_state?: components["schemas"]["WorkflowTaskStateSchema"] | null;
            /** Task States */
            task_states: components["schemas"]["WorkflowTaskStateSchema"][];
        };
        /** PageUnpublishSchema */
        PageUnpublishSchema: {
            /**
             * Recursive
             * @default false
             */
            recursive: boolean;
        };
        /** PageCopySchema */
        PageCopySchema: {
            /** Destination Id */
            destination_id?: number | null;
            /**
             * Recursive
             * @default false
             */
            recursive: boolean;
            /**
             * Keep Live
             * @default true
             */
            keep_live: boolean;
            /** Slug */
            slug?: string | null;
            /** Title */
            title?: string | null;
        };
        /** PageMoveSchema */
        PageMoveSchema: {
            /** Destination Id */
            destination_id: number;
            /** Position */
            position?: ("first-child" | "last-child" | "left" | "right" | "first-sibling" | "last-sibling") | null;
        };
        /** PageRevertSchema */
        PageRevertSchema: {
            /** Revision Id */
            revision_id: number;
        };
        /** PageCreateAliasSchema */
        PageCreateAliasSchema: {
            /** Destination Id */
            destination_id?: number | null;
            /**
             * Recursive
             * @default false
             */
            recursive: boolean;
            /** Slug */
            slug?: string | null;
        };
        /** PageCopyForTranslationSchema */
        PageCopyForTranslationSchema: {
            /** Locale */
            locale: string;
            /**
             * Copy Parents
             * @default false
             */
            copy_parents: boolean;
            /**
             * Alias
             * @default false
             */
            alias: boolean;
            /**
             * Recursive
             * @default false
             */
            recursive: boolean;
        };
        /** WorkflowTaskActionSchema */
        WorkflowTaskActionSchema: {
            /** Comment */
            comment?: string | null;
            /** Task State Id */
            task_state_id?: number | null;
        } & {
            [key: string]: unknown;
        };
        /** ContentTypeListSchema */
        ContentTypeListSchema: {
            /** Types */
            types: components["schemas"]["ContentTypeSummarySchema"][];
        };
        /** ContentTypeSummarySchema */
        ContentTypeSummarySchema: {
            /** Name */
            name: string;
            /** Label */
            label: string;
        };
        /** SchemaDetailResponse */
        SchemaDetailResponse: {
            /** Read */
            read?: {
                [key: string]: unknown;
            } | null;
            /** Create */
            create?: {
                [key: string]: unknown;
            } | null;
            /** Patch */
            patch?: {
                [key: string]: unknown;
            } | null;
        };
        /** PagedSiteSchema */
        PagedSiteSchema: {
            /** Items */
            items: components["schemas"]["SiteSchema"][];
            /** Count */
            count: number;
        };
        /** SiteSchema */
        SiteSchema: {
            /** Id */
            id: number;
            /** Hostname */
            hostname: string;
            /** Port */
            port: number;
            /** Site Name */
            site_name: string;
            /** Root Page Id */
            root_page_id: number;
            /** Is Default Site */
            is_default_site: boolean;
        };
        /** SiteInputSchema */
        SiteInputSchema: {
            /** Hostname */
            hostname: string;
            /**
             * Port
             * @default 80
             */
            port: number;
            /**
             * Site Name
             * @default
             */
            site_name: string;
            /** Root Page Id */
            root_page_id: number;
            /**
             * Is Default Site
             * @default false
             */
            is_default_site: boolean;
        };
        /** WhoAmIProfileSchema */
        WhoAmIProfileSchema: {
            /** Avatar Url */
            avatar_url: string | null;
        };
        /** WhoAmISchema */
        WhoAmISchema: {
            user: components["schemas"]["WhoAmIUserSchema"];
            profile: components["schemas"]["WhoAmIProfileSchema"];
            /** Groups */
            groups: string[];
        };
        /** WhoAmIUserSchema */
        WhoAmIUserSchema: {
            /** Id */
            id: string;
            /** Username */
            username: string;
            /** Email */
            email: string;
            /** First Name */
            first_name: string;
            /** Last Name */
            last_name: string;
            /** Is Superuser */
            is_superuser: boolean;
        };
        /** TranslationFilterSchema */
        TranslationFilterSchema: {
            /** Locale */
            locale?: string | null;
            /** Translation Of */
            translation_of?: string | null;
        };
        /** BreadIngredientMetaSchema */
        BreadIngredientMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "breads.BreadIngredient";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
        };
        /** BreadIngredientSchema */
        BreadIngredientSchema: {
            meta: components["schemas"]["BreadIngredientMetaSchema"];
            /** ID */
            id?: number | null;
            /** Name */
            name: string;
        };
        /** BreadTypeMetaSchema */
        BreadTypeMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "breads.BreadType";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
        };
        /** BreadTypeSchema */
        BreadTypeSchema: {
            meta: components["schemas"]["BreadTypeMetaSchema"];
            /** ID */
            id?: number | null;
            /** Title */
            title: string;
        };
        /** FooterTextMetaSchema */
        FooterTextMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "base.FooterText";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
        };
        /** FooterTextSchema */
        FooterTextSchema: {
            meta: components["schemas"]["FooterTextMetaSchema"];
            /** ID */
            id?: number | null;
            /** Body */
            body?: string | null;
        };
        /** PagedAnnotated */
        PagedAnnotated: {
            /** Items */
            items: (components["schemas"]["PageSchema"] | components["schemas"]["StandardPageSchema"] | components["schemas"]["HomePageSchema"] | components["schemas"]["GalleryPageSchema"] | components["schemas"]["FormPageSchema"] | components["schemas"]["BlogPageSchema"] | components["schemas"]["BlogIndexPageSchema"] | components["schemas"]["BreadPageSchema"] | components["schemas"]["BreadsIndexPageSchema"] | components["schemas"]["LocationsIndexPageSchema"] | components["schemas"]["LocationPageSchema"] | components["schemas"]["RecipePageSchema"] | components["schemas"]["RecipeIndexPageSchema"] | components["schemas"]["PersonPageSchema"] | components["schemas"]["PeopleIndexPageSchema"])[];
            /** Count */
            count: number;
        };
        /** PersonMetaSchema */
        PersonMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "base.Person";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
        };
        /** PersonSchema */
        PersonSchema: {
            meta: components["schemas"]["PersonMetaSchema"];
            /** ID */
            id?: number | null;
            /** First name */
            first_name: string;
            /** Last name */
            last_name: string;
            /** Job title */
            job_title: string;
            image?: components["schemas"]["ImageForeignKeySchema"] | null;
            /** Image Avatar */
            image_avatar?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
            /** Image Listing */
            image_listing?: components["schemas"]["ImageRenditionDict"] | components["schemas"]["ImageRenditionErrorDict"] | null;
        };
        /** BreadIngredientCreateMetaSchema */
        BreadIngredientCreateMetaSchema: {
            /** Type */
            type: "breads.BreadIngredient" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** BreadIngredientCreateSchema */
        BreadIngredientCreateSchema: {
            meta?: components["schemas"]["BreadIngredientCreateMetaSchema"] | null;
        };
        /** BreadTypeCreateMetaSchema */
        BreadTypeCreateMetaSchema: {
            /** Type */
            type: "breads.BreadType" | null;
        };
        /** BreadTypeCreateSchema */
        BreadTypeCreateSchema: {
            meta?: components["schemas"]["BreadTypeCreateMetaSchema"] | null;
        };
        /** FooterTextCreateMetaSchema */
        FooterTextCreateMetaSchema: {
            /** Type */
            type: "base.FooterText" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** FooterTextCreateSchema */
        FooterTextCreateSchema: {
            meta?: components["schemas"]["FooterTextCreateMetaSchema"] | null;
        };
        /** PersonCreateMetaSchema */
        PersonCreateMetaSchema: {
            /** Type */
            type: "base.Person" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** PersonCreateSchema */
        PersonCreateSchema: {
            meta?: components["schemas"]["PersonCreateMetaSchema"] | null;
        };
        /** BreadIngredientPatchMetaSchema */
        BreadIngredientPatchMetaSchema: {
            /** Type */
            type: "breads.BreadIngredient" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** BreadIngredientPatchSchema */
        BreadIngredientPatchSchema: {
            meta?: components["schemas"]["BreadIngredientPatchMetaSchema"] | null;
        };
        /** BreadTypePatchMetaSchema */
        BreadTypePatchMetaSchema: {
            /** Type */
            type: "breads.BreadType" | null;
        };
        /** BreadTypePatchSchema */
        BreadTypePatchSchema: {
            meta?: components["schemas"]["BreadTypePatchMetaSchema"] | null;
        };
        /** FooterTextPatchMetaSchema */
        FooterTextPatchMetaSchema: {
            /** Type */
            type: "base.FooterText" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** FooterTextPatchSchema */
        FooterTextPatchSchema: {
            meta?: components["schemas"]["FooterTextPatchMetaSchema"] | null;
        };
        /** PersonPatchMetaSchema */
        PersonPatchMetaSchema: {
            /** Type */
            type: "base.Person" | null;
            /** Action */
            action?: "publish" | null;
        };
        /** PersonPatchSchema */
        PersonPatchSchema: {
            meta?: components["schemas"]["PersonPatchMetaSchema"] | null;
        };
        /** SnippetRevisionDetailSchema */
        SnippetRevisionDetailSchema: {
            meta: components["schemas"]["BaseMetaSchema"];
            /** Id */
            id: number;
            /** Object Id */
            object_id: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /** User Id */
            user_id?: number | string | null;
            /** Object Str */
            object_str: string;
            /** Approved Go Live At */
            approved_go_live_at?: string | null;
            content_type: components["schemas"]["ContentTypeSchema"];
            base_content_type: components["schemas"]["ContentTypeSchema"];
            /**
             * Content Object
             * @description A union of models, discriminated by the content type in `meta.type`.
             */
            content_object: components["schemas"]["BreadIngredientSchema"] | components["schemas"]["BreadTypeSchema"] | components["schemas"]["FooterTextSchema"] | components["schemas"]["PersonSchema"];
        };
        /** SnippetRevertSchema */
        SnippetRevertSchema: {
            /** Revision Id */
            revision_id: number;
        };
        /** SnippetCopyForTranslationSchema */
        SnippetCopyForTranslationSchema: {
            /** Locale */
            locale: string;
        };
        /** DocumentDetailMetaSchema */
        DocumentDetailMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "wagtaildocs.Document";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /**
             * Tags
             * @default []
             */
            tags: string[];
            /** Download Url */
            download_url?: string | null;
        };
        /** DocumentSchema */
        DocumentSchema: {
            meta: components["schemas"]["DocumentDetailMetaSchema"];
            /** ID */
            id?: number | null;
            /** Title */
            title: string;
            collection: components["schemas"]["CollectionForeignKeySchema"];
        };
        /** PagedDocumentSchema */
        PagedDocumentSchema: {
            /** Items */
            items: components["schemas"]["DocumentSchema"][];
            /** Count */
            count: number;
        };
        /** DocumentCreateSchema */
        DocumentCreateSchema: {
            /** Title */
            title: string;
            /** Collection */
            collection_id?: number | null;
        };
        /** DocumentPatchSchema */
        DocumentPatchSchema: {
            /** Title */
            title?: string | null;
            /** Collection */
            collection_id?: number | null;
        };
        /** ImageDetailMetaSchema */
        ImageDetailMetaSchema: {
            /**
             * Type
             * @constant
             */
            type: "wagtailimages.Image";
            /** Warnings */
            warnings?: (components["schemas"]["RichTextRemoval"] | string)[] | null;
            /** Detail Url */
            detail_url?: string | null;
            /**
             * Tags
             * @default []
             */
            tags: string[];
            /** Download Url */
            download_url?: string | null;
        };
        /** ImageSchema */
        ImageSchema: {
            meta: components["schemas"]["ImageDetailMetaSchema"];
            /** ID */
            id?: number | null;
            /** Title */
            title: string;
            /** Width */
            width: number;
            /** Height */
            height: number;
            /** Description */
            description?: string | null;
            collection?: components["schemas"]["CollectionForeignKeySchema"];
            /** Focal Point X */
            focal_point_x?: number | null;
            /** Focal Point Y */
            focal_point_y?: number | null;
            /** Focal Point Width */
            focal_point_width?: number | null;
            /** Focal Point Height */
            focal_point_height?: number | null;
        };
        /** PagedImageSchema */
        PagedImageSchema: {
            /** Items */
            items: components["schemas"]["ImageSchema"][];
            /** Count */
            count: number;
        };
        /** ImageCreateSchema */
        ImageCreateSchema: {
            /** Title */
            title: string;
            /**
             * Description
             * @default
             */
            description: string | null;
            /** Collection */
            collection_id?: number | null;
            /** Focal Point X */
            focal_point_x?: number | null;
            /** Focal Point Y */
            focal_point_y?: number | null;
            /** Focal Point Width */
            focal_point_width?: number | null;
            /** Focal Point Height */
            focal_point_height?: number | null;
        };
        /** ImagePatchSchema */
        ImagePatchSchema: {
            /** Title */
            title?: string | null;
            /**
             * Description
             * @default
             */
            description: string | null;
            /** Collection */
            collection_id?: number | null;
            /** Focal Point X */
            focal_point_x?: number | null;
            /** Focal Point Y */
            focal_point_y?: number | null;
            /** Focal Point Width */
            focal_point_width?: number | null;
            /** Focal Point Height */
            focal_point_height?: number | null;
        };
        /** LocaleSchema */
        LocaleSchema: {
            meta: components["schemas"]["BaseMetaSchema"];
            /** Id */
            id: number;
            /** Language Code */
            language_code: string;
            /** Display Name */
            display_name: string;
            /** Is Bidi */
            is_bidi: boolean;
            /** Is Default */
            is_default: boolean;
        };
        /** PagedLocaleSchema */
        PagedLocaleSchema: {
            /** Items */
            items: components["schemas"]["LocaleSchema"][];
            /** Count */
            count: number;
        };
        /** LocaleInputSchema */
        LocaleInputSchema: {
            /** Language Code */
            language_code: string;
        };
        /** PagedRedirectSchema */
        PagedRedirectSchema: {
            /** Items */
            items: components["schemas"]["RedirectSchema"][];
            /** Count */
            count: number;
        };
        /** RedirectSchema */
        RedirectSchema: {
            /** Id */
            id: number;
            /** Old Path */
            old_path: string;
            /** Site Id */
            site_id: number | null;
            /** Is Permanent */
            is_permanent: boolean;
            /** Redirect Page Id */
            redirect_page_id: number | null;
            /** Redirect Page Route Path */
            redirect_page_route_path: string;
            /** Redirect Link */
            redirect_link: string;
            /** Automatically Created */
            automatically_created: boolean;
            /** Created At */
            created_at: string | null;
        };
        /** RedirectInputSchema */
        RedirectInputSchema: {
            /** Old Path */
            old_path: string;
            /** Site */
            site?: number | null;
            /**
             * Is Permanent
             * @default true
             */
            is_permanent: boolean;
            /** Redirect Page Id */
            redirect_page_id?: number | null;
            /**
             * Redirect Page Route Path
             * @default
             */
            redirect_page_route_path: string;
            /**
             * Redirect Link
             * @default
             */
            redirect_link: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type Input = components['schemas']['Input'];
export type OrderingSchema = components['schemas']['OrderingSchema'];
export type PageFilterSchema = components['schemas']['PageFilterSchema'];
export type SearchSchema = components['schemas']['SearchSchema'];
export type BasePageMetaSchema = components['schemas']['BasePageMetaSchema'];
export type BasePageSchema = components['schemas']['BasePageSchema'];
export type PagedBasePageSchema = components['schemas']['PagedBasePageSchema'];
export type RichTextRemoval = components['schemas']['RichTextRemoval'];
export type BaseStreamBlockBlockQuoteItem = components['schemas']['BaseStreamBlockBlockQuoteItem'];
export type BaseStreamBlockEmbedBlockItem = components['schemas']['BaseStreamBlockEmbedBlockItem'];
export type BaseStreamBlockHeadingBlockItem = components['schemas']['BaseStreamBlockHeadingBlockItem'];
export type BaseStreamBlockImageBlockItem = components['schemas']['BaseStreamBlockImageBlockItem'];
export type BaseStreamBlockParagraphBlockItem = components['schemas']['BaseStreamBlockParagraphBlockItem'];
export type BlockQuote = components['schemas']['BlockQuote'];
export type BlogIndexPageMetaSchema = components['schemas']['BlogIndexPageMetaSchema'];
export type BlogIndexPageSchema = components['schemas']['BlogIndexPageSchema'];
export type BlogPageMetaSchema = components['schemas']['BlogPageMetaSchema'];
export type BlogPageSchema = components['schemas']['BlogPageSchema'];
export type BlogPersonRelationshipMetaSchema = components['schemas']['BlogPersonRelationshipMetaSchema'];
export type BlogPersonRelationshipSchema = components['schemas']['BlogPersonRelationshipSchema'];
export type BreadIngredientForeignKeyMetaSchema = components['schemas']['BreadIngredientForeignKeyMetaSchema'];
export type BreadIngredientForeignKeySchema = components['schemas']['BreadIngredientForeignKeySchema'];
export type BreadPageMetaSchema = components['schemas']['BreadPageMetaSchema'];
export type BreadPageSchema = components['schemas']['BreadPageSchema'];
export type BreadTypeForeignKeyMetaSchema = components['schemas']['BreadTypeForeignKeyMetaSchema'];
export type BreadTypeForeignKeySchema = components['schemas']['BreadTypeForeignKeySchema'];
export type BreadsIndexPageMetaSchema = components['schemas']['BreadsIndexPageMetaSchema'];
export type BreadsIndexPageSchema = components['schemas']['BreadsIndexPageSchema'];
export type CaptionedImageBlock = components['schemas']['CaptionedImageBlock'];
export type CollectionForeignKeyMetaSchema = components['schemas']['CollectionForeignKeyMetaSchema'];
export type CollectionForeignKeySchema = components['schemas']['CollectionForeignKeySchema'];
export type CountryForeignKeyMetaSchema = components['schemas']['CountryForeignKeyMetaSchema'];
export type CountryForeignKeySchema = components['schemas']['CountryForeignKeySchema'];
export type CustomImageBlock = components['schemas']['CustomImageBlock'];
export type EmbedValue = components['schemas']['EmbedValue'];
export type FormFieldMetaSchema = components['schemas']['FormFieldMetaSchema'];
export type FormFieldSchema = components['schemas']['FormFieldSchema'];
export type FormPageMetaSchema = components['schemas']['FormPageMetaSchema'];
export type FormPageSchema = components['schemas']['FormPageSchema'];
export type GalleryPageMetaSchema = components['schemas']['GalleryPageMetaSchema'];
export type GalleryPageSchema = components['schemas']['GalleryPageSchema'];
export type HeadingBlock = components['schemas']['HeadingBlock'];
export type HomePageMetaSchema = components['schemas']['HomePageMetaSchema'];
export type HomePageSchema = components['schemas']['HomePageSchema'];
export type ImageForeignKeyMetaSchema = components['schemas']['ImageForeignKeyMetaSchema'];
export type ImageForeignKeySchema = components['schemas']['ImageForeignKeySchema'];
export type ImageRenditionDict = components['schemas']['ImageRenditionDict'];
export type ImageRenditionErrorDict = components['schemas']['ImageRenditionErrorDict'];
export type LocationOperatingDayMetaSchema = components['schemas']['LocationOperatingDayMetaSchema'];
export type LocationOperatingDaySchema = components['schemas']['LocationOperatingDaySchema'];
export type LocationOperatingTimeSlotMetaSchema = components['schemas']['LocationOperatingTimeSlotMetaSchema'];
export type LocationOperatingTimeSlotSchema = components['schemas']['LocationOperatingTimeSlotSchema'];
export type LocationPageMetaSchema = components['schemas']['LocationPageMetaSchema'];
export type LocationPageSchema = components['schemas']['LocationPageSchema'];
export type LocationsIndexPageMetaSchema = components['schemas']['LocationsIndexPageMetaSchema'];
export type LocationsIndexPageSchema = components['schemas']['LocationsIndexPageSchema'];
export type PageLink = components['schemas']['PageLink'];
export type PageLinkMeta = components['schemas']['PageLinkMeta'];
export type PageMetaSchema = components['schemas']['PageMetaSchema'];
export type PageSchema = components['schemas']['PageSchema'];
export type PeopleIndexPageMetaSchema = components['schemas']['PeopleIndexPageMetaSchema'];
export type PeopleIndexPageSchema = components['schemas']['PeopleIndexPageSchema'];
export type PersonForeignKeyMetaSchema = components['schemas']['PersonForeignKeyMetaSchema'];
export type PersonForeignKeySchema = components['schemas']['PersonForeignKeySchema'];
export type PersonPageMetaSchema = components['schemas']['PersonPageMetaSchema'];
export type PersonPageSchema = components['schemas']['PersonPageSchema'];
export type PersonPageSocialLinksSocialItem = components['schemas']['PersonPageSocialLinksSocialItem'];
export type RecipeIndexPageMetaSchema = components['schemas']['RecipeIndexPageMetaSchema'];
export type RecipeIndexPageSchema = components['schemas']['RecipeIndexPageSchema'];
export type RecipePageMetaSchema = components['schemas']['RecipePageMetaSchema'];
export type RecipePageSchema = components['schemas']['RecipePageSchema'];
export type RecipePersonRelationshipMetaSchema = components['schemas']['RecipePersonRelationshipMetaSchema'];
export type RecipePersonRelationshipSchema = components['schemas']['RecipePersonRelationshipSchema'];
export type RecipeStepBlock = components['schemas']['RecipeStepBlock'];
export type RecipeStreamBlockBlockQuoteItem = components['schemas']['RecipeStreamBlockBlockQuoteItem'];
export type RecipeStreamBlockEmbedBlockItem = components['schemas']['RecipeStreamBlockEmbedBlockItem'];
export type RecipeStreamBlockHeadingBlockItem = components['schemas']['RecipeStreamBlockHeadingBlockItem'];
export type RecipeStreamBlockImageBlockItem = components['schemas']['RecipeStreamBlockImageBlockItem'];
export type RecipeStreamBlockIngredientsListItem = components['schemas']['RecipeStreamBlockIngredientsListItem'];
export type RecipeStreamBlockParagraphBlockItem = components['schemas']['RecipeStreamBlockParagraphBlockItem'];
export type RecipeStreamBlockStepsListItem = components['schemas']['RecipeStreamBlockStepsListItem'];
export type RecipeStreamBlockTableBlockItem = components['schemas']['RecipeStreamBlockTableBlockItem'];
export type RecipeStreamBlockTypedTableBlock = components['schemas']['RecipeStreamBlockTypedTableBlock'];
export type RecipeStreamBlockTypedTableBlockColumn = components['schemas']['RecipeStreamBlockTypedTableBlockColumn'];
export type RecipeStreamBlockTypedTableBlockItem = components['schemas']['RecipeStreamBlockTypedTableBlockItem'];
export type RecipeStreamBlockTypedTableBlockRow = components['schemas']['RecipeStreamBlockTypedTableBlockRow'];
export type SimpleBasePageMetaSchema = components['schemas']['SimpleBasePageMetaSchema'];
export type SimpleBasePageSchema = components['schemas']['SimpleBasePageSchema'];
export type SocialMediaBlock = components['schemas']['SocialMediaBlock'];
export type StandardPageMetaSchema = components['schemas']['StandardPageMetaSchema'];
export type StandardPageSchema = components['schemas']['StandardPageSchema'];
export type StreamFieldImage = components['schemas']['StreamFieldImage'];
export type StreamFieldImageMeta = components['schemas']['StreamFieldImageMeta'];
export type TableBlock = components['schemas']['TableBlock'];
export type TableBlockCell = components['schemas']['TableBlockCell'];
export type TableBlockMergedCell = components['schemas']['TableBlockMergedCell'];
export type ThemeSettingsBlock = components['schemas']['ThemeSettingsBlock'];
export type BaseStreamBlockBlockQuoteItemInput = components['schemas']['BaseStreamBlockBlockQuoteItemInput'];
export type BaseStreamBlockEmbedBlockItemInput = components['schemas']['BaseStreamBlockEmbedBlockItemInput'];
export type BaseStreamBlockHeadingBlockItemInput = components['schemas']['BaseStreamBlockHeadingBlockItemInput'];
export type BaseStreamBlockImageBlockItemInput = components['schemas']['BaseStreamBlockImageBlockItemInput'];
export type BaseStreamBlockParagraphBlockItemInput = components['schemas']['BaseStreamBlockParagraphBlockItemInput'];
export type BlockQuoteInput = components['schemas']['BlockQuoteInput'];
export type BlogIndexPageCreateMetaSchema = components['schemas']['BlogIndexPageCreateMetaSchema'];
export type BlogIndexPageCreateSchema = components['schemas']['BlogIndexPageCreateSchema'];
export type BlogPageCreateMetaSchema = components['schemas']['BlogPageCreateMetaSchema'];
export type BlogPageCreateSchema = components['schemas']['BlogPageCreateSchema'];
export type BlogPersonRelationshipCreateSchema = components['schemas']['BlogPersonRelationshipCreateSchema'];
export type BreadPageCreateMetaSchema = components['schemas']['BreadPageCreateMetaSchema'];
export type BreadPageCreateSchema = components['schemas']['BreadPageCreateSchema'];
export type BreadsIndexPageCreateMetaSchema = components['schemas']['BreadsIndexPageCreateMetaSchema'];
export type BreadsIndexPageCreateSchema = components['schemas']['BreadsIndexPageCreateSchema'];
export type CaptionedImageBlockInput = components['schemas']['CaptionedImageBlockInput'];
export type CustomImageBlockInput = components['schemas']['CustomImageBlockInput'];
export type FormPageCreateMetaSchema = components['schemas']['FormPageCreateMetaSchema'];
export type FormPageCreateSchema = components['schemas']['FormPageCreateSchema'];
export type GalleryPageCreateMetaSchema = components['schemas']['GalleryPageCreateMetaSchema'];
export type GalleryPageCreateSchema = components['schemas']['GalleryPageCreateSchema'];
export type HeadingBlockInput = components['schemas']['HeadingBlockInput'];
export type HomePageCreateMetaSchema = components['schemas']['HomePageCreateMetaSchema'];
export type HomePageCreateSchema = components['schemas']['HomePageCreateSchema'];
export type LocationOperatingDayCreateSchema = components['schemas']['LocationOperatingDayCreateSchema'];
export type LocationOperatingTimeSlotCreateSchema = components['schemas']['LocationOperatingTimeSlotCreateSchema'];
export type LocationPageCreateMetaSchema = components['schemas']['LocationPageCreateMetaSchema'];
export type LocationPageCreateSchema = components['schemas']['LocationPageCreateSchema'];
export type LocationsIndexPageCreateMetaSchema = components['schemas']['LocationsIndexPageCreateMetaSchema'];
export type LocationsIndexPageCreateSchema = components['schemas']['LocationsIndexPageCreateSchema'];
export type PeopleIndexPageCreateMetaSchema = components['schemas']['PeopleIndexPageCreateMetaSchema'];
export type PeopleIndexPageCreateSchema = components['schemas']['PeopleIndexPageCreateSchema'];
export type PersonPageCreateMetaSchema = components['schemas']['PersonPageCreateMetaSchema'];
export type PersonPageCreateSchema = components['schemas']['PersonPageCreateSchema'];
export type RecipeIndexPageCreateMetaSchema = components['schemas']['RecipeIndexPageCreateMetaSchema'];
export type RecipeIndexPageCreateSchema = components['schemas']['RecipeIndexPageCreateSchema'];
export type RecipePageCreateMetaSchema = components['schemas']['RecipePageCreateMetaSchema'];
export type RecipePageCreateSchema = components['schemas']['RecipePageCreateSchema'];
export type RecipePersonRelationshipCreateSchema = components['schemas']['RecipePersonRelationshipCreateSchema'];
export type RecipeStepBlockInput = components['schemas']['RecipeStepBlockInput'];
export type RecipeStreamBlockBlockQuoteItemInput = components['schemas']['RecipeStreamBlockBlockQuoteItemInput'];
export type RecipeStreamBlockEmbedBlockItemInput = components['schemas']['RecipeStreamBlockEmbedBlockItemInput'];
export type RecipeStreamBlockHeadingBlockItemInput = components['schemas']['RecipeStreamBlockHeadingBlockItemInput'];
export type RecipeStreamBlockImageBlockItemInput = components['schemas']['RecipeStreamBlockImageBlockItemInput'];
export type RecipeStreamBlockIngredientsListBlockItemInput = components['schemas']['RecipeStreamBlockIngredientsListBlockItemInput'];
export type RecipeStreamBlockIngredientsListItemInput = components['schemas']['RecipeStreamBlockIngredientsListItemInput'];
export type RecipeStreamBlockParagraphBlockItemInput = components['schemas']['RecipeStreamBlockParagraphBlockItemInput'];
export type RecipeStreamBlockStepsListBlockItemInput = components['schemas']['RecipeStreamBlockStepsListBlockItemInput'];
export type RecipeStreamBlockStepsListItemInput = components['schemas']['RecipeStreamBlockStepsListItemInput'];
export type RecipeStreamBlockTableBlockItemInput = components['schemas']['RecipeStreamBlockTableBlockItemInput'];
export type RecipeStreamBlockTypedTableBlockColumnInput = components['schemas']['RecipeStreamBlockTypedTableBlockColumnInput'];
export type RecipeStreamBlockTypedTableBlockInput = components['schemas']['RecipeStreamBlockTypedTableBlockInput'];
export type RecipeStreamBlockTypedTableBlockItemInput = components['schemas']['RecipeStreamBlockTypedTableBlockItemInput'];
export type RecipeStreamBlockTypedTableBlockRowInput = components['schemas']['RecipeStreamBlockTypedTableBlockRowInput'];
export type RichTextInputSchema = components['schemas']['RichTextInputSchema'];
export type StandardPageCreateMetaSchema = components['schemas']['StandardPageCreateMetaSchema'];
export type StandardPageCreateSchema = components['schemas']['StandardPageCreateSchema'];
export type TableBlockCellInput = components['schemas']['TableBlockCellInput'];
export type TableBlockInput = components['schemas']['TableBlockInput'];
export type TableBlockMergedCellInput = components['schemas']['TableBlockMergedCellInput'];
export type ThemeSettingsBlockInput = components['schemas']['ThemeSettingsBlockInput'];
export type BlogIndexPagePatchMetaSchema = components['schemas']['BlogIndexPagePatchMetaSchema'];
export type BlogIndexPagePatchSchema = components['schemas']['BlogIndexPagePatchSchema'];
export type BlogPagePatchMetaSchema = components['schemas']['BlogPagePatchMetaSchema'];
export type BlogPagePatchSchema = components['schemas']['BlogPagePatchSchema'];
export type BlogPersonRelationshipPatchSchema = components['schemas']['BlogPersonRelationshipPatchSchema'];
export type BreadPagePatchMetaSchema = components['schemas']['BreadPagePatchMetaSchema'];
export type BreadPagePatchSchema = components['schemas']['BreadPagePatchSchema'];
export type BreadsIndexPagePatchMetaSchema = components['schemas']['BreadsIndexPagePatchMetaSchema'];
export type BreadsIndexPagePatchSchema = components['schemas']['BreadsIndexPagePatchSchema'];
export type FormPagePatchMetaSchema = components['schemas']['FormPagePatchMetaSchema'];
export type FormPagePatchSchema = components['schemas']['FormPagePatchSchema'];
export type GalleryPagePatchMetaSchema = components['schemas']['GalleryPagePatchMetaSchema'];
export type GalleryPagePatchSchema = components['schemas']['GalleryPagePatchSchema'];
export type HomePagePatchMetaSchema = components['schemas']['HomePagePatchMetaSchema'];
export type HomePagePatchSchema = components['schemas']['HomePagePatchSchema'];
export type LocationOperatingDayPatchSchema = components['schemas']['LocationOperatingDayPatchSchema'];
export type LocationOperatingTimeSlotPatchSchema = components['schemas']['LocationOperatingTimeSlotPatchSchema'];
export type LocationPagePatchMetaSchema = components['schemas']['LocationPagePatchMetaSchema'];
export type LocationPagePatchSchema = components['schemas']['LocationPagePatchSchema'];
export type LocationsIndexPagePatchMetaSchema = components['schemas']['LocationsIndexPagePatchMetaSchema'];
export type LocationsIndexPagePatchSchema = components['schemas']['LocationsIndexPagePatchSchema'];
export type PeopleIndexPagePatchMetaSchema = components['schemas']['PeopleIndexPagePatchMetaSchema'];
export type PeopleIndexPagePatchSchema = components['schemas']['PeopleIndexPagePatchSchema'];
export type PersonPagePatchMetaSchema = components['schemas']['PersonPagePatchMetaSchema'];
export type PersonPagePatchSchema = components['schemas']['PersonPagePatchSchema'];
export type RecipeIndexPagePatchMetaSchema = components['schemas']['RecipeIndexPagePatchMetaSchema'];
export type RecipeIndexPagePatchSchema = components['schemas']['RecipeIndexPagePatchSchema'];
export type RecipePagePatchMetaSchema = components['schemas']['RecipePagePatchMetaSchema'];
export type RecipePagePatchSchema = components['schemas']['RecipePagePatchSchema'];
export type RecipePersonRelationshipPatchSchema = components['schemas']['RecipePersonRelationshipPatchSchema'];
export type StandardPagePatchMetaSchema = components['schemas']['StandardPagePatchMetaSchema'];
export type StandardPagePatchSchema = components['schemas']['StandardPagePatchSchema'];
export type RevisionFilterSchema = components['schemas']['RevisionFilterSchema'];
export type BaseMetaSchema = components['schemas']['BaseMetaSchema'];
export type PagedRevisionSchema = components['schemas']['PagedRevisionSchema'];
export type RevisionSchema = components['schemas']['RevisionSchema'];
export type ContentTypeSchema = components['schemas']['ContentTypeSchema'];
export type PageRevisionDetailSchema = components['schemas']['PageRevisionDetailSchema'];
export type WorkflowStateDetailSchema = components['schemas']['WorkflowStateDetailSchema'];
export type WorkflowStatusSchema = components['schemas']['WorkflowStatusSchema'];
export type WorkflowSummarySchema = components['schemas']['WorkflowSummarySchema'];
export type WorkflowTaskStateSchema = components['schemas']['WorkflowTaskStateSchema'];
export type WorkflowTaskSummarySchema = components['schemas']['WorkflowTaskSummarySchema'];
export type WorkflowTaskTimelineItemSchema = components['schemas']['WorkflowTaskTimelineItemSchema'];
export type WorkflowUserSummarySchema = components['schemas']['WorkflowUserSummarySchema'];
export type PagedWorkflowStateSchema = components['schemas']['PagedWorkflowStateSchema'];
export type WorkflowStateSchema = components['schemas']['WorkflowStateSchema'];
export type PageUnpublishSchema = components['schemas']['PageUnpublishSchema'];
export type PageCopySchema = components['schemas']['PageCopySchema'];
export type PageMoveSchema = components['schemas']['PageMoveSchema'];
export type PageRevertSchema = components['schemas']['PageRevertSchema'];
export type PageCreateAliasSchema = components['schemas']['PageCreateAliasSchema'];
export type PageCopyForTranslationSchema = components['schemas']['PageCopyForTranslationSchema'];
export type WorkflowTaskActionSchema = components['schemas']['WorkflowTaskActionSchema'];
export type ContentTypeListSchema = components['schemas']['ContentTypeListSchema'];
export type ContentTypeSummarySchema = components['schemas']['ContentTypeSummarySchema'];
export type SchemaDetailResponse = components['schemas']['SchemaDetailResponse'];
export type PagedSiteSchema = components['schemas']['PagedSiteSchema'];
export type SiteSchema = components['schemas']['SiteSchema'];
export type SiteInputSchema = components['schemas']['SiteInputSchema'];
export type WhoAmIProfileSchema = components['schemas']['WhoAmIProfileSchema'];
export type WhoAmISchema = components['schemas']['WhoAmISchema'];
export type WhoAmIUserSchema = components['schemas']['WhoAmIUserSchema'];
export type TranslationFilterSchema = components['schemas']['TranslationFilterSchema'];
export type BreadIngredientMetaSchema = components['schemas']['BreadIngredientMetaSchema'];
export type BreadIngredientSchema = components['schemas']['BreadIngredientSchema'];
export type BreadTypeMetaSchema = components['schemas']['BreadTypeMetaSchema'];
export type BreadTypeSchema = components['schemas']['BreadTypeSchema'];
export type FooterTextMetaSchema = components['schemas']['FooterTextMetaSchema'];
export type FooterTextSchema = components['schemas']['FooterTextSchema'];
export type PagedAnnotated = components['schemas']['PagedAnnotated'];
export type PersonMetaSchema = components['schemas']['PersonMetaSchema'];
export type PersonSchema = components['schemas']['PersonSchema'];
export type BreadIngredientCreateMetaSchema = components['schemas']['BreadIngredientCreateMetaSchema'];
export type BreadIngredientCreateSchema = components['schemas']['BreadIngredientCreateSchema'];
export type BreadTypeCreateMetaSchema = components['schemas']['BreadTypeCreateMetaSchema'];
export type BreadTypeCreateSchema = components['schemas']['BreadTypeCreateSchema'];
export type FooterTextCreateMetaSchema = components['schemas']['FooterTextCreateMetaSchema'];
export type FooterTextCreateSchema = components['schemas']['FooterTextCreateSchema'];
export type PersonCreateMetaSchema = components['schemas']['PersonCreateMetaSchema'];
export type PersonCreateSchema = components['schemas']['PersonCreateSchema'];
export type BreadIngredientPatchMetaSchema = components['schemas']['BreadIngredientPatchMetaSchema'];
export type BreadIngredientPatchSchema = components['schemas']['BreadIngredientPatchSchema'];
export type BreadTypePatchMetaSchema = components['schemas']['BreadTypePatchMetaSchema'];
export type BreadTypePatchSchema = components['schemas']['BreadTypePatchSchema'];
export type FooterTextPatchMetaSchema = components['schemas']['FooterTextPatchMetaSchema'];
export type FooterTextPatchSchema = components['schemas']['FooterTextPatchSchema'];
export type PersonPatchMetaSchema = components['schemas']['PersonPatchMetaSchema'];
export type PersonPatchSchema = components['schemas']['PersonPatchSchema'];
export type SnippetRevisionDetailSchema = components['schemas']['SnippetRevisionDetailSchema'];
export type SnippetRevertSchema = components['schemas']['SnippetRevertSchema'];
export type SnippetCopyForTranslationSchema = components['schemas']['SnippetCopyForTranslationSchema'];
export type DocumentDetailMetaSchema = components['schemas']['DocumentDetailMetaSchema'];
export type DocumentSchema = components['schemas']['DocumentSchema'];
export type PagedDocumentSchema = components['schemas']['PagedDocumentSchema'];
export type DocumentCreateSchema = components['schemas']['DocumentCreateSchema'];
export type DocumentPatchSchema = components['schemas']['DocumentPatchSchema'];
export type ImageDetailMetaSchema = components['schemas']['ImageDetailMetaSchema'];
export type ImageSchema = components['schemas']['ImageSchema'];
export type PagedImageSchema = components['schemas']['PagedImageSchema'];
export type ImageCreateSchema = components['schemas']['ImageCreateSchema'];
export type ImagePatchSchema = components['schemas']['ImagePatchSchema'];
export type LocaleSchema = components['schemas']['LocaleSchema'];
export type PagedLocaleSchema = components['schemas']['PagedLocaleSchema'];
export type LocaleInputSchema = components['schemas']['LocaleInputSchema'];
export type PagedRedirectSchema = components['schemas']['PagedRedirectSchema'];
export type RedirectSchema = components['schemas']['RedirectSchema'];
export type RedirectInputSchema = components['schemas']['RedirectInputSchema'];
export type $defs = Record<string, never>;
export interface operations {
    pages_list: {
        parameters: {
            query?: {
                type?: ("wagtailcore.Page" | "base.StandardPage" | "base.HomePage" | "base.GalleryPage" | "base.FormPage" | "blog.BlogPage" | "blog.BlogIndexPage" | "breads.BreadPage" | "breads.BreadsIndexPage" | "locations.LocationsIndexPage" | "locations.LocationPage" | "recipes.RecipePage" | "recipes.RecipeIndexPage" | "people.PersonPage" | "people.PeopleIndexPage")[];
                ancestor_of?: number | null;
                child_of?: number | "root" | null;
                descendant_of?: number | "root" | null;
                translation_of?: number | "root" | null;
                locale?: string | null;
                site?: string | null;
                order?: "random" | string[];
                search?: string | null;
                search_operator?: ("and" | "or") | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PagedBasePageSchema"];
                };
            };
        };
    };
    pages_create: {
        parameters: {
            query?: {
                rich_text_format?: ("db_html" | "html" | "db_markdown" | "markdown") | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StandardPageCreateSchema"] | components["schemas"]["HomePageCreateSchema"] | components["schemas"]["GalleryPageCreateSchema"] | components["schemas"]["FormPageCreateSchema"] | components["schemas"]["BlogPageCreateSchema"] | components["schemas"]["BlogIndexPageCreateSchema"] | components["schemas"]["BreadPageCreateSchema"] | components["schemas"]["BreadsIndexPageCreateSchema"] | components["schemas"]["LocationsIndexPageCreateSchema"] | components["schemas"]["LocationPageCreateSchema"] | components["schemas"]["RecipePageCreateSchema"] | components["schemas"]["RecipeIndexPageCreateSchema"] | components["schemas"]["PersonPageCreateSchema"] | components["schemas"]["PeopleIndexPageCreateSchema"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageSchema"] | components["schemas"]["StandardPageSchema"] | components["schemas"]["HomePageSchema"] | components["schemas"]["GalleryPageSchema"] | components["schemas"]["FormPageSchema"] | components["schemas"]["BlogPageSchema"] | components["schemas"]["BlogIndexPageSchema"] | components["schemas"]["BreadPageSchema"] | components["schemas"]["BreadsIndexPageSchema"] | components["schemas"]["LocationsIndexPageSchema"] | components["schemas"]["LocationPageSchema"] | components["schemas"]["RecipePageSchema"] | components["schemas"]["RecipeIndexPageSchema"] | components["schemas"]["PersonPageSchema"] | components["schemas"]["PeopleIndexPageSchema"];
                };
            };
        };
    };
    pages_find: {
        parameters: {
            query?: {
                id?: number | null;
                html_path?: string | null;
                site?: string | null;
                version?: ("live" | "draft") | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageSchema"] | components["schemas"]["StandardPageSchema"] | components["schemas"]["HomePageSchema"] | components["schemas"]["GalleryPageSchema"] | components["schemas"]["FormPageSchema"] | components["schemas"]["BlogPageSchema"] | components["schemas"]["BlogIndexPageSchema"] | components["schemas"]["BreadPageSchema"] | components["schemas"]["BreadsIndexPageSchema"] | components["schemas"]["LocationsIndexPageSchema"] | components["schemas"]["LocationPageSchema"] | components["schemas"]["RecipePageSchema"] | components["schemas"]["RecipeIndexPageSchema"] | components["schemas"]["PersonPageSchema"] | components["schemas"]["PeopleIndexPageSchema"];
                };
            };
        };
    };
    pages_detail: {
        parameters: {
            query?: {
                version?: ("live" | "draft") | null;
                rich_text_format?: ("db_html" | "html" | "db_markdown" | "markdown") | null;
            };
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageSchema"] | components["schemas"]["StandardPageSchema"] | components["schemas"]["HomePageSchema"] | components["schemas"]["GalleryPageSchema"] | components["schemas"]["FormPageSchema"] | components["schemas"]["BlogPageSchema"] | components["schemas"]["BlogIndexPageSchema"] | components["schemas"]["BreadPageSchema"] | components["schemas"]["BreadsIndexPageSchema"] | components["schemas"]["LocationsIndexPageSchema"] | components["schemas"]["LocationPageSchema"] | components["schemas"]["RecipePageSchema"] | components["schemas"]["RecipeIndexPageSchema"] | components["schemas"]["PersonPageSchema"] | components["schemas"]["PeopleIndexPageSchema"];
                };
            };
        };
    };
    pages_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    pages_update: {
        parameters: {
            query?: {
                rich_text_format?: ("db_html" | "html" | "db_markdown" | "markdown") | null;
            };
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StandardPagePatchSchema"] | components["schemas"]["HomePagePatchSchema"] | components["schemas"]["GalleryPagePatchSchema"] | components["schemas"]["FormPagePatchSchema"] | components["schemas"]["BlogPagePatchSchema"] | components["schemas"]["BlogIndexPagePatchSchema"] | components["schemas"]["BreadPagePatchSchema"] | components["schemas"]["BreadsIndexPagePatchSchema"] | components["schemas"]["LocationsIndexPagePatchSchema"] | components["schemas"]["LocationPagePatchSchema"] | components["schemas"]["RecipePagePatchSchema"] | components["schemas"]["RecipeIndexPagePatchSchema"] | components["schemas"]["PersonPagePatchSchema"] | components["schemas"]["PeopleIndexPagePatchSchema"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageSchema"] | components["schemas"]["StandardPageSchema"] | components["schemas"]["HomePageSchema"] | components["schemas"]["GalleryPageSchema"] | components["schemas"]["FormPageSchema"] | components["schemas"]["BlogPageSchema"] | components["schemas"]["BlogIndexPageSchema"] | components["schemas"]["BreadPageSchema"] | components["schemas"]["BreadsIndexPageSchema"] | components["schemas"]["LocationsIndexPageSchema"] | components["schemas"]["LocationPageSchema"] | components["schemas"]["RecipePageSchema"] | components["schemas"]["RecipeIndexPageSchema"] | components["schemas"]["PersonPageSchema"] | components["schemas"]["PeopleIndexPageSchema"];
                };
            };
        };
    };
    pages_revisions_list: {
        parameters: {
            query?: {
                created_at_from?: string | null;
                created_at_to?: string | null;
                user_id?: number | string | null;
                approved_go_live_at_from?: string | null;
                approved_go_live_at_to?: string | null;
                object_str?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PagedRevisionSchema"];
                };
            };
        };
    };
    pages_revisions_detail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
                revision_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageRevisionDetailSchema"];
                };
            };
        };
    };
    pages_workflow_status: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkflowStatusSchema"];
                };
            };
        };
    };
    pages_workflow_history: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PagedWorkflowStateSchema"];
                };
            };
        };
    };
    pages_actions_publish: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageSchema"] | components["schemas"]["StandardPageSchema"] | components["schemas"]["HomePageSchema"] | components["schemas"]["GalleryPageSchema"] | components["schemas"]["FormPageSchema"] | components["schemas"]["BlogPageSchema"] | components["schemas"]["BlogIndexPageSchema"] | components["schemas"]["BreadPageSchema"] | components["schemas"]["BreadsIndexPageSchema"] | components["schemas"]["LocationsIndexPageSchema"] | components["schemas"]["LocationPageSchema"] | components["schemas"]["RecipePageSchema"] | components["schemas"]["RecipeIndexPageSchema"] | components["schemas"]["PersonPageSchema"] | components["schemas"]["PeopleIndexPageSchema"];
                };
            };
        };
    };
    pages_actions_unpublish: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PageUnpublishSchema"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageSchema"] | components["schemas"]["StandardPageSchema"] | components["schemas"]["HomePageSchema"] | components["schemas"]["GalleryPageSchema"] | components["schemas"]["FormPageSchema"] | components["schemas"]["BlogPageSchema"] | components["schemas"]["BlogIndexPageSchema"] | components["schemas"]["BreadPageSchema"] | components["schemas"]["BreadsIndexPageSchema"] | components["schemas"]["LocationsIndexPageSchema"] | components["schemas"]["LocationPageSchema"] | components["schemas"]["RecipePageSchema"] | components["schemas"]["RecipeIndexPageSchema"] | components["schemas"]["PersonPageSchema"] | components["schemas"]["PeopleIndexPageSchema"];
                };
            };
        };
    };
    pages_actions_copy: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PageCopySchema"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageSchema"] | components["schemas"]["StandardPageSchema"] | components["schemas"]["HomePageSchema"] | components["schemas"]["GalleryPageSchema"] | components["schemas"]["FormPageSchema"] | components["schemas"]["BlogPageSchema"] | components["schemas"]["BlogIndexPageSchema"] | components["schemas"]["BreadPageSchema"] | components["schemas"]["BreadsIndexPageSchema"] | components["schemas"]["LocationsIndexPageSchema"] | components["schemas"]["LocationPageSchema"] | components["schemas"]["RecipePageSchema"] | components["schemas"]["RecipeIndexPageSchema"] | components["schemas"]["PersonPageSchema"] | components["schemas"]["PeopleIndexPageSchema"];
                };
            };
        };
    };
    pages_actions_move: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PageMoveSchema"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageSchema"] | components["schemas"]["StandardPageSchema"] | components["schemas"]["HomePageSchema"] | components["schemas"]["GalleryPageSchema"] | components["schemas"]["FormPageSchema"] | components["schemas"]["BlogPageSchema"] | components["schemas"]["BlogIndexPageSchema"] | components["schemas"]["BreadPageSchema"] | components["schemas"]["BreadsIndexPageSchema"] | components["schemas"]["LocationsIndexPageSchema"] | components["schemas"]["LocationPageSchema"] | components["schemas"]["RecipePageSchema"] | components["schemas"]["RecipeIndexPageSchema"] | components["schemas"]["PersonPageSchema"] | components["schemas"]["PeopleIndexPageSchema"];
                };
            };
        };
    };
    pages_actions_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    pages_actions_revert: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PageRevertSchema"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageSchema"] | components["schemas"]["StandardPageSchema"] | components["schemas"]["HomePageSchema"] | components["schemas"]["GalleryPageSchema"] | components["schemas"]["FormPageSchema"] | components["schemas"]["BlogPageSchema"] | components["schemas"]["BlogIndexPageSchema"] | components["schemas"]["BreadPageSchema"] | components["schemas"]["BreadsIndexPageSchema"] | components["schemas"]["LocationsIndexPageSchema"] | components["schemas"]["LocationPageSchema"] | components["schemas"]["RecipePageSchema"] | components["schemas"]["RecipeIndexPageSchema"] | components["schemas"]["PersonPageSchema"] | components["schemas"]["PeopleIndexPageSchema"];
                };
            };
        };
    };
    pages_actions_convert_alias: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageSchema"] | components["schemas"]["StandardPageSchema"] | components["schemas"]["HomePageSchema"] | components["schemas"]["GalleryPageSchema"] | components["schemas"]["FormPageSchema"] | components["schemas"]["BlogPageSchema"] | components["schemas"]["BlogIndexPageSchema"] | components["schemas"]["BreadPageSchema"] | components["schemas"]["BreadsIndexPageSchema"] | components["schemas"]["LocationsIndexPageSchema"] | components["schemas"]["LocationPageSchema"] | components["schemas"]["RecipePageSchema"] | components["schemas"]["RecipeIndexPageSchema"] | components["schemas"]["PersonPageSchema"] | components["schemas"]["PeopleIndexPageSchema"];
                };
            };
        };
    };
    pages_actions_create_alias: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PageCreateAliasSchema"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageSchema"] | components["schemas"]["StandardPageSchema"] | components["schemas"]["HomePageSchema"] | components["schemas"]["GalleryPageSchema"] | components["schemas"]["FormPageSchema"] | components["schemas"]["BlogPageSchema"] | components["schemas"]["BlogIndexPageSchema"] | components["schemas"]["BreadPageSchema"] | components["schemas"]["BreadsIndexPageSchema"] | components["schemas"]["LocationsIndexPageSchema"] | components["schemas"]["LocationPageSchema"] | components["schemas"]["RecipePageSchema"] | components["schemas"]["RecipeIndexPageSchema"] | components["schemas"]["PersonPageSchema"] | components["schemas"]["PeopleIndexPageSchema"];
                };
            };
        };
    };
    pages_actions_copy_for_translation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PageCopyForTranslationSchema"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageSchema"] | components["schemas"]["StandardPageSchema"] | components["schemas"]["HomePageSchema"] | components["schemas"]["GalleryPageSchema"] | components["schemas"]["FormPageSchema"] | components["schemas"]["BlogPageSchema"] | components["schemas"]["BlogIndexPageSchema"] | components["schemas"]["BreadPageSchema"] | components["schemas"]["BreadsIndexPageSchema"] | components["schemas"]["LocationsIndexPageSchema"] | components["schemas"]["LocationPageSchema"] | components["schemas"]["RecipePageSchema"] | components["schemas"]["RecipeIndexPageSchema"] | components["schemas"]["PersonPageSchema"] | components["schemas"]["PeopleIndexPageSchema"];
                };
            };
        };
    };
    pages_actions_workflow_submit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkflowStatusSchema"];
                };
            };
        };
    };
    pages_actions_workflow_approve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["WorkflowTaskActionSchema"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkflowStatusSchema"];
                };
            };
        };
    };
    pages_actions_workflow_reject: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["WorkflowTaskActionSchema"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkflowStatusSchema"];
                };
            };
        };
    };
    pages_actions_workflow_resume: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkflowStatusSchema"];
                };
            };
        };
    };
    pages_actions_workflow_cancel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                page_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkflowStatusSchema"];
                };
            };
        };
    };
    schema_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContentTypeListSchema"];
                };
            };
        };
    };
    schema_detail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SchemaDetailResponse"];
                };
            };
        };
    };
    sites_list: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PagedSiteSchema"];
                };
            };
        };
    };
    sites_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SiteInputSchema"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SiteSchema"];
                };
            };
        };
    };
    sites_detail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                site_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SiteSchema"];
                };
            };
        };
    };
    sites_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                site_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SiteInputSchema"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SiteSchema"];
                };
            };
        };
    };
    sites_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                site_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    whoami: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WhoAmISchema"];
                };
            };
        };
    };
    snippets_list: {
        parameters: {
            query?: {
                locale?: string | null;
                translation_of?: string | null;
                order?: "random" | string[];
                search?: string | null;
                search_operator?: ("and" | "or") | null;
                rich_text_format?: ("db_html" | "html" | "db_markdown" | "markdown") | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path: {
                type: "breads.BreadIngredient" | "breads.BreadType" | "base.FooterText" | "base.Person";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PagedAnnotated"];
                };
            };
        };
    };
    snippets_create: {
        parameters: {
            query?: {
                rich_text_format?: ("db_html" | "html" | "db_markdown" | "markdown") | null;
            };
            header?: never;
            path: {
                type: "breads.BreadIngredient" | "breads.BreadType" | "base.FooterText" | "base.Person";
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BreadIngredientCreateSchema"] | components["schemas"]["BreadTypeCreateSchema"] | components["schemas"]["FooterTextCreateSchema"] | components["schemas"]["PersonCreateSchema"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BreadIngredientSchema"] | components["schemas"]["BreadTypeSchema"] | components["schemas"]["FooterTextSchema"] | components["schemas"]["PersonSchema"];
                };
            };
        };
    };
    snippets_detail: {
        parameters: {
            query?: {
                version?: "live" | "draft";
                rich_text_format?: ("db_html" | "html" | "db_markdown" | "markdown") | null;
            };
            header?: never;
            path: {
                type: "breads.BreadIngredient" | "breads.BreadType" | "base.FooterText" | "base.Person";
                pk: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BreadIngredientSchema"] | components["schemas"]["BreadTypeSchema"] | components["schemas"]["FooterTextSchema"] | components["schemas"]["PersonSchema"];
                };
            };
        };
    };
    snippets_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type: "breads.BreadIngredient" | "breads.BreadType" | "base.FooterText" | "base.Person";
                pk: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    snippets_update: {
        parameters: {
            query?: {
                rich_text_format?: ("db_html" | "html" | "db_markdown" | "markdown") | null;
            };
            header?: never;
            path: {
                type: "breads.BreadIngredient" | "breads.BreadType" | "base.FooterText" | "base.Person";
                pk: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BreadIngredientPatchSchema"] | components["schemas"]["BreadTypePatchSchema"] | components["schemas"]["FooterTextPatchSchema"] | components["schemas"]["PersonPatchSchema"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BreadIngredientSchema"] | components["schemas"]["BreadTypeSchema"] | components["schemas"]["FooterTextSchema"] | components["schemas"]["PersonSchema"];
                };
            };
        };
    };
    snippets_revisions_list: {
        parameters: {
            query?: {
                created_at_from?: string | null;
                created_at_to?: string | null;
                user_id?: number | string | null;
                approved_go_live_at_from?: string | null;
                approved_go_live_at_to?: string | null;
                object_str?: string | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path: {
                type: "breads.BreadIngredient" | "breads.BreadType" | "base.FooterText" | "base.Person";
                pk: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PagedRevisionSchema"];
                };
            };
        };
    };
    snippets_revisions_detail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type: "breads.BreadIngredient" | "breads.BreadType" | "base.FooterText" | "base.Person";
                pk: string;
                revision_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SnippetRevisionDetailSchema"];
                };
            };
        };
    };
    snippets_workflow_status: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type: "base.Person";
                pk: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkflowStatusSchema"];
                };
            };
        };
    };
    snippets_workflow_history: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path: {
                type: "base.Person";
                pk: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PagedWorkflowStateSchema"];
                };
            };
        };
    };
    snippets_actions_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type: "breads.BreadIngredient" | "breads.BreadType" | "base.FooterText" | "base.Person";
                pk: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    snippets_actions_publish: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type: "breads.BreadIngredient" | "base.FooterText" | "base.Person";
                pk: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BreadIngredientSchema"] | components["schemas"]["FooterTextSchema"] | components["schemas"]["PersonSchema"];
                };
            };
        };
    };
    snippets_actions_unpublish: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type: "breads.BreadIngredient" | "base.FooterText" | "base.Person";
                pk: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BreadIngredientSchema"] | components["schemas"]["FooterTextSchema"] | components["schemas"]["PersonSchema"];
                };
            };
        };
    };
    snippets_actions_revert: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type: "breads.BreadIngredient" | "breads.BreadType" | "base.FooterText" | "base.Person";
                pk: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SnippetRevertSchema"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BreadIngredientSchema"] | components["schemas"]["BreadTypeSchema"] | components["schemas"]["FooterTextSchema"] | components["schemas"]["PersonSchema"];
                };
            };
        };
    };
    snippets_actions_copy_for_translation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type: "base.FooterText";
                pk: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SnippetCopyForTranslationSchema"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FooterTextSchema"];
                };
            };
        };
    };
    snippets_actions_workflow_submit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type: "base.Person";
                pk: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkflowStatusSchema"];
                };
            };
        };
    };
    snippets_actions_workflow_approve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type: "base.Person";
                pk: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["WorkflowTaskActionSchema"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkflowStatusSchema"];
                };
            };
        };
    };
    snippets_actions_workflow_reject: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type: "base.Person";
                pk: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["WorkflowTaskActionSchema"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkflowStatusSchema"];
                };
            };
        };
    };
    snippets_actions_workflow_resume: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type: "base.Person";
                pk: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkflowStatusSchema"];
                };
            };
        };
    };
    snippets_actions_workflow_cancel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                type: "base.Person";
                pk: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkflowStatusSchema"];
                };
            };
        };
    };
    documents_list: {
        parameters: {
            query?: {
                order?: "random" | string[];
                search?: string | null;
                search_operator?: ("and" | "or") | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PagedDocumentSchema"];
                };
            };
        };
    };
    documents_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    /**
                     * File
                     * Format: binary
                     */
                    file: string;
                    /** Title */
                    title: string;
                    /** Collection */
                    collection_id?: number | null;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DocumentSchema"];
                };
            };
        };
    };
    documents_detail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                document_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DocumentSchema"];
                };
            };
        };
    };
    documents_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                document_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    documents_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                document_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DocumentPatchSchema"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DocumentSchema"];
                };
            };
        };
    };
    images_list: {
        parameters: {
            query?: {
                order?: "random" | string[];
                search?: string | null;
                search_operator?: ("and" | "or") | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PagedImageSchema"];
                };
            };
        };
    };
    images_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    /**
                     * File
                     * Format: binary
                     */
                    file: string;
                    /** Title */
                    title: string;
                    /**
                     * Description
                     * @default
                     */
                    description?: string | null;
                    /** Collection */
                    collection_id?: number | null;
                    /** Focal Point X */
                    focal_point_x?: number | null;
                    /** Focal Point Y */
                    focal_point_y?: number | null;
                    /** Focal Point Width */
                    focal_point_width?: number | null;
                    /** Focal Point Height */
                    focal_point_height?: number | null;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ImageSchema"];
                };
            };
        };
    };
    images_detail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                image_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ImageSchema"];
                };
            };
        };
    };
    images_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                image_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    images_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                image_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ImagePatchSchema"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ImageSchema"];
                };
            };
        };
    };
    locales_list: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PagedLocaleSchema"];
                };
            };
        };
    };
    locales_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LocaleInputSchema"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LocaleSchema"];
                };
            };
        };
    };
    locales_detail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                locale_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LocaleSchema"];
                };
            };
        };
    };
    locales_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                locale_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LocaleInputSchema"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LocaleSchema"];
                };
            };
        };
    };
    locales_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                locale_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    redirects_list: {
        parameters: {
            query?: {
                order?: "random" | string[];
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PagedRedirectSchema"];
                };
            };
        };
    };
    redirects_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RedirectInputSchema"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RedirectSchema"];
                };
            };
        };
    };
    redirects_find: {
        parameters: {
            query?: {
                id?: number | null;
                html_path?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RedirectSchema"];
                };
            };
        };
    };
    redirects_detail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                redirect_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RedirectSchema"];
                };
            };
        };
    };
    redirects_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                redirect_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RedirectInputSchema"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RedirectSchema"];
                };
            };
        };
    };
    redirects_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                redirect_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    preview_detail: {
        parameters: {
            query: {
                type: "wagtailcore.Page" | "base.StandardPage" | "base.HomePage" | "base.GalleryPage" | "base.FormPage" | "blog.BlogPage" | "blog.BlogIndexPage" | "breads.BreadPage" | "breads.BreadsIndexPage" | "locations.LocationsIndexPage" | "locations.LocationPage" | "recipes.RecipePage" | "recipes.RecipeIndexPage" | "people.PersonPage" | "people.PeopleIndexPage";
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageSchema"] | components["schemas"]["StandardPageSchema"] | components["schemas"]["HomePageSchema"] | components["schemas"]["GalleryPageSchema"] | components["schemas"]["FormPageSchema"] | components["schemas"]["BlogPageSchema"] | components["schemas"]["BlogIndexPageSchema"] | components["schemas"]["BreadPageSchema"] | components["schemas"]["BreadsIndexPageSchema"] | components["schemas"]["LocationsIndexPageSchema"] | components["schemas"]["LocationPageSchema"] | components["schemas"]["RecipePageSchema"] | components["schemas"]["RecipeIndexPageSchema"] | components["schemas"]["PersonPageSchema"] | components["schemas"]["PeopleIndexPageSchema"];
                };
            };
        };
    };
    listing_pages: {
        parameters: {
            query?: {
                type?: ("wagtailcore.Page" | "base.StandardPage" | "base.HomePage" | "base.GalleryPage" | "base.FormPage" | "blog.BlogPage" | "blog.BlogIndexPage" | "breads.BreadPage" | "breads.BreadsIndexPage" | "locations.LocationsIndexPage" | "locations.LocationPage" | "recipes.RecipePage" | "recipes.RecipeIndexPage" | "people.PersonPage" | "people.PeopleIndexPage")[];
                ancestor_of?: number | null;
                child_of?: number | "root" | null;
                descendant_of?: number | "root" | null;
                translation_of?: number | "root" | null;
                locale?: string | null;
                site?: string | null;
                order?: "random" | string[];
                search?: string | null;
                search_operator?: ("and" | "or") | null;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PagedAnnotated"];
                };
            };
        };
    };
}
