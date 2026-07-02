import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, Phone, ChevronDown } from "lucide-react";
import portraitAsset from "@/assets/portrait.jpeg.asset.json";
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

const ABOUT_TAGS = ["Learning Experience Design", "AI-Empowered Learning", "Data-Informed Evaluation"];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="container-narrow pt-14 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="font-serif text-[1.25rem] font-medium italic text-muted-foreground md:text-[1.5rem]">
              Hello, I'm
            </p>
            <h1 className="mt-2 font-serif text-[2.25rem] leading-[1.1] tracking-tight text-foreground sm:text-[2.6rem] md:text-[3rem]">
              Liangjie Jin
            </h1>

            <p className="mt-7 max-w-[580px] font-serif text-[1.375rem] font-normal leading-[1.5] text-foreground/85 sm:text-[1.5rem] md:max-w-[640px] md:text-[1.75rem] lg:text-[1.875rem]">
              I am a learning designer, researcher, and innovator{" "}
              <br className="hidden sm:block" />
              using AI-empowered design to create engaging, inclusive, and evidence-based learning experiences.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-[400px]">
              {/* soft green circular frame */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-full bg-[color:var(--color-sage)] shadow-[0_28px_70px_-36px_rgba(23,63,53,0.35)]"
              />
              {/* circular portrait embedded in the green ring */}
              <div className="absolute inset-[22px] overflow-hidden rounded-full border-[3px] border-background/90 sm:inset-[28px] md:inset-[30px]">
                <img
                  src={portraitAsset.url}
                  alt="Portrait of Liangjie Jin"
                  className="block h-full w-full object-cover object-[center_22%]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* refined divider */}
        <div className="mt-20 flex items-center gap-4">
          <span className="h-px flex-1 bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
          <span className="h-px flex-1 bg-border" />
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="bg-surface/60 py-20 md:py-28">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">About</p>
            <h2 className="mt-3 font-serif text-[1.75rem] text-foreground md:text-[2rem]">About Me</h2>
            <p className="mt-7 text-[1.0625rem] leading-[1.8] text-foreground/85">
              I am a Learning Designer who creates learner-centered experiences grounded in learning science, user needs, and emerging technology. My work includes interactive learning products, curriculum materials, AI-supported learning experiences, and evaluation frameworks. Across projects, I focus on making complex ideas clear, inclusive, and engaging through thoughtful design, meaningful practice, and effective feedback.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {ABOUT_TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[color:var(--color-sage)] bg-card px-3 py-1 text-xs font-medium text-[color:var(--color-deep)]"
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
            <h2 className="mt-3 font-serif text-[1.75rem] text-foreground md:text-[2rem]">Projects</h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.75] text-muted-foreground">
              Explore selected work across learning design, curriculum development, interactive learning products, and evaluation research.
            </p>
            <div className="mt-8">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-[color:var(--color-deep)]"
              >
                View Projects <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="bg-surface py-20 md:py-28">
        <div className="container-narrow grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Education</p>
            <h2 className="mt-3 font-serif text-[1.75rem] text-foreground md:text-[2rem]">Where I trained</h2>
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
              <div
                key={e.school}
                className="flex flex-col gap-1 border-b border-border pb-6 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div>
                  <h3 className="font-serif text-[1.05rem] text-foreground">{e.school}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.degree}</p>
                </div>
                <span className="text-sm font-medium text-primary sm:whitespace-nowrap">{e.years}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <SkillsSection />

      {/* CONTACT */}
      <section id="contact" className="bg-[color:var(--color-sage)] py-20 md:py-28">

        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 font-serif text-[1.75rem] text-foreground md:text-[2rem]">
              Let's build learning that works.
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.75] text-muted-foreground">
              I'm open to roles and collaborations in learning design, instructional design, and learning research.
            </p>

            <div className="mt-8 flex flex-col items-center gap-6">
              <a
                href="mailto:jinliangjie002@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-[color:var(--color-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <Mail size={16} /> Email Me
              </a>

              <div className="inline-flex flex-col gap-0 rounded-xl border border-[color:var(--color-sage)] bg-card p-1.5 shadow-sm">
                <a
                  href="mailto:jinliangjie002@gmail.com"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition hover:bg-surface"
                >
                  <Mail size={16} className="shrink-0 text-primary" />
                  <span className="font-medium text-foreground">jinliangjie002@gmail.com</span>
                </a>
                <span className="mx-4 h-px bg-[color:var(--color-sage)]" />
                <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm">
                  <Phone size={16} className="shrink-0 text-primary" />
                  <span className="font-medium text-foreground">617-685-1473</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
