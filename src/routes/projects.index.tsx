import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Thumbnail } from "@/components/Thumbnail";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Liangjie Jin" },
      { name: "description", content: "Selected work across learning design, curriculum, interactive learning products, and evaluation research." },
      { property: "og:title", content: "Projects — Liangjie Jin" },
      { property: "og:description", content: "Selected learning design and evaluation research projects." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const learning = projects.filter((p) => p.category === "Learning Design");
  const research = projects.filter((p) => p.category === "Evaluation & Research");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="container-narrow pt-14 pb-12 md:pt-20">
        <p className="eyebrow">Selected Work</p>
        <h1 className="mt-3 font-serif text-3xl text-foreground md:text-[2.25rem]">Projects</h1>
        <p className="mt-4 max-w-2xl text-[1.0625rem] text-muted-foreground">
          Selected work across learning design, curriculum development, interactive learning products, and evaluation research.
        </p>
      </section>

      <section className="container-narrow pb-20 md:pb-28">
        <CategoryHeader
          title="Learning Design"
          description="Designing structured, engaging, and evidence-based learning experiences across curriculum, games, apps, and support systems."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {learning.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>

        <div className="mt-20">
          <CategoryHeader
            title="Evaluation & Research"
            description="Using research methods, evaluation frameworks, and data analysis to understand learner needs, assess product quality, and translate insights into actionable design recommendations."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {research.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function CategoryHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-3 border-l-2 border-primary/70 pl-5 md:max-w-3xl">
      <h2 className="font-serif text-2xl text-foreground">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-foreground/20">
      <div className="p-5 pb-0">
        <Thumbnail kind={project.thumb} label={project.title} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-accent">{project.type}</p>
        <h3 className="mt-2 font-serif text-xl text-foreground">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.short}</p>

        <dl className="mt-4 space-y-1.5 text-xs">
          <div className="flex gap-2">
            <dt className="w-12 shrink-0 text-muted-foreground">Role</dt>
            <dd className="text-foreground/80">{project.role}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-12 shrink-0 text-muted-foreground">Skills</dt>
            <dd className="text-foreground/80">{project.skills.join(" · ")}</dd>
          </div>
        </dl>

        <div className="mt-6">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition group-hover:gap-2.5"
          >
            View Case Study <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
