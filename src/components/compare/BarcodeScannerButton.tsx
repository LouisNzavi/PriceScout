"use client";

import { BrowserMultiFormatReader } from "@zxing/browser";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { normaliseBarcode } from "@/lib/barcode";
import { Button } from "@/components/ui/Button";

type ScanState = "idle" | "starting" | "scanning" | "error";

export function BarcodeScannerButton() {
  const router = useRouter();
  const reader = useMemo(() => new BrowserMultiFormatReader(), []);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const controlsRef = useRef<{ stop: () => void } | null>(null);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<ScanState>("idle");
  const [error, setError] = useState<string | null>(null);

  const stop = useCallback(() => {
    try {
      controlsRef.current?.stop();
      controlsRef.current = null;
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!open) {
      stop();
      setState("idle");
      setError(null);
      return;
    }

    let cancelled = false;
    setState("starting");
    setError(null);

    (async () => {
      try {
        if (!videoRef.current) return;
        setState("scanning");

        const controls = await reader.decodeFromVideoDevice(
          undefined,
          videoRef.current,
          (result) => {
            if (!result) return;
            if (cancelled) return;
            const raw = result.getText();
            const barcode = normaliseBarcode(raw);
            setOpen(false);
            router.push(`/compare?barcode=${encodeURIComponent(barcode)}`);
          }
        );
        controlsRef.current = controls;
      } catch (e) {
        if (cancelled) return;
        setState("error");
        setError(
          "Camera scan failed. Please allow camera access or type the barcode."
        );
      }
    })();

    return () => {
      cancelled = true;
      stop();
    };
  }, [open, reader, router, stop]);

  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Scan with camera
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-ink/40 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Scan barcode"
        >
          <div className="w-full max-w-xl rounded-panel bg-neutral-100 shadow-panel border border-divider overflow-hidden">
            <div className="flex items-center justify-between gap-3 p-4 border-b border-divider">
              <div>
                <p className="text-ink font-semibold">Scan a barcode</p>
                <p className="text-body text-xs">
                  Point your camera at the barcode; we&apos;ll detect it automatically.
                </p>
              </div>
              <Button
                variant="tertiary"
                onClick={() => setOpen(false)}
                aria-label="Close scanner"
              >
                Close
              </Button>
            </div>

            <div className="p-4 space-y-3">
              <div className="rounded-panel border border-divider bg-neutral-50 overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-[320px] object-cover"
                  muted
                  playsInline
                />
              </div>

              {state === "starting" && (
                <p className="text-body text-sm">Starting camera…</p>
              )}
              {state === "scanning" && (
                <p className="text-body text-sm">
                  Scanning… hold steady for a second.
                </p>
              )}
              {state === "error" && (
                <p className="text-destructive text-sm">{error}</p>
              )}

              <div className="flex items-center justify-end gap-2">
                <Button variant="secondary" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

