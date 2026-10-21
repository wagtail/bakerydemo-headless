# Wagtail Bakery Demo - Next.js Frontend

This is a headless version of [Wagtail's bakerydemo](https://github.com/wagtail/bakerydemo), built with [Next.js](https://nextjs.org) and Wagtail API v3. It demonstrates how to use Wagtail as a headless CMS with a modern React-based frontend.

## Prerequisites

This site serves as a good demonstration of Wagtail’s built-in support for headless architectures. It requires running a copy of the [Wagtail bakerydemo](https://github.com/wagtail/bakerydemo) backend, switching to its [headless-v3 branch](https://github.com/wagtail/bakerydemo/tree/headless-v3) which changes the site from serving content via HTML templates and an API to API-only mode.

## Getting Started

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Configure your environment variables:

```bash
cp .env.example .env.local
```

Update `.env.local` with your Wagtail backend URL.

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Server-side rendering of Wagtail pages
- Dynamic routing based on Wagtail page types
- Support for:
  - Blog posts
  - Bread types
  - Locations
  - Recipes
  - Gallery
- Pagination for listings
- Image optimization using Next.js Image component
- Type-safe API client generated from Wagtail's OpenAPI schema
- [Wagtail user bar](./headless-userbar.md)

## Project Structure

- `components/pages/` - Page type components that correspond to Wagtail page models
- `lib/api.ts` - API client, built with [openapi-fetch](https://openapi-ts.dev/openapi-fetch/)
- `lib/wagtail.ts` - Types and helpers for data from the Wagtail API
- `lib/generated/` - Wagtail's OpenAPI schema and the TypeScript types generated from it

## Generating the API types

The API client's types are generated from the backend's OpenAPI schema with [openapi-typescript](https://openapi-ts.dev/). Both the schema and the generated types are committed, so the app can be type-checked without a running backend. Whenever the backend's API changes, regenerate them with the backend running:

```bash
npm run generate-api
```

## Contributing

While we're not actively seeking contributions, feel free to raise issues or submit pull requests for feedback. This is an experimental project meant to demonstrate the capabilities of Wagtail as a headless CMS with Next.js.

## Learn More

- [Wagtail Documentation](https://docs.wagtail.org/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Wagtail API v3 Reference](https://docs.wagtail.org/en/latest/advanced_topics/api/v3/index.html)

## License

This project is open source and available under the [BSD 3-Clause License](LICENSE).
