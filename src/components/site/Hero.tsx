import { Phone } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { Reveal } from "./Reveal";

const STATS = [
  { valor: "4.9★", etiqueta: "Valoración de clientes" },
  { valor: "1 min", etiqueta: "Para reservar una mesa" },
  { valor: "7 días", etiqueta: "De antelación máxima" },
];

const HORARIOS = [
  { dias: "Lunes – Sábado", horas: "10h–14h y 16h–21h" },
  { dias: "Domingos y festivos", horas: "9h–14h" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-paper">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -right-40 -top-40 rounded-full bg-accent/10 blur-3xl"
          style={{ width: "480px", height: "480px" }}
        ></div>
        <div
          className="absolute -bottom-48 -left-32 rounded-full bg-deep/10 blur-3xl"
          style={{ width: "420px", height: "420px" }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                <span className="inline-block h-px w-10 bg-accent/60"></span>
                Restaurante en {CONFIG.zona}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display text-5xl leading-[1.08] text-ink sm:text-6xl lg:text-7xl">
                Tu mesa perfecta,
                <br />
                <em className="text-accent italic">sin esperas.</em>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone sm:text-xl">
                Restaurante de confianza en tu barrio. Elige tu hora y siéntate
                a disfrutar de la cocina de mercado.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#reserva"
                  className="btn-sheen inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-semibold text-paper transition-colors hover:bg-accent"
                >
                  Reservar mesa
                </a>
                <a
                  href={`tel:${CONFIG.telefonoEnlace}`}
                  className="inline-flex items-center justify-center rounded-full border border-line bg-white px-8 py-4 text-sm font-medium text-ink transition-all hover:border-accent"
                >
                  <Phone className="mr-2 h-4 w-4 text-accent" aria-hidden="true" />
                  Llamar ahora · {CONFIG.telefono}
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
                {STATS.map((stat) => (
                  <div key={stat.etiqueta}>
                    <p className="font-display text-3xl font-bold text-ink">{stat.valor}</p>
                    <p className="mt-1 text-xs text-stone">{stat.etiqueta}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:col-span-5">
            <div className="relative">
              <div
                className="absolute -inset-3 rotate-2 rounded-2xl bg-deep/10"
                aria-hidden="true"
              ></div>
              <div className="relative overflow-hidden rounded-2xl bg-white p-3 shadow-soft">
                <img
                  src="img/haircut-close.jpg"
                  alt="Detalle de un plato"
                  className="h-[430px] w-full rounded-xl object-cover"
                  loading="eager"
                />
                <div className="dot-divider mx-6 mt-4"></div>
                <div className="grid grid-cols-2 gap-2 px-3 pb-3 pt-2 text-[11px] text-stone">
                  {HORARIOS.map((slot) => (
                    <div key={slot.dias} className="rounded-lg bg-mist px-3 py-2">
                      <p className="font-semibold text-ink">{slot.dias}</p>
                      <p className="mt-0.5">{slot.horas}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}