import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONFIG } from "@/lib/config";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#reserva", label: "Reserva" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur transition-shadow duration-300",
        scrolled
          ? "border-line bg-paper/90 shadow-[0_10px_30px_-20px_rgba(27,25,22,0.25)]"
          : "border-transparent bg-paper/70",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-baseline gap-1" aria-label={CONFIG.nombre}>
          <span className="font-display text-2xl italic text-ink">{CONFIG.logoNombre}</span>
          <span className="font-display text-xl font-bold text-accent">
            {CONFIG.logoAcento}
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-stone md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#reserva"
            className="btn-sheen hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent sm:inline-flex"
          >
            Reservar
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="-mr-2 p-2 text-ink transition-colors hover:text-accent md:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-paper md:hidden">
          <div className="flex flex-col gap-4 px-5 py-4 font-medium text-stone">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-1 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reserva"
              onClick={() => setMenuOpen(false)}
              className="btn-sheen mt-1 inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 font-semibold text-paper transition-colors hover:bg-accent"
            >
              Reservar cita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}