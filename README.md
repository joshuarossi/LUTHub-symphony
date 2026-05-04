# LUTHub Symphony

React + Vite SPA scaffold for LUTHub Symphony with Tailwind CSS,
ShadCN/UI-compatible component structure, Vitest, and Convex starter wiring.

## Scripts

- `npm install` installs the scaffold dependencies.
- `npm run dev` starts the Vite development server.
- `npm test -- --run` runs the Vitest suite once.
- `npm run typecheck` runs the TypeScript project references.
- `npm run build` type-checks and builds the app.
- `npm run convex:dev` starts Convex local development after a deployment is
  configured.

## Convex

Set `VITE_CONVEX_URL` when a Convex deployment is available. Without that
environment variable, the app renders normally and skips creating a Convex
client so local UI validation does not require secrets.
