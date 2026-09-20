import { Reveal } from "./Reveal";

const IMAGENES = [
  { src: "img/hero-cut.jpg", alt: "La cocina en plena faena", rot: "-rotate-2" },
  { src: "img/beard.jpg", alt: "Detalle de arreglo de barba", rot: "rotate-1" },
  { src: "img/chairs.jpg", alt: "Rincón de las sillas", rot: "rotate-2" },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative overflow-hidden bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
            Nuestro trabajo
          </p>
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            Un vistazo al{" "}
            <em className="text-accent italic">estudio</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {IMAGENES.map((img, i) => (
            <Reveal key={img.src} delay={i * 80}>
              <figure className={`${img.rot} bg-white p-3 shadow-soft transition-transform duration-500 hover:rotate-0`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-64 w-full rounded-lg object-cover"
                  loading="lazy"
                />
                <figcaption className="px-1 pt-3 font-display text-sm italic text-stone">
                  {img.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}