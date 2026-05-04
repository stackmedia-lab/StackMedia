import { defineType, defineField } from "sanity";

export default defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "date", title: "Published date", type: "datetime" }),
    defineField({ name: "author", title: "Author name", type: "string" }),
    defineField({ name: "readTime", title: "Read time (e.g. \"7 min\")", type: "string" }),
    defineField({ name: "excerpt", title: "Short excerpt", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({ name: "body", title: "Article body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "featured", title: "Featured article", type: "boolean", initialValue: false }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Paid Media", "SEO", "Creative", "Strategy", "Case Study", "Platform Updates"] },
    }),
  ],
  preview: { select: { title: "title", media: "image", subtitle: "author" } },
});
