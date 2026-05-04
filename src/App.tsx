import { DatabaseZap, Layers3, Rocket, TestTube2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const foundations = [
  {
    title: "React + Vite",
    detail: "Typed SPA shell with fast local development and production builds.",
    Icon: Rocket,
    tone: "text-emerald-700 bg-emerald-50 ring-emerald-200",
  },
  {
    title: "ShadCN/UI + Tailwind",
    detail: "Token-based styling, utility classes, aliases, and reusable UI primitives.",
    Icon: Layers3,
    tone: "text-sky-700 bg-sky-50 ring-sky-200",
  },
  {
    title: "Vitest",
    detail: "Testing Library setup with jsdom and a starter home-route test.",
    Icon: TestTube2,
    tone: "text-amber-700 bg-amber-50 ring-amber-200",
  },
  {
    title: "Convex ready",
    detail: "Optional client provider and starter server query scaffolded for backend work.",
    Icon: DatabaseZap,
    tone: "text-rose-700 bg-rose-50 ring-rose-200",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-8 sm:px-8 lg:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b pb-5">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Project scaffold
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-normal sm:text-4xl">
              LUTHub Symphony
            </h1>
          </div>
          <Button asChild>
            <a
              href="https://docs.convex.dev/quickstart/react"
              rel="noreferrer"
              target="_blank"
            >
              <DatabaseZap aria-hidden="true" />
              Convex Docs
            </a>
          </Button>
        </header>

        <div className="grid flex-1 items-center gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              A clean React application foundation is in place with typed
              routing-ready structure, reusable UI primitives, test coverage,
              and backend hooks ready for Convex development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <a
                  href="https://vite.dev/guide/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Rocket aria-hidden="true" />
                  Vite Guide
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://ui.shadcn.com/docs"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Layers3 aria-hidden="true" />
                  UI Docs
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {foundations.map(({ title, detail, Icon, tone }) => (
              <article
                className="rounded-lg border bg-card p-5 text-card-foreground shadow-sm"
                key={title}
              >
                <div
                  className={`mb-4 flex size-10 items-center justify-center rounded-md ring-1 ${tone}`}
                >
                  <Icon aria-hidden="true" className="size-5" />
                </div>
                <h2 className="text-base font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
