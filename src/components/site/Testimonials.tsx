import { Reveal } from "./Reveal";

const TESTIMONIOS = [
  {
    texto: "El mejor plato de toda la zona. Mi restaurante de confianza desde el primer día.",
    autor: "Carlos M.",
  },
  {
    texto: "Puntual, cercano y un trato impecable. No cambio este restaurante por nada.",
    autor: "Antonio R.",
  },
  {
    texto: "Cada vez que salgo de aquí me siento mejor de lo que entré. Servicio y calidad top.",
    autor: "Manuel P.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -left-24 top-0 rounded-full bg-accent/20 blur-3xl"
          style={{ width: "360px", height: "360px" }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
            Lo que dicen de nosotros
          </p>
          <h2 className="font-display text-4xl text-paper sm:text-5xl">Opiniones</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIOS.map((t, i) => (
            <Reveal key={t.autor} delay={i * 80}>
              <figure className="h-full rounded-2xl border border-paper/10 bg-paper/5 p-8">
                <div className="mb-4 text-3xl text-accent" aria-hidden="true">
                  &ldquo;
                </div>
                <blockquote className="font-display text-xl italic leading-relaxed">
                  {t.texto}
                </blockquote>
                <figcaption className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                  {t.autor}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}