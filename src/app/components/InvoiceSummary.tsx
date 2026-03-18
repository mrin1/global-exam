"use client";

import { SummaryProps } from "../typescript/interface/summary.interface";

export default function InvoiceSummary({ subTotal, taxRate }: SummaryProps) {
  const taxAmount = (subTotal * taxRate) / 100;
  const totalAmount = subTotal + taxAmount;

  return (
    <div className="flex justify-end mt-10">
      <div className="w-full max-w-xs space-y-3 border-t-2 border-slate-100 pt-6">
        <div className="flex justify-between text-slate-500 font-medium">
          <span>Subtotal</span>
          <span>${subTotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-slate-500 font-medium">
          <span>Tax ({taxRate}%)</span>
          <span className="text-red-400">+ ${taxAmount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center font-black text-2xl text-blue-700 pt-4 border-t border-dashed border-slate-200">
          <span>Total</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>

        <div className="mt-6 p-3 bg-blue-50 rounded-lg">
          <p className="text-[11px] text-blue-600 font-semibold italic text-center uppercase tracking-wider">
            Generated via Global-Exam Invoice System
          </p>
        </div>
      </div>
    </div>
  );
}
