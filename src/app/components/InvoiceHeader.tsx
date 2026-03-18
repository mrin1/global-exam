"use client";

import { Building2, Calendar, Hash } from "lucide-react";

export default function InvoiceHeader() {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8 shadow-sm">
      <div className="flex justify-between items-start mb-8 border-b border-slate-200 pb-6">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Building2 className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-black text-slate-800 uppercase tracking-tight">
              Your Company
            </h3>
            <p className="text-[10px] text-slate-500 font-medium">
              123 Business St, Kolkata, WB
            </p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-2xl font-black text-slate-300 tracking-tighter uppercase italic">
            Draft Invoice
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-[10px] font-black uppercase text-blue-600 tracking-widest">
            Bill To:
          </label>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Client Name / Company"
              className="w-full bg-transparent border-b border-slate-300 py-1 outline-none focus:border-blue-500 font-bold text-slate-700 transition-colors"
            />
            <input
              type="text"
              placeholder="Client Address & Contact"
              className="w-full bg-transparent border-b border-slate-300 py-1 outline-none focus:border-blue-500 text-sm text-slate-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col items-end space-y-4">
          <div className="w-48">
            <label className="flex items-center justify-end gap-1 text-[10px] font-black uppercase text-slate-400 mb-1">
              <Hash size={12} /> Invoice Number
            </label>
            <input
              type="text"
              defaultValue={`#INV-${Date.now().toString().slice(-4)}`}
              className="w-full text-right bg-transparent border-b border-slate-300 py-1 outline-none focus:border-blue-500 font-mono font-bold text-slate-700"
            />
          </div>

          <div className="w-48">
            <label className="flex items-center justify-end gap-1 text-[10px] font-black uppercase text-slate-400 mb-1">
              <Calendar size={12} /> Issue Date
            </label>
            <input
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              className="w-full text-right bg-transparent border-b border-slate-300 py-1 outline-none focus:border-blue-500 text-slate-600 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
