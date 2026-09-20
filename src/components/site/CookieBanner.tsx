import { useState } from "react";
import type { LegalDocId } from "@/lib/legal";

const STORAGE_KEY = "your-restaurant-bright-cookies-v1";

interface CookieBannerProps {
  onOpenLegal: (docId: LegalDocId) => void;
}

export function CookieBanner({ onOpenLegal }: CookieBannerProps) {
  const [aceptado, setAceptado] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    try {
      return window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });

  if (aceptado) return null;

  const aceptar = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Sin almacenamiento disponible: solo ocultamos el aviso durante la sesión.
    }
    setAceptado(true);
  };

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-lg rounded-2xl bg-white p-5 shadow-[0_30px_60px_-20px_rgba(27,25,22,0.35)]"
    >
      <p className="text-sm leading-relaxed text-stone">
        Este sitio usa únicamente cookies técnicas para funcionar. No empleamos cookies de
        seguimiento ni publicidad. Consulta nuestra{" "}
        <button
          type="button"
          onClick={() => onOpenLegal("cookies")}
          className="font-semibold text-accent underline underline-offset-2 transition-colors hover:text-ink"
        >
          Política de cookies
        </button>
        .
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={aceptar}
          className="btn-sheen rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent"
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => onOpenLegal("cookies")}
          className="text-sm font-medium text-stone underline underline-offset-2 transition-colors hover:text-ink"
        >
          Más información
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;