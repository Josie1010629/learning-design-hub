import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import portraitAsset from "@/assets/portrait.jpeg.asset.json";
import { projects, skillCategories } from "@/lib/portfolio-data";
import { Thumbnail } from "@/components/Thumbnail";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Liangjie Jin — Learning Designer & Instructional Designer" },
      { name: "description", content: "Portfolio of Liangjie Jin — designing AI-empowered, evidence-based learning experiences across curriculum, products, and evaluation research." },
      { property: "og:title", content: "Liangjie Jin — Learning Designer" },
      { property: "og:description", content: "AI-empowered learning design, curriculum, and evaluation research." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const learning = projects.filter((p) => p.category === "Learning Design");
  const research = projects.filter((p) => p.category === "Evaluation & Research");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="container-narrow pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="flex flex-wrap gap-2">
              {["Learning Designer", "Instructional Designer", "AI-Empowered Learning"].map((l) => (
                <span
                  key={l}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {l}
                </span>
              ))}
            </div>

            <h1 className="mt-6 font-serif text-[2rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.5rem] md:text-[2.75rem]">
              Designing AI-empowered learning experiences grounded in research and learner needs.
            </h1>

            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-[1.0625rem]">
              I create clear, engaging, and evidence-based learning experiences across curriculum design,
              interactive products, and evaluation research.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-foreground/30"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-[340px]">
              <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_20px_60px_-30px_rgba(31,41,51,0.25)]">
                <img
                  src={portraitAsset.url}
                  alt="Portrait of Liangjie Jin"
                  className="block aspect-[4/5] w-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-3 -left-3 hidden h-16 w-16 rounded-md border border-border bg-card/80 backdrop-blur md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-border bg-surface/40 py-20 md:py-28">
        <div className="container-narrow">
          <header className="max-w-2xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">Projects</h2>
          </header>

          <div className="mt-14">
            <CategoryHeader
              title="Learning Design"
              description="Designing structured, engaging, and evidence-based learning experiences across curriculum, games, apps, and support systems."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {learning.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
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
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 md:py-28">
        <div className="container-narrow">
          <header className="max-w-2xl">
            <p className="eyebrow">Capabilities</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">Skills</h2>
          </header>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {skillCategories.map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-card p-7">
                <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-surface px-3 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border bg-surface/40 py-20 md:py-28">
        <div className="container-narrow grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">About</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">A few words</h2>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-foreground/85">
              I am a Learning Designer with a background in Learning Design, Innovation, Technology, and
              Psychology with Education. My work focuses on designing clear, inclusive, and evidence-based
              learning experiences — including interactive learning products, curriculum materials,
              AI-supported learning experiences, and evaluation frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-20 md:py-28">
        <div className="container-narrow grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Education</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">Where I trained</h2>
          </div>
          <div className="md:col-span-8 space-y-6">
            {[
              {
                school: "Harvard Graduate School of Education",
                degree: "Master of Education, Learning Design, Innovation, and Technology",
                years: "2025–2026",
              },
              {
                school: "University College London",
                degree: "Bachelor of Science, Psychology with Education",
                years: "2022–2025",
              },
            ].map((e) => (
              <div key={e.school} className="flex flex-col gap-1 border-b border-border pb-6 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <h3 className="text-base font-semibold text-foreground">{e.school}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.degree}</p>
                </div>
                <span className="text-sm text-muted-foreground sm:whitespace-nowrap">{e.years}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border bg-surface/40 py-20 md:py-28">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
              Let's talk about learning.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Open to learning design, instructional design, and learning research opportunities.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:jinliangjie002@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                <Mail size={16} /> Email Me
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} /> Cambridge, Massachusetts
              </div>
            </div>
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
      <h3 className="font-serif text-2xl text-foreground">{title}</h3>
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
        <h4 className="mt-2 font-serif text-xl text-foreground">{project.title}</h4>
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
