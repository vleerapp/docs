import { generateFiles } from "fumadocs-openapi";
import { openmusicmetadata } from "./openapi";

await generateFiles({
  input: openmusicmetadata,
  output: "./content/openmusicmetadata/endpoints",
  includeDescription: true,
});
