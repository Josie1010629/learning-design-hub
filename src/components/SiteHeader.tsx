import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type NavItem = { label: string; to: "/" | "/projects"; hash?: string };

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/", hash: "skills" },
  { label: "Contact", to: "/", hash: "contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => { setOpen(false); }, [pathname]);

  const handleScroll = (item: NavItem) => (e: React.MouseEvent) => {
    if (item.to !== "/") return;
    if (!onHome) return; // let router navigate to "/" with hash
    e.preventDefault();
    if (!item.hash) window.scrollTo({ top: 0, behavior: "smooth" });
    else document.getElementById(item.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2" onClick={handleScroll({ label: "Home", to: "/" })}>
          <span className="font-serif text-lg text-foreground">Liangjie Jin</span>
          <span className="hidden text-xs text-muted-foreground sm:inline">— Learning Designer</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              onClick={handleScroll(item)}
              className="text-sm text-foreground/80 transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            className="text-sm text-foreground/80 transition hover:text-primary"
          >
            Resume
          </a>
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
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                onClick={handleScroll(item)}
                className="py-2 text-sm text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
            <a href="/resume.pdf" target="_blank" rel="noopener" className="py-2 text-sm text-foreground/80">
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface/50">
      <div className="container-narrow flex flex-col items-start justify-between gap-3 py-8 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">© 2026 Liangjie Jin. Learning Designer Portfolio.</p>
        <a href="mailto:jinliangjie002@gmail.com" className="text-sm text-foreground/80 hover:text-primary">
          jinliangjie002@gmail.com
        </a>
      </div>
    </footer>
  );
}
