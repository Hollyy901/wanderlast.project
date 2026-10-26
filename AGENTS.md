# wanderlast

Travel landing page ("Wanderlast"), built from the design files in `b14-wanderlust-resources/`. Single Next.js app (App Router), no monorepo, no CI, no tests, no env vars required.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

- Package manager: **npm** (package-lock.json only). Don't touch lockfile versions by hand.
- `npm run dev` — dev server (Turbopack)
- `npm run lint` — ESLint only (Next 16 no longer lints during build)
- `npm run build` — also runs TypeScript check; use it to verify types
- `npx tsc --noEmit` — quick typecheck without a full build
- There are no tests. Verify changes with `npm run lint` + `npm run build`.

## Toolchain quirks (break from defaults)

- **Next 16.4.3 + React 19.3 with `reactCompiler: true`** (babel-plugin-react-compiler in `next.config.ts`). Do NOT add manual `useMemo`/`memo`/`useCallback`; the compiler handles memoization.
- **`cacheComponents: true`** — fetching dynamic data requires Suspense boundaries; cash APIs (`use cache`, etc.) differ from old `revalidate` conventions. Follow `node_modules/next/dist/docs/`.
- **Tailwind v4, CSS-first**: no `tailwind.config`. Theme tokens live in the `@theme inline` block of `src/app/globals.css`; dark mode uses `@custom-variant dark`.
- **shadcn, style `base-nova`**: configured in `components.json`. Add components with the shadcn CLI (`npx shadcn@latest add <name>`); don't hand-write `src/components/ui/*` — they're generated from a custom registry. Non-standard components exist here (bubble, trace, questionnaire, code-block).
- `cn` is re-exported from the `cn` npm package in `src/lib/utils.ts` — not clsx + tailwind-merge.
- Path alias: `@/*` → `./src/*`.
- Font: Josefin Sans via `next/font` in `src/app/layout.tsx`.

## Gotchas

- Generated `src/hooks/*` / `src/components/ui/*` currently trigger `react-hooks/set-state-in-effect` lint errors (`use-mobile.ts`, `carousel.tsx`) and `next build` succeeds despite them. Don't "fix" generated components to make lint pass unless asked.
- Layouts/pages use the new typed-prop convention: `LayoutProps<"/">` / `PageProps<"/">` — not the old inline props.
- `next build` prints a warning about ignoring a stray `package-lock.json` in `C:\Users\ASUS` (outside the repo). Harmless; set `turbopack.root` only if the inferenceRoot noise matters.
- `.next/types/**` and `.next/dev/types/**` are generated route types included in `tsconfig.json`; run `npm run dev`/`build` to regenerate before typechecking after route changes.

## Structure

- `src/app/` — routes (currently just `page.tsx`). This is where feature work goes.
- `src/components/ui/` — generated shadcn/base-nova components (70+ files).
- `b14-wanderlust-resources/` — design reference: Figma/Penpot files + exported PNGs in `assets/`. **It is a separate nested git repo, untracked by this repo; never commit it.** Editable design source of truth used to build `public/images/` (already copied over).
