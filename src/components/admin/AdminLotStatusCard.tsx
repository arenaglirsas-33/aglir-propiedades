"use client";

import type { Lot, LotStatus } from "@/types";

type AdminLotStatusCardProps = {
  lot: Lot;
  onChangeStatus: (lotId: string, status: LotStatus) => void;
};

const currencyFormatter = new Intl.NumberFormat("es-UY", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const statusLabels: Record<LotStatus, string> = {
  disponible: "Disponible",
  reservado: "Reservado",
  vendido: "Vendido"
};

const statusBadgeStyles: Record<LotStatus, string> = {
  disponible: "border-stone-300 bg-white text-stone-800",
  reservado: "border-amber-200 bg-amber-50 text-amber-900",
  vendido: "border-amber-300 bg-amber-100 text-amber-950"
};

const statusButtonStyles: Record<LotStatus, string> = {
  disponible: "border-stone-300 bg-white text-stone-800 hover:bg-stone-50",
  reservado: "border-amber-200 bg-amber-50 text-amber-900 hover:bg-amber-100",
  vendido: "border-amber-300 bg-amber-100 text-amber-950 hover:bg-amber-200"
};

export function AdminLotStatusCard({ lot, onChangeStatus }: AdminLotStatusCardProps) {
  return (
    <article className="rounded-md border border-stone-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase text-stone-500">Terreno</p>
          <h3 className="mt-1 text-xl font-black text-ink">
            Manzana {lot.manzana}, Solar {lot.solar}
          </h3>
        </div>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-bold ${statusBadgeStyles[lot.estado]}`}
        >
          {statusLabels[lot.estado]}
        </span>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-md bg-paper p-3">
          <dt className="text-stone-600">Metros</dt>
          <dd className="font-bold text-ink">{lot.area_m2} m2</dd>
        </div>
        <div className="rounded-md bg-paper p-3">
          <dt className="text-stone-600">Contado</dt>
          <dd className="font-bold text-ink">{currencyFormatter.format(lot.precio_contado)}</dd>
        </div>
        <div className="col-span-2 rounded-md bg-paper p-3">
          <dt className="text-stone-600">Financiado</dt>
          <dd className="font-bold text-ink">{currencyFormatter.format(lot.precio_financiado)}</dd>
        </div>
      </dl>

      <div className="mt-4 grid gap-2">
        {(["disponible", "reservado", "vendido"] as LotStatus[]).map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => onChangeStatus(lot.id, status)}
            disabled={lot.estado === status}
            className={`min-h-12 rounded-md border px-4 py-3 text-sm font-bold transition disabled:cursor-default disabled:ring-2 disabled:ring-ink/20 ${statusButtonStyles[status]}`}
          >
            Marcar {statusLabels[status].toLowerCase()}
          </button>
        ))}
      </div>
    </article>
  );
}
