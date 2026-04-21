// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const sections = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "src/content/sections" }),
    schema: z.object({
        title: z.string(),
        order: z.number(),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { sections };