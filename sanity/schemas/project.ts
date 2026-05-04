import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Case Study / Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["E-commerce", "B2B SaaS", "DTC Brand", "Local Services", "Fashion", "Fintech", "Other"] } }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "excerpt", title: "Short excerpt", type: "text", rows: 2 }),
    defineField({ name: "image", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "metrics",
      title: "Key metrics",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "k", title: "Metric label", type: "string" },
          { name: "v", title: "Metric value", type: "string" },
        ],
      }],
    }),
    defineField({ name: "challenge", title: "The challenge", type: "text", rows: 4 }),
    defineField({ name: "solution", title: "What we did", type: "text", rows: 4 }),
    defineField({ name: "body", title: "Full case study body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "featured", title: "Featured on homepage", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Sort order", type: "number" }),
  ],
  orderings: [{ title: "Sort order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", media: "image", subtitle: "category" } },
});
