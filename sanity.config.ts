import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "portfolio-site",

  projectId: "i3gg53z6",
  dataset: "production",
  basePath: "/studio",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
