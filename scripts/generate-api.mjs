/**
 * Fetch the Wagtail API v3 OpenAPI schema and generate TypeScript types from it.
 *
 * Both files are committed, so the app can be type-checked without a running
 * Wagtail backend. Rerun this whenever the backend's API changes.
 */
import { writeFile } from 'node:fs/promises';
import openapiTS, { astToString } from 'openapi-typescript';

const apiHost =
  process.env.NEXT_PUBLIC_WAGTAIL_API_HOST || 'http://localhost:8000';
const schemaUrl = `${apiHost}/api/v3-preview/openapi.json`;
const outDir = new URL('../lib/generated/', import.meta.url);

const response = await fetch(schemaUrl);
if (!response.ok) {
  throw new Error(`Failed to fetch ${schemaUrl}: ${response.status}`);
}
const schema = await response.json();

await writeFile(
  new URL('openapi.json', outDir),
  `${JSON.stringify(schema, null, 2)}\n`,
);

const ast = await openapiTS(schema, {
  rootTypes: true,
  rootTypesNoSchemaPrefix: true,
});
await writeFile(new URL('schema.ts', outDir), astToString(ast));

console.log(`Generated lib/generated/schema.ts from ${schemaUrl}`);
