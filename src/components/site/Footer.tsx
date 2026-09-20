import { MapPin, Phone } from "lucide-react";
import { CONFIG } from "@/lib/config";
import type { LegalDocId } from "@/lib/legal";

const LINKS_LEGALES: Array<{ id: LegalDocId; etiqueta: string }> = [
  { id: "aviso", etiqueta: "Aviso legal" },
  { id: "privacidad", etiqueta: "Política de privacidad" },
  { id: "terminos", etiqueta: "Términos y condiciones" },
  { id: "cookies", etiqueta: "Política de cookies" },
];

export function Footer({ onOpenLegal }: { onOpenLegal: (docId: LegalDocId) => void }) {
  return (
    <footer id="contacto" className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl italic text-paper">
              {CONFIG.logoNombre}{" "}
              <span className="font-bold text-accent">{CONFIG.logoAcento}</span>
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-paper/70">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent/80" aria-hidden="true" />
              <span>
                {CONFIG.direccion}
                <br />
                {CONFIG.localidad}
              </span>
            </p>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              Contacto
            </p>
            <p className="text-sm text-paper/70">
              Teléfono / WhatsApp:
              <br />
              <a
                href={`tel:${CONFIG.telefonoEnlace}`}
                className="mt-1 inline-flex items-center gap-2 font-medium text-paper transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                {CONFIG.telefono}
              </a>
            </p>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              Horario
            </p>
            <p className="space-y-1 text-sm leading-relaxed text-paper/70">
              <span className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent"></span>
                Lunes a sábado: 10h–14h y 16h–21h
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent"></span>
                Domingos y festivos: 9h–14h
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-paper/10 pt-6 sm:justify-start">
          {LINKS_LEGALES.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => onOpenLegal(link.id)}
              className="text-xs text-paper/60 underline-offset-2 transition-colors hover:text-accent hover:underline"
            >
              {link.etiqueta}
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-col justify-between gap-2 border-t border-paper/10 pt-6 text-xs text-paper/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {CONFIG.nombre}. Todos los derechos reservados.</p>
          <p>
            {CONFIG.nombre} · {CONFIG.direccion} · {CONFIG.ciudad}
          </p>
        </div>
      </div>
    </footer>
  );
}