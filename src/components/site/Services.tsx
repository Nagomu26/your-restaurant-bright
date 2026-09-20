import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONFIG } from "@/lib/config";
import { SERVICIOS } from "@/data/services";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden border-y border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              Nuestra carta
            </p>
            <h2 className="font-display text-4xl text-ink sm:text-5xl">La Carta</h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-stone">
              Platos pensados para compartir o solo para ti. Reserva el que
              necesites.
            </p>
          </Reveal>
          <Reveal delay={120} className="md:justify-self-end">
            <a
              href="#reserva"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Ver disponibilidad
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SERVICIOS.map((servicio, i) => (
            <Reveal key={servicio.id} delay={i * 60} className="h-full">
              <article
                className={cn(
                  "card-lift relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-cardbg p-7 shadow-soft",
                  servicio.destacado && "border-2 border-accent/30",
                )}
              >
                <span
                  className="font-display pointer-events-none absolute -right-2 -top-4 text-7xl font-bold italic text-ink/[0.06]"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold text-ink">
                      {servicio.nombre}
                    </h3>
                    {servicio.destacado && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"></span>
                        Más pedido
                      </span>
                    )}
                  </div>
                  <p className="mt-3 leading-relaxed text-stone">{servicio.descripcion}</p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                  <span className="font-display text-2xl font-bold text-accent">
                    {servicio.precio} €
                  </span>
                  <a
                    href="#reserva"
                    aria-label={`Reservar ${servicio.nombre}`}
                    className="btn-sheen inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent"
                  >
                    Reservar
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-sm text-stone">
            ¿No tienes claro qué necesitas? Escríbenos por WhatsApp al{" "}
            <a
              href={`https://wa.me/${CONFIG.whatsapp}`}
              className="font-semibold text-accent transition-colors hover:text-ink"
            >
              {CONFIG.telefono}
            </a>{" "}
            y te aconsejamos sin compromiso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}