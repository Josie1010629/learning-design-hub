import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Thumbnail } from "@/components/Thumbnail";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import page1 from "@/assets/textbook-pages/page-1.png.asset.json";
import page2 from "@/assets/textbook-pages/page-2.png.asset.json";
import page3 from "@/assets/textbook-pages/page-3.png.asset.json";
import page4 from "@/assets/textbook-pages/page-4.png.asset.json";
import page5 from "@/assets/textbook-pages/page-5.png.asset.json";

const textbookPages = [
  { url: page1.url, label: "Page 1" },
  { url: page2.url, label: "Page 2" },
  { url: page3.url, label: "Page 3" },
  { url: page4.url, label: "Page 4" },
  { url: page5.url, label: "Page 5" },
];




export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.project.title} — Liangjie Jin` : "Case Study" },
      { name: "description", content: loaderData?.project.short ?? "" },
      { property: "og:title", content: loaderData?.project.title ?? "Case Study" },
      { property: "og:description", content: loaderData?.project.short ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="container-narrow py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-serif text-3xl">Case study not found</h1>
      <Link to="/" className="mt-6 inline-block text-primary">Back to home</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-narrow py-24 text-center">
      <h1 className="font-serif text-2xl">Something went wrong</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-6 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Try again</button>
    </div>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { project } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <article className="container-narrow pb-20 pt-12 md:pt-16">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        {/* Header */}
        <header className="mt-8 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">{project.type}</p>
          <h1 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">{project.title}</h1>
          <p className="mt-4 text-[1.0625rem] text-muted-foreground">{project.short}</p>
        </header>

        {/* Cover */}
        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card p-6 md:p-10">
          <div className="mx-auto max-w-3xl">
            {project.cover ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-surface">
                <img
                  src={project.cover.url}
                  alt={`${project.title} cover`}
                  className={`h-full w-full ${project.cover.fit === "contain" ? "object-contain p-2" : "object-cover"}`}
                />
              </div>
            ) : (
              <Thumbnail kind={project.thumb} label={project.title} />
            )}
          </div>
        </div>


        {/* Snapshot */}
        <section className="mt-12 rounded-xl border border-border bg-surface/60 p-6 md:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary">Project Snapshot</h2>
          <dl className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2 md:grid-cols-3">
            {[
              ["Project Type", project.type],
              ["Audience / Users", project.snapshot.audience],
              ["My Role", project.role],
              ["Timeline", project.snapshot.timeline],
              ["Tools Used", project.snapshot.tools.join(", ")],
              ["Deliverable", project.snapshot.deliverable],
            ].map(([k, v]) => (
              <div key={k as string}>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
                <dd className="mt-1.5 text-sm text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Body */}
        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-3">
            <nav className="sticky top-24 hidden flex-col gap-2 text-sm md:flex">
              {["Overview", "My Role", "Goal", "Process", "Decisions", "Result"].map((s) => (
                <a key={s} href={`#${s.toLowerCase().replace(/\s+/g, "-")}`} className="text-muted-foreground hover:text-primary">
                  {s}
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-12 md:col-span-9">
            <Block id="overview" title="Overview"><p>{project.overview}</p></Block>
            <Block id="my-role" title="My Role"><p>{project.myRole}</p></Block>
            <Block id="goal" title="Goal"><p>{project.goal}</p></Block>

            <Block id="process" title="Process">
              <ol className="space-y-3">
                {project.process.map((step: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-foreground/85">{step}</span>
                  </li>
                ))}
              </ol>
            </Block>

            <Block id="decisions" title="Key Design Decisions">
              <ul className="list-disc space-y-2 pl-5 text-foreground/85 marker:text-primary">
                {project.decisions.map((d: string, i: number) => <li key={i}>{d}</li>)}
              </ul>
            </Block>

            <Block id="result" title="Result">
              <ul className="list-disc space-y-2 pl-5 text-foreground/85 marker:text-primary">
                {project.result.map((r: string, i: number) => <li key={i}>{r}</li>)}
              </ul>
            </Block>

            {project.slug === "grade-4-math-curriculum" ? (
              <Block id="screenshots" title="Textbook Page Preview">
                <p className="text-sm text-muted-foreground">
                  Selected pages from the Grade 4 math textbook design are shown below in a scrollable preview.
                </p>
                <div className="mt-5 overflow-hidden rounded-xl border border-border bg-surface/60 shadow-sm">
                  <div className="max-h-[70vh] overflow-y-auto md:max-h-[640px]">
                    <div className="flex flex-col gap-6 p-4 md:p-6">
                      {textbookPages.map((p, i) => (
                        <figure key={i} className="overflow-hidden rounded-md border border-border bg-white">
                          <img
                            src={p.url}
                            alt={`Grade 4 math textbook ${p.label}`}
                            loading="lazy"
                            className="block h-auto w-full"
                          />
                          <figcaption className="border-t border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
                            {p.label}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </div>
              </Block>
            ) : (
              <Block id="screenshots" title="Screenshots & Demo">
                <p className="text-sm text-muted-foreground">Selected artifacts from the project.</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Thumbnail kind={project.thumb} label={`${project.title} artifact 1`} />
                  <Thumbnail kind={project.thumb} label={`${project.title} artifact 2`} />
                </div>
              </Block>
            )}

          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-foreground/30"
          >
            <ArrowLeft size={15} /> Back to Projects
          </Link>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-serif text-2xl text-foreground">{title}</h2>
      <div className="mt-4 text-[0.975rem] leading-relaxed text-foreground/85">{children}</div>
    </section>
  );
}
