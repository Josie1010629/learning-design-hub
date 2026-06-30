import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import portraitAsset from "@/assets/portrait.jpeg.asset.json";
import { skillCategories } from "@/lib/portfolio-data";
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

const POSITIONING = ["Learning Designer", "Instructional Designer", "AI-Empowered Learning"];
const ABOUT_TAGS = ["Learning Science", "AI-Empowered Learning", "Evaluation & Research"];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="container-narrow pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <div className="flex flex-wrap gap-2">
              {POSITIONING.map((l) => (
                <span
                  key={l}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {l}
                </span>
              ))}
            </div>

            <h1 className="mt-6 font-serif text-[1.75rem] leading-[1.2] tracking-tight text-foreground sm:text-[2rem] md:text-[2.25rem] md:leading-[1.18]">
              I am a learning designer, researcher, and innovator using AI-empowered design to create engaging, inclusive, and evidence-based learning experiences.
            </h1>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-foreground/30"
              >
                <Download size={16} /> Resume
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-[320px]">
              <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_20px_60px_-30px_rgba(31,41,51,0.25)]">
                <img
                  src={portraitAsset.url}
                  alt="Portrait of Liangjie Jin"
                  className="block aspect-[4/5] w-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="border-t border-border bg-surface/40 py-20 md:py-28">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">About</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-[2rem]">About Me</h2>
            <p className="mt-8 text-[1.0625rem] leading-relaxed text-foreground/85">
              I am a Learning Designer with a background in Learning Design, Innovation, Technology, and Psychology with Education. My work bridges learning science, user needs, and emerging technology to create clear, inclusive, and evidence-based learning experiences. Across curriculum design, interactive learning products, AI-supported experiences, and evaluation frameworks, I focus on designing meaningful opportunities for practice, feedback, and growth.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {ABOUT_TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS ENTRY */}
      <section id="projects" className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Selected Work</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-[2rem]">Projects</h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              Explore selected work across learning design, curriculum development, interactive learning products, and evaluation research.
            </p>
            <div className="mt-8">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                View Projects <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-border bg-surface/40 py-20 md:py-28">
        <div className="container-narrow">
          <header className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Capabilities</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-[2rem]">Skills</h2>
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

      {/* EDUCATION */}
      <section id="education" className="py-20 md:py-28">
        <div className="container-narrow grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Education</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-[2rem]">Where I trained</h2>
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
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-[2rem]">
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
