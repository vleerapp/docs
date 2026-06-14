import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import type { OperationItem, WebhookItem } from "fumadocs-openapi/ui";
import { OpenAPIPage } from "@/src/components/openapi-page";
import { openapiServer } from "@/scripts/openapi";

interface APIPageProps {
  document: string;
  operations?: OperationItem[];
  webhooks?: WebhookItem[];
  showTitle?: boolean;
  showDescription?: boolean;
}

async function APIPage({ document, ...props }: APIPageProps) {
  const schema = await openapiServer.getSchema(document);
  return <OpenAPIPage payload={{ bundled: schema.bundled }} {...props} />;
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    APIPage,
    ...components,
  };
}
