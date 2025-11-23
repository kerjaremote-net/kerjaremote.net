import { defineCollection, z } from 'astro:content';

const panduanCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().default('KerjaRemote Team'),
        image: z.string().optional(),
        category: z.string(),
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    'panduan': panduanCollection,
};
