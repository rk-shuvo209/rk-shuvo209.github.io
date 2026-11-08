import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    pubDate: z.coerce.date().optional(),
    excerpt: z.string().optional(),
    tag: z.string().optional(),
    gradient: z.string().optional(),
  }),
});

export const collections = { posts };
