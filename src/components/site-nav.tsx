import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { band, navItems } from "@/lib/band";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Contenido
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-200",
          scrolled || open
            ? "border-b border-line bg-bg/95"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="flex h-16 items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="font-display text-lg font-medium uppercase tracking-wide text-fg sm:text-xl"
          >
            {band.name}
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium uppercase tracking-wider text-muted transition-colors duration-150 hover:text-fg"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="default" variant="primary">
              <a href="#booking">Ventas</a>
            </Button>
          </nav>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={cn("fixed inset-0 z-30 bg-bg pt-16 md:hidden", open ? "block" : "hidden")}
      >
        <nav className="flex h-full flex-col justify-between px-6 pb-10 pt-8" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-display text-5xl font-medium uppercase leading-none tracking-display text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="w-full">
            <a href="#booking" onClick={() => setOpen(false)}>
              Ventas
            </a>
          </Button>
        </nav>
      </div>
    </>
  );
}
