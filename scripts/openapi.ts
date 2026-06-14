import { createOpenAPI } from "fumadocs-openapi/server";

export const openapiServer = createOpenAPI({
  input: ["./public/openmusic.yml", "./public/openmusicmetadata.yml"],
});
