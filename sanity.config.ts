import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "stack-media",
  title: "Stack Media CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem().title("Settings").id("settings").child(
              S.document().schemaType("settings").documentId("settings")
            ),
            S.divider(),
            S.listItem().title("Case Studies").schemaType("project").child(
              S.documentTypeList("project").title("Case Studies")
            ),
            S.listItem().title("Blog Posts").schemaType("post").child(
              S.documentTypeList("post").title("Blog Posts")
            ),
            S.listItem().title("Services").schemaType("service").child(
              S.documentTypeList("service").title("Services")
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
