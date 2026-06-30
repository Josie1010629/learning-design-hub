import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type NavItem =
  | { label: string; kind: "route"; to: "/" | "/projects" }
  | { label: string; kind: "hash"; hash: string }
  | { label: string; kind: "external"; href: string };

const navItems: NavItem[] = [
  { label: "Projects", kind: "route", to: "/projects" },
  { label: "Resume", kind: "external", href: "/resume.pdf" },
  { label: "Education", kind: "hash", hash: "education" },
  { label: "Contact", kind: "hash", hash: "contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => { setOpen(false); }, [pathname]);

  const scrollTo = (hash: string) => {
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderItem = (item: NavItem, className: string) => {
    if (item.kind === "route") {
      return (
        <Link key={item.label} to={item.to} className={className}>
          {item.label}
        </Link>
      );
    }
    if (item.kind === "external") {
      return (
        <a key={item.label} href={item.href} target="_blank" rel="noopener" className={className}>
          {item.label}
        </a>
      );
    }
    // hash → if on home, smooth scroll; else navigate home + hash
    if (onHome) {
      return (
        <button
          key={item.label}
          onClick={() => { scrollTo(item.hash); setOpen(false); }}
          className={className}
        >
          {item.label}
        </button>
      );
    }
    return (
      <Link key={item.label} to="/" hash={item.hash} className={className}>
        {item.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link to="/" className="font-script text-[1.75rem] leading-none tracking-tight text-[color:var(--color-deep)]">
          Liangjie Jin
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) =>
            renderItem(item, "text-sm font-sans font-medium text-foreground/75 transition hover:text-primary"),
          )}
        </nav>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-narrow flex flex-col py-3">
            {navItems.map((item) =>
              renderItem(item, "py-2 text-left font-sans text-sm font-medium text-foreground/80"),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface/60">
      <div className="container-narrow flex flex-col items-start justify-between gap-3 py-8 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">© 2026 Liangjie Jin. Learning Designer Portfolio.</p>
        <a href="mailto:jinliangjie002@gmail.com" className="text-sm text-foreground/80 hover:text-primary">
          jinliangjie002@gmail.com
        </a>
      </div>
    </footer>
  );
}
