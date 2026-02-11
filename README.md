# Valentine's Site

A Next.js valentine card — "Will you be my Valentine?" with a growing Yes button and a shrinking No button.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
```

Exports static HTML to `out/`.

## Deploy

Pushes to `main` deploy via GitHub Actions to GitHub Pages. Ensure **Settings → Pages → Source** is set to **GitHub Actions**.

**To serve at root (`/`):** Deploy this repo’s contents to a `username.github.io` user-site repo. A project repo like `valentines-site` will always be at `username.github.io/valentines-site/`.
