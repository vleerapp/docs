import { createOpenAPI } from "fumadocs-openapi/server";

export const openapiServer = createOpenAPI({
  input: ["./public/openmusicmetadata.yml"],
});
