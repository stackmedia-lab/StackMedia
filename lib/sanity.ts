import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export const urlFor = (src: SanityImageSource) =>
  builder ? builder.image(src) : { url: () => "" };

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  fallback: T
): Promise<T> {
  if (!sanityClient) return fallback;
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (err) {
    console.error("Sanity fetch error:", err);
    return fallback;
  }
}
