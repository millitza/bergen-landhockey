import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/*
  SECTION SCHEMA
  ─────────────────────────────────────────────────────────────────
  Required fields (every section must have these):
    title       The section heading
    label       Small text shown above the heading (e.g. "About the club")
    order       Controls the display order on the page (1, 2, 3 …)
    body        Main paragraph text. Either a single string or a list of paragraphs.

  Optional fields (add any you need):
    anchor      URL fragment used by navigation links (e.g. "about" → #about).
                Defaults to a slug of the title.
    theme       "dark" (default) or "light" — controls the section background.
    navLabel    Label shown in the top navigation bar. Defaults to title.
    navCta      Set to true on the section the "Join Us" nav button should link to.

    stats       List of metric cards shown below the body text.
                  Each item needs: value (e.g. "#1") and label (e.g. "Club in Vestland")

    tagsTitle   Heading shown above the tags row.
    tags        List of tag chips.
                  Each item needs: text and style ("filled", "accent", or "outline")

    items       List of cards shown after stats and tags. Three card styles are available:
                  • Image card  — provide: image (path) and optionally alt + url
                  • Price card  — provide: amount (e.g. "150 NOK"), title, description
                  • Icon card   — provide: icon (emoji), title, description
                  • Plain card  — provide: title and/or description

    cta         A button shown at the bottom of the section.
                  Needs: label (button text) and url (destination)
  ─────────────────────────────────────────────────────────────────
*/
const sections = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/sections' }),
    schema: z.object({
        title:    z.string(),
        label:    z.string(),
        order:    z.number(),
        body:     z.union([z.string(), z.array(z.string())]),

        anchor:   z.string().optional(),
        theme:    z.enum(['dark', 'light']).default('dark'),
        navLabel: z.string().optional(),
        navCta:   z.boolean().optional(),

        stats: z.array(z.object({
            value: z.string(),
            label: z.string(),
        })).optional(),

        tagsTitle: z.string().optional(),
        tags: z.array(z.object({
            text:  z.string(),
            style: z.enum(['filled', 'accent', 'outline']).default('outline'),
        })).optional(),

        items: z.array(z.object({
            title:       z.string().optional(),
            description: z.string().optional(),
            amount:      z.string().optional(),
            icon:        z.string().optional(),
            image:       z.string().optional(),
            alt:         z.string().optional(),
            url:         z.string().optional(),
        })).optional(),

        cta: z.object({
            label: z.string(),
            url:   z.string(),
        }).optional(),
    }),
});

export const collections = { sections };
