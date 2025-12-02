# Apex Concrete Construction - Copilot Instructions

## Project Overview

Next.js 16 (App Router) marketing website for a concrete construction company. Uses TypeScript, React 19, Tailwind CSS 3.x, shadcn/ui components, and Framer Motion animations.

## Architecture

### Directory Structure

- `app/` - Next.js App Router pages and API routes
- `components/` - Page sections (`hero-section.tsx`, `navigation.tsx`) and shadcn/ui primitives in `ui/`
- `lib/utils.ts` - Contains `cn()` helper for merging Tailwind classes
- `hooks/` - Custom React hooks (e.g., `use-toast.ts`)

### Key Patterns

**Component Organization:**

- Page-level components (sections) live in `components/` root
- Reusable UI primitives in `components/ui/` (shadcn/ui)
- Pages compose sections: `Navigation` → content sections → `Footer`

**Styling Approach:**

```tsx
// Always use cn() from @/lib/utils for conditional classes
import { cn } from '@/lib/utils';
<div className={cn('base-classes', conditional && 'conditional-class')} />;
```

**Animation Pattern:**

```tsx
// Use Framer Motion with react-intersection-observer for scroll animations
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
/>;
```

**Client Components:**

- Mark interactive components with `'use client'` directive
- Keep server components as default where possible

## Import Aliases

Use `@/` prefix for all imports:

```tsx
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Navigation from '@/components/navigation';
```

## Form Handling

Contact forms use react-hook-form + zod validation:

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  /* ... */
});
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: zodResolver(schema),
});
```

## API Routes

- Located in `app/api/` using Next.js Route Handlers
- Contact form sends emails via Resend (`RESEND_API_KEY` env var required)
- Validate with zod, return `NextResponse.json()`

## Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

Components are added to `components/ui/` with proper aliases configured in `components.json`.

## Development Commands

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run lint   # ESLint check
```

## Design Tokens

Colors use CSS variables defined in `app/globals.css`. Reference semantic tokens:

- `bg-primary`, `text-primary-foreground` for brand colors
- `bg-muted`, `text-muted-foreground` for subdued elements
- Dark mode supported via `.dark` class (configured but not actively used)

## Image Handling

- Static images in `public/` (referenced as `/image.png`)
- External images from Pexels allowed via Next.js config
- Use native `<img>` for external URLs, `next/image` for local optimized images
