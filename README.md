# yo-iwamoto/my-next-template

My personal boilerplate for Next.js.

# Stack

- Next.js
  - App Router
  - logging.fetches.fullUrl: true
  - ignore eslint, typescript error on build
  - experimental: typedRoutes, turbo
  - Docker (based on official example)
- Biome
- Storybook 8
- Vitest
- shadcn/ui
- Tailwind CSS
- Prisma
- CI

# Setup

```zsh
nodenv install --skip-existing && \
  corepack enable && \
  corepack prepare --activate && \
  nodenv rehash
```
