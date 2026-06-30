import type { ThumbKind } from "@/lib/portfolio-data";

// Restrained, artifact-style SVG thumbnails — no portraits, no stock photos.
export function Thumbnail({ kind, label }: { kind: ThumbKind; label: string }) {
  return (
    <div
      role="img"
      aria-label={`${label} preview`}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-surface"
    >
      <div className="absolute inset-0 p-5">{renderArtifact(kind)}</div>
      <div className="absolute left-4 top-4 rounded-sm bg-card/90 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
        {artifactLabel(kind)}
      </div>
    </div>
  );
}

function artifactLabel(kind: ThumbKind) {
  switch (kind) {
    case "curriculum": return "Textbook spread";
    case "game": return "Game board";
    case "mobile": return "App flow";
    case "system": return "System map";
    case "rubric": return "Evaluation rubric";
    case "usability": return "Findings board";
    case "journey": return "Journey map";
  }
}

function renderArtifact(kind: ThumbKind) {
  switch (kind) {
    case "curriculum":
      return (
        <div className="grid h-full grid-cols-2 gap-3">
          {[0, 1].map((i) => (
            <div key={i} className="flex flex-col rounded-sm bg-card p-3 shadow-sm">
              <div className="mb-2 h-1.5 w-12 rounded-full bg-primary/70" />
              <div className="mb-2 h-2 w-3/4 rounded-full bg-foreground/80" />
              <div className="mb-3 h-1 w-2/3 rounded-full bg-muted-foreground/50" />
              <div className="grid flex-1 grid-cols-2 gap-1.5">
                <div className="rounded-sm bg-surface" />
                <div className="space-y-1">
                  <div className="h-1 rounded-full bg-muted-foreground/40" />
                  <div className="h-1 rounded-full bg-muted-foreground/40" />
                  <div className="h-1 w-3/4 rounded-full bg-muted-foreground/40" />
                  <div className="mt-2 h-3 w-10 rounded-sm bg-warm/60" />
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    case "game":
      return (
        <div className="grid h-full grid-cols-6 grid-rows-5 gap-1 rounded-sm bg-card p-2">
          {Array.from({ length: 30 }).map((_, i) => {
            const dark = (Math.floor(i / 6) + i) % 2 === 0;
            const piece = [7, 10, 16, 22].includes(i);
            return (
              <div key={i} className={`relative rounded-[2px] ${dark ? "bg-surface" : "bg-muted/60"}`}>
                {piece && (
                  <div className="absolute inset-1 rounded-full bg-primary/80" />
                )}
              </div>
            );
          })}
        </div>
      );
    case "mobile":
      return (
        <div className="flex h-full items-center justify-center gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex h-full w-1/4 flex-col rounded-md border border-border bg-card p-2 shadow-sm">
              <div className="mx-auto mb-2 h-1 w-6 rounded-full bg-muted-foreground/40" />
              <div className="mb-1.5 h-1.5 w-3/4 rounded-full bg-foreground/70" />
              <div className="mb-2 h-1 w-1/2 rounded-full bg-muted-foreground/40" />
              <div className="flex-1 rounded-sm bg-surface" />
              <div className="mt-2 h-3 w-full rounded-sm bg-primary/80" />
            </div>
          ))}
        </div>
      );
    case "system":
      return (
        <svg viewBox="0 0 200 150" className="h-full w-full">
          <g fill="none" stroke="currentColor" className="text-muted-foreground/50" strokeWidth="1">
            <path d="M40 75 C 70 30, 130 30, 160 75" />
            <path d="M160 75 C 130 120, 70 120, 40 75" />
            <line x1="100" y1="30" x2="100" y2="120" strokeDasharray="2 3" />
          </g>
          {[
            [40, 75], [100, 30], [160, 75], [100, 120], [100, 75],
          ].map(([x, y], i) => (
            <g key={i}>
              <rect x={x - 18} y={y - 10} width="36" height="20" rx="3" className="fill-card stroke-border" strokeWidth="1" />
              <rect x={x - 12} y={y - 5} width="14" height="2" className="fill-foreground/70" />
              <rect x={x - 12} y={y - 1} width="20" height="1.5" className="fill-muted-foreground/50" />
            </g>
          ))}
        </svg>
      );
    case "rubric":
      return (
        <div className="flex h-full flex-col gap-1.5 rounded-sm bg-card p-3">
          <div className="mb-1 flex gap-2 border-b border-border pb-1.5">
            <div className="h-1.5 flex-1 rounded-full bg-foreground/70" />
            {[0, 1, 2, 3].map((i) => <div key={i} className="h-1.5 w-6 rounded-full bg-muted-foreground/40" />)}
          </div>
          {Array.from({ length: 6 }).map((_, r) => (
            <div key={r} className="flex items-center gap-2">
              <div className="h-1 flex-1 rounded-full bg-muted-foreground/30" />
              {[0, 1, 2, 3].map((c) => (
                <div
                  key={c}
                  className={`h-3 w-6 rounded-sm ${c === (r % 4) ? "bg-primary/80" : "bg-surface"}`}
                />
              ))}
            </div>
          ))}
        </div>
      );
    case "usability":
      return (
        <div className="grid h-full grid-cols-3 grid-rows-2 gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col rounded-sm border border-border bg-card p-2">
              <div className={`mb-1 h-1.5 w-8 rounded-full ${i % 3 === 0 ? "bg-warm/80" : "bg-accent/70"}`} />
              <div className="h-1 w-full rounded-full bg-muted-foreground/30" />
              <div className="mt-1 h-1 w-3/4 rounded-full bg-muted-foreground/30" />
              <div className="mt-auto flex gap-1">
                <div className="h-1 w-4 rounded-full bg-primary/70" />
                <div className="h-1 w-3 rounded-full bg-muted-foreground/30" />
              </div>
            </div>
          ))}
        </div>
      );
    case "journey":
      return (
        <svg viewBox="0 0 200 150" className="h-full w-full">
          <path d="M10 110 C 50 40, 90 130, 130 60 S 190 90, 195 70" fill="none" className="stroke-primary/70" strokeWidth="1.5" />
          {[20, 60, 100, 140, 180].map((x, i) => {
            const ys = [100, 70, 95, 60, 80];
            return (
              <g key={i}>
                <circle cx={x} cy={ys[i]} r="3.5" className="fill-card stroke-primary" strokeWidth="1.2" />
                <rect x={x - 14} y={ys[i] + 8} width="28" height="14" rx="2" className="fill-card stroke-border" strokeWidth="0.8" />
                <rect x={x - 10} y={ys[i] + 12} width="18" height="1.5" className="fill-foreground/70" />
                <rect x={x - 10} y={ys[i] + 16} width="14" height="1" className="fill-muted-foreground/50" />
              </g>
            );
          })}
        </svg>
      );
  }
}
