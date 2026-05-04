import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "icon", title: "Icon (emoji)", type: "string" }),
    defineField({ name: "eyebrow", title: "Eyebrow label", type: "string" }),
    defineField({ name: "excerpt", title: "Short excerpt", type: "text", rows: 2 }),
    defineField({ name: "intro", title: "Full intro paragraph", type: "text", rows: 4 }),
    defineField({ name: "hero", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "capabilities",
      title: "Capabilities list",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "deliverables",
      title: "Deliverables",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "title", title: "Title", type: "string" },
          { name: "desc", title: "Description", type: "text" },
        ],
      }],
    }),
    defineField({
      name: "process",
      title: "Process steps",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "n", title: "Step number (e.g. 01)", type: "string" },
          { name: "t", title: "Step title", type: "string" },
          { name: "d", title: "Step description", type: "text" },
        ],
      }],
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "q", title: "Question", type: "string" },
          { name: "a", title: "Answer", type: "text" },
        ],
      }],
    }),
    defineField({ name: "order", title: "Sort order", type: "number" }),
  ],
  preview: { select: { title: "title", subtitle: "eyebrow" } },
});
