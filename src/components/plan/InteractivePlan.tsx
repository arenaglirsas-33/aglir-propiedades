"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Lot } from "@/types";
import { LotBottomSheet } from "./LotBottomSheet";
import { LotPolygon } from "./LotPolygon";

type InteractivePlanProps = {
  lots: Lot[];
  selectedLot: Lot | null;
  onSelectLot: (lot: Lot | null) => void;
  onSchedule: () => void;
  showLotDetails?: boolean;
};

export function InteractivePlan({
  lots,
  selectedLot,
  onSelectLot,
  onSchedule,
  showLotDetails = true
}: InteractivePlanProps) {
  const [planImageReady, setPlanImageReady] = useState(false);
  const drawableLots = lots.filter((lot) => lot.polygon.length >= 3);

  useEffect(() => {
    const image = new window.Image();
    image.onload = () => setPlanImageReady(true);
    image.onerror = () => setPlanImageReady(false);
    image.src = "/plan/plano-11223.png";
  }, []);

  return (
    <section className="grid gap-4 md:grid-cols-[minmax(0,1fr)_360px]">
      <div className="relative min-h-[58vh] overflow-hidden rounded-md border border-stone-200 bg-stone-100 shadow-sm md:min-h-[680px]">
        {planImageReady ? (
          <Image
            src="/plan/plano-11223.png"
            alt="Plano de terrenos Aglir Propiedades"
            fill
            sizes="(min-width: 768px) calc(100vw - 420px), 100vw"
            className="object-contain"
            priority
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(90deg,#e7e1d2_1px,transparent_1px),linear-gradient(#e7e1d2_1px,transparent_1px)] bg-[size:28px_28px] p-6 text-center">
            <div>
              <p className="text-base font-bold text-ink">Placeholder del plano 11223</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-stone-700">
                Colocar la imagen real en public/plan/plano-11223.png.
              </p>
            </div>
          </div>
        )}

        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 h-full w-full touch-pan-x touch-pan-y"
          role="img"
          aria-label="Plano interactivo con terrenos clickeables"
        >
          {drawableLots.map((lot) => (
            <LotPolygon
              key={lot.id}
              lot={lot}
              selected={selectedLot?.id === lot.id}
              onSelect={onSelectLot}
            />
          ))}
        </svg>

        <div className="absolute left-3 top-3 rounded-md bg-white/95 px-3 py-2 text-xs font-semibold text-stone-700 shadow-sm">
          Tocá un solar para ver detalles
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 rounded-md bg-white/95 p-2 text-[11px] font-bold text-stone-700 shadow-sm sm:right-auto">
          <span className="inline-flex items-center gap-1">
            <span className="h-3 w-3 rounded-sm border border-stone-500 bg-white" />
            Disponible
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-3 w-3 rounded-sm border border-amber-500 bg-amber-200" />
            Reservado
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-3 w-3 rounded-sm border border-amber-800 bg-amber-400" />
            Vendido
          </span>
        </div>
      </div>

      {showLotDetails ? (
        <>
          <div className="hidden md:block">
            <LotBottomSheet
              lot={selectedLot}
              onClose={() => onSelectLot(null)}
              onSchedule={onSchedule}
            />
          </div>

          <div className="md:hidden">
            <LotBottomSheet
              lot={selectedLot}
              onClose={() => onSelectLot(null)}
              onSchedule={onSchedule}
            />
          </div>
        </>
      ) : null}
    </section>
  );
}
