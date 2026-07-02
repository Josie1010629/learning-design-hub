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
import jungleBoard from "@/assets/jungle-math/board-comparison.png.asset.json";
import jungleUI from "@/assets/jungle-math/game-ui.jpg.asset.json";
import jungleDemo from "@/assets/jungle-math/demo.mov.asset.json";
import ftSlide1 from "@/assets/feeltogether/slide-1.jpg.asset.json";
import ftSlide2 from "@/assets/feeltogether/slide-2.jpg.asset.json";
import ftSlide3 from "@/assets/feeltogether/slide-3.jpg.asset.json";
import ftSlide4 from "@/assets/feeltogether/slide-4.jpg.asset.json";
import ftSlide5 from "@/assets/feeltogether/slide-5.jpg.asset.json";
import ftSlide6 from "@/assets/feeltogether/slide-6.jpg.asset.json";
import ftSlide7 from "@/assets/feeltogether/slide-7.jpg.asset.json";
import ftSlide8 from "@/assets/feeltogether/slide-8.jpg.asset.json";
import ftSlide9 from "@/assets/feeltogether/slide-9.jpg.asset.json";
import ftSlide10 from "@/assets/feeltogether/slide-10.jpg.asset.json";
import ftSlide11 from "@/assets/feeltogether/slide-11.jpg.asset.json";
import ftSlide12 from "@/assets/feeltogether/slide-12.jpg.asset.json";
import ftSlide13 from "@/assets/feeltogether/slide-13.jpg.asset.json";
import ftSlide14 from "@/assets/feeltogether/slide-14.jpg.asset.json";
import ftSlide15 from "@/assets/feeltogether/slide-15.jpg.asset.json";
import ftSlide16 from "@/assets/feeltogether/slide-16.jpg.asset.json";
import ftSlide17 from "@/assets/feeltogether/slide-17.jpg.asset.json";
import ftSlide18 from "@/assets/feeltogether/slide-18.jpg.asset.json";
import ftSlide19 from "@/assets/feeltogether/slide-19.jpg.asset.json";
import ftDemo from "@/assets/feeltogether/demo.mp4.asset.json";
import cpSlide1 from "@/assets/copal/slide-01.jpg.asset.json";
import cpSlide2 from "@/assets/copal/slide-02.jpg.asset.json";
import cpSlide3 from "@/assets/copal/slide-03.jpg.asset.json";
import cpSlide4 from "@/assets/copal/slide-04.jpg.asset.json";
import cpSlide5 from "@/assets/copal/slide-05.jpg.asset.json";
import cpSlide6 from "@/assets/copal/slide-06.jpg.asset.json";
import cpSlide7 from "@/assets/copal/slide-07.jpg.asset.json";
import cpSlide8 from "@/assets/copal/slide-08.jpg.asset.json";
import cpSlide9 from "@/assets/copal/slide-09.jpg.asset.json";
import cpSlide10 from "@/assets/copal/slide-10.jpg.asset.json";
import cpSlide11 from "@/assets/copal/slide-11.jpg.asset.json";
import cpSlide12 from "@/assets/copal/slide-12.jpg.asset.json";
import cpSlide13 from "@/assets/copal/slide-13.jpg.asset.json";
import cpSlide14 from "@/assets/copal/slide-14.jpg.asset.json";
import cpSlide15 from "@/assets/copal/slide-15.jpg.asset.json";
import cpSlide16 from "@/assets/copal/slide-16.jpg.asset.json";
import cpSlide17 from "@/assets/copal/slide-17.jpg.asset.json";
import cpSlide18 from "@/assets/copal/slide-18.jpg.asset.json";
import appEvalPoster from "@/assets/app-evaluation/slide-1.jpg.asset.json";
import appEvalRubric1 from "@/assets/app-evaluation/rubric-1.png.asset.json";
import appEvalRubric2 from "@/assets/app-evaluation/rubric-2.png.asset.json";
import appEvalRubric3 from "@/assets/app-evaluation/rubric-3.png.asset.json";
import appEvalRubric4 from "@/assets/app-evaluation/rubric-4.png.asset.json";
import cy01 from "@/assets/cyark/page-01.jpg.asset.json";
import cy02 from "@/assets/cyark/page-02.jpg.asset.json";
import cy03 from "@/assets/cyark/page-03.jpg.asset.json";
import cy04 from "@/assets/cyark/page-04.jpg.asset.json";
import cy05 from "@/assets/cyark/page-05.jpg.asset.json";
import cy06 from "@/assets/cyark/page-06.jpg.asset.json";
import cy07 from "@/assets/cyark/page-07.jpg.asset.json";
import cy08 from "@/assets/cyark/page-08.jpg.asset.json";
import cy09 from "@/assets/cyark/page-09.jpg.asset.json";
import cy10 from "@/assets/cyark/page-10.jpg.asset.json";
import cy11 from "@/assets/cyark/page-11.jpg.asset.json";
import cy12 from "@/assets/cyark/page-12.jpg.asset.json";
import cy13 from "@/assets/cyark/page-13.jpg.asset.json";
import cy14 from "@/assets/cyark/page-14.jpg.asset.json";
import cy15 from "@/assets/cyark/page-15.jpg.asset.json";
import cy16 from "@/assets/cyark/page-16.jpg.asset.json";
import cy17 from "@/assets/cyark/page-17.jpg.asset.json";
import cy18 from "@/assets/cyark/page-18.jpg.asset.json";
import cy19 from "@/assets/cyark/page-19.jpg.asset.json";
import cy20 from "@/assets/cyark/page-20.jpg.asset.json";
import cy21 from "@/assets/cyark/page-21.jpg.asset.json";
import cy22 from "@/assets/cyark/page-22.jpg.asset.json";
import cy23 from "@/assets/cyark/page-23.jpg.asset.json";
import cy24 from "@/assets/cyark/page-24.jpg.asset.json";
import cy25 from "@/assets/cyark/page-25.jpg.asset.json";
import cy26 from "@/assets/cyark/page-26.jpg.asset.json";
import cy27 from "@/assets/cyark/page-27.jpg.asset.json";
import cy28 from "@/assets/cyark/page-28.jpg.asset.json";
import cy29 from "@/assets/cyark/page-29.jpg.asset.json";
import cy30 from "@/assets/cyark/page-30.jpg.asset.json";
import cy31 from "@/assets/cyark/page-31.jpg.asset.json";
import cy32 from "@/assets/cyark/page-32.jpg.asset.json";
import cy33 from "@/assets/cyark/page-33.jpg.asset.json";
import cy34 from "@/assets/cyark/page-34.jpg.asset.json";
import cy35 from "@/assets/cyark/page-35.jpg.asset.json";
import cy36 from "@/assets/cyark/page-36.jpg.asset.json";
import cy37 from "@/assets/cyark/page-37.jpg.asset.json";
import cy38 from "@/assets/cyark/page-38.jpg.asset.json";
import cy39 from "@/assets/cyark/page-39.jpg.asset.json";
import cy40 from "@/assets/cyark/page-40.jpg.asset.json";
import cy41 from "@/assets/cyark/page-41.jpg.asset.json";
import cy42 from "@/assets/cyark/page-42.jpg.asset.json";
import cy43 from "@/assets/cyark/page-43.jpg.asset.json";
import cy44 from "@/assets/cyark/page-44.jpg.asset.json";
import cy45 from "@/assets/cyark/page-45.jpg.asset.json";
import cy46 from "@/assets/cyark/page-46.jpg.asset.json";
import cy47 from "@/assets/cyark/page-47.jpg.asset.json";
import cy48 from "@/assets/cyark/page-48.jpg.asset.json";
import cy49 from "@/assets/cyark/page-49.jpg.asset.json";
import cy50 from "@/assets/cyark/page-50.jpg.asset.json";
import cy51 from "@/assets/cyark/page-51.jpg.asset.json";
import cy52 from "@/assets/cyark/page-52.jpg.asset.json";
import cy53 from "@/assets/cyark/page-53.jpg.asset.json";
import cy54 from "@/assets/cyark/page-54.jpg.asset.json";
import cy55 from "@/assets/cyark/page-55.jpg.asset.json";
import cy56 from "@/assets/cyark/page-56.jpg.asset.json";
import cy57 from "@/assets/cyark/page-57.jpg.asset.json";
import cy58 from "@/assets/cyark/page-58.jpg.asset.json";
import cy59 from "@/assets/cyark/page-59.jpg.asset.json";
import cy60 from "@/assets/cyark/page-60.jpg.asset.json";
import cy61 from "@/assets/cyark/page-61.jpg.asset.json";
import cy62 from "@/assets/cyark/page-62.jpg.asset.json";
import cy63 from "@/assets/cyark/page-63.jpg.asset.json";
import cy64 from "@/assets/cyark/page-64.jpg.asset.json";
import cy65 from "@/assets/cyark/page-65.jpg.asset.json";
import cy66 from "@/assets/cyark/page-66.jpg.asset.json";
import cy67 from "@/assets/cyark/page-67.jpg.asset.json";
import cy68 from "@/assets/cyark/page-68.jpg.asset.json";
import cy69 from "@/assets/cyark/page-69.jpg.asset.json";
import cy70 from "@/assets/cyark/page-70.jpg.asset.json";
import cy71 from "@/assets/cyark/page-71.jpg.asset.json";
import cy72 from "@/assets/cyark/page-72.jpg.asset.json";
import cy73 from "@/assets/cyark/page-73.jpg.asset.json";
import cy74 from "@/assets/cyark/page-74.jpg.asset.json";
import cy75 from "@/assets/cyark/page-75.jpg.asset.json";
import cy76 from "@/assets/cyark/page-76.jpg.asset.json";
import cy77 from "@/assets/cyark/page-77.jpg.asset.json";
import cy78 from "@/assets/cyark/page-78.jpg.asset.json";
import cy79 from "@/assets/cyark/page-79.jpg.asset.json";
import cy80 from "@/assets/cyark/page-80.jpg.asset.json";
import ag01 from "@/assets/agoda/page-01.jpg.asset.json";
import ag02 from "@/assets/agoda/page-02.jpg.asset.json";
import ag03 from "@/assets/agoda/page-03.jpg.asset.json";
import ag04 from "@/assets/agoda/page-04.jpg.asset.json";
import ag05 from "@/assets/agoda/page-05.jpg.asset.json";
import ag06 from "@/assets/agoda/page-06.jpg.asset.json";
import ag07 from "@/assets/agoda/page-07.jpg.asset.json";
import ag08 from "@/assets/agoda/page-08.jpg.asset.json";
import ag09 from "@/assets/agoda/page-09.jpg.asset.json";
import ag10 from "@/assets/agoda/page-10.jpg.asset.json";
import ag11 from "@/assets/agoda/page-11.jpg.asset.json";
import ag12 from "@/assets/agoda/page-12.jpg.asset.json";
import ag13 from "@/assets/agoda/page-13.jpg.asset.json";
import ag14 from "@/assets/agoda/page-14.jpg.asset.json";
import ag15 from "@/assets/agoda/page-15.jpg.asset.json";
import ag16 from "@/assets/agoda/page-16.jpg.asset.json";

const cyarkPages = [cy01, cy02, cy03, cy04, cy05, cy06, cy07, cy08, cy09, cy10, cy11, cy12, cy13, cy14, cy15, cy16, cy17, cy18, cy19, cy20, cy21, cy22, cy23, cy24, cy25, cy26, cy27, cy28, cy29, cy30, cy31, cy32, cy33, cy34, cy35, cy36, cy37, cy38, cy39, cy40, cy41, cy42, cy43, cy44, cy45, cy46, cy47, cy48, cy49, cy50, cy51, cy52, cy53, cy54, cy55, cy56, cy57, cy58, cy59, cy60, cy61, cy62, cy63, cy64, cy65, cy66, cy67, cy68, cy69, cy70, cy71, cy72, cy73, cy74, cy75, cy76, cy77, cy78, cy79, cy80].map((s, i) => ({ url: s.url, label: `Page ${i + 1}` }));
const agodaPages = [ag01, ag02, ag03, ag04, ag05, ag06, ag07, ag08, ag09, ag10, ag11, ag12, ag13, ag14, ag15, ag16].map((s, i) => ({ url: s.url, label: `Page ${i + 1}` }));


const appEvalRubricPages = [appEvalRubric1, appEvalRubric2, appEvalRubric3, appEvalRubric4].map(
  (s, i) => ({ url: s.url, label: `Rubric page ${i + 1}` }),
);

const textbookPages = [
  { url: page1.url, label: "Page 1" },
  { url: page2.url, label: "Page 2" },
  { url: page3.url, label: "Page 3" },
  { url: page4.url, label: "Page 4" },
  { url: page5.url, label: "Page 5" },
];

const jungleImages = [
  { url: jungleBoard.url, label: "Original chess board → Redesigned math learning tool" },
  { url: jungleUI.url, label: "Animal Math Jungle — digital prototype UI" },
];

const feeltogetherSlides = [
  ftSlide1, ftSlide2, ftSlide3, ftSlide4, ftSlide5, ftSlide6, ftSlide7,
  ftSlide8, ftSlide9, ftSlide10, ftSlide11, ftSlide12, ftSlide13,
  ftSlide14, ftSlide15, ftSlide16, ftSlide17, ftSlide18, ftSlide19,
].map((s, i) => ({ url: s.url, label: `Slide ${i + 1}` }));

const copalSlides = [
  cpSlide1, cpSlide2, cpSlide3, cpSlide4, cpSlide5, cpSlide6, cpSlide7, cpSlide8, cpSlide9,
  cpSlide10, cpSlide11, cpSlide12, cpSlide13, cpSlide14, cpSlide15, cpSlide16, cpSlide17, cpSlide18,
].map((s, i) => ({ url: s.url, label: `Slide ${i + 1}` }));






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
            ) : project.slug === "jungle-math-chess" ? (
              <Block id="screenshots" title="Screenshots & Demo">
                <p className="text-sm text-muted-foreground">
                  Board redesign artifacts and a demo of the AI-assisted play prototype.
                </p>

                <div className="mt-5 overflow-hidden rounded-xl border border-border bg-surface/60 shadow-sm">
                  <div className="max-h-[70vh] overflow-y-auto md:max-h-[560px]">
                    <div className="flex flex-col gap-6 p-4 md:p-6">
                      {jungleImages.map((img, i) => (
                        <figure key={i} className="overflow-hidden rounded-md border border-border bg-white">
                          <img
                            src={img.url}
                            alt={`Jungle Math Chess — ${img.label}`}
                            loading="lazy"
                            className="block h-auto w-full"
                          />
                          <figcaption className="border-t border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
                            {img.label}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </div>

                <figure className="mt-6 overflow-hidden rounded-xl border border-border bg-black shadow-sm">
                  <video
                    src={jungleDemo.url}
                    controls
                    playsInline
                    preload="metadata"
                    className="block h-auto w-full"
                  />
                  <figcaption className="border-t border-border bg-card px-3 py-2 text-xs text-muted-foreground">
                    Play-with-AI prototype demo
                  </figcaption>
                </figure>
              </Block>
            ) : project.slug === "feeltogether" ? (
              <Block id="screenshots" title="Screenshots & Demo">
                <p className="text-sm text-muted-foreground">
                  Selected screens from the Feeltogether prototype and a walkthrough demo.
                </p>

                <div className="mt-5 overflow-hidden rounded-xl border border-border bg-surface/60 shadow-sm">
                  <div className="max-h-[70vh] overflow-y-auto md:max-h-[640px]">
                    <div className="flex flex-col gap-6 p-4 md:p-6">
                      {feeltogetherSlides.map((s, i) => (
                        <figure key={i} className="overflow-hidden rounded-md border border-border bg-white">
                          <img
                            src={s.url}
                            alt={`Feeltogether — ${s.label}`}
                            loading="lazy"
                            className="block h-auto w-full"
                          />
                          <figcaption className="border-t border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
                            {s.label}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </div>

                <figure className="mt-6 overflow-hidden rounded-xl border border-border bg-black shadow-sm">
                  <video
                    src={ftDemo.url}
                    controls
                    playsInline
                    preload="metadata"
                    className="block h-auto w-full"
                  />
                  <figcaption className="border-t border-border bg-card px-3 py-2 text-xs text-muted-foreground">
                    Feeltogether prototype demo
                  </figcaption>
                </figure>
              </Block>
            ) : project.slug === "co-pal" ? (
              <Block id="screenshots" title="Screenshots & Demo">
                <p className="text-sm text-muted-foreground">
                  Selected slides from the Co-Pal system design deck.
                </p>
                <div className="mt-5 overflow-hidden rounded-xl border border-border bg-surface/60 shadow-sm">
                  <div className="max-h-[70vh] overflow-y-auto md:max-h-[640px]">
                    <div className="flex flex-col gap-6 p-4 md:p-6">
                      {copalSlides.map((s, i) => (
                        <figure key={i} className="overflow-hidden rounded-md border border-border bg-white">
                          <img
                            src={s.url}
                            alt={`Co-Pal — ${s.label}`}
                            loading="lazy"
                            className="block h-auto w-full"
                          />
                          <figcaption className="border-t border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
                            {s.label}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </div>
              </Block>
            ) : project.slug === "app-evaluation-tool" ? (
              <Block id="screenshots" title="Screenshots & Demo">
                <p className="text-sm text-muted-foreground">
                  Poster presented at the London International Conference on Inclusive Education, followed by the evaluation rubric.
                </p>
                <figure className="mt-5 overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                  <img
                    src={appEvalPoster.url}
                    alt="App Evaluation Tool — LICIE conference poster"
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                  <figcaption className="border-t border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
                    LICIE Conference Poster
                  </figcaption>
                </figure>

                <div className="mt-6 overflow-hidden rounded-xl border border-border bg-surface/60 shadow-sm">
                  <div className="max-h-[70vh] overflow-y-auto md:max-h-[640px]">
                    <div className="flex flex-col gap-6 p-4 md:p-6">
                      {appEvalRubricPages.map((p, i) => (
                        <figure key={i} className="overflow-hidden rounded-md border border-border bg-white">
                          <img
                            src={p.url}
                            alt={`App Evaluation Tool — ${p.label}`}
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
            ) : project.slug === "cyark-formative-evaluation" ? (
              <Block id="screenshots" title="Final Report">
                <p className="text-sm text-muted-foreground">
                  Full CyArk Tapestry formative evaluation report.
                </p>
                <div className="mt-5 overflow-hidden rounded-xl border border-border bg-surface/60 shadow-sm">
                  <div className="max-h-[70vh] overflow-y-auto md:max-h-[640px]">
                    <div className="flex flex-col gap-6 p-4 md:p-6">
                      {cyarkPages.map((p, i) => (
                        <figure key={i} className="overflow-hidden rounded-md border border-border bg-white">
                          <img
                            src={p.url}
                            alt={`CyArk report — ${p.label}`}
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
            ) : project.slug === "agoda-cx-research" ? (
              <Block id="screenshots" title="Final Report">
                <p className="text-sm text-muted-foreground">
                  Full Agoda CX research report.
                </p>
                <div className="mt-5 overflow-hidden rounded-xl border border-border bg-surface/60 shadow-sm">
                  <div className="max-h-[70vh] overflow-y-auto md:max-h-[640px]">
                    <div className="flex flex-col gap-6 p-4 md:p-6">
                      {agodaPages.map((p, i) => (
                        <figure key={i} className="overflow-hidden rounded-md border border-border bg-white">
                          <img
                            src={p.url}
                            alt={`Agoda report — ${p.label}`}
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
