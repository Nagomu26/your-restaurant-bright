import { X } from "lucide-react";
import { Dialog } from "radix-ui";
import { DOCUMENTOS, type LegalDocId } from "@/lib/legal";

interface LegalDialogProps {
  docId: LegalDocId | null;
  onClose: () => void;
}

export function LegalDialog({ docId, onClose }: LegalDialogProps) {
  const documento = docId ? DOCUMENTOS[docId] : null;

  if (!documento) return null;

  return (
    <Dialog.Root open={docId !== null} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl bg-white p-6 text-left shadow-2xl sm:p-8">
          <Dialog.Title className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {documento.titulo}
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-stone">
            {documento.resumen} · Última actualización: {documento.fecha}
          </Dialog.Description>

          <div className="mt-6 space-y-6">
            {documento.bloques.map((bloque) => (
              <section key={bloque.titulo}>
                {bloque.titulo && (
                  <h3 className="font-display text-lg font-bold text-accent">{bloque.titulo}</h3>
                )}
                {bloque.parrafos?.map((parrafo, i) => (
                  <p key={i} className="mt-2 text-sm leading-relaxed text-stone first:mt-1">
                    {parrafo}
                  </p>
                ))}
                {bloque.lista && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-stone">
                    {bloque.lista.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Cerrar ventana legal"
              className="absolute right-4 top-4 rounded-full p-2 text-stone transition-colors hover:bg-mist hover:text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default LegalDialog;