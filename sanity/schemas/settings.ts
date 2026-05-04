import { defineType, defineField } from "sanity";

export default defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "Site title", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "email", title: "Contact email", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "object",
      fields: [
        { name: "twitter", title: "Twitter / X URL", type: "url" },
        { name: "linkedin", title: "LinkedIn URL", type: "url" },
        { name: "instagram", title: "Instagram URL", type: "url" },
      ],
    }),
    defineField({
      name: "seo",
      title: "Default SEO",
      type: "object",
      fields: [
        { name: "title", title: "Meta title", type: "string" },
        { name: "description", title: "Meta description", type: "text" },
        { name: "ogImage", title: "OG image", type: "image" },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
