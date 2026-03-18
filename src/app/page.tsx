"use client";
import { useState } from 'react';
import { useStore } from './hooks/useStore';
import { useInvoice } from './hooks/useInvoice';
import Auth from './components/Auth';
import InvoiceTable from './components/InvoiceTable';
import { LogOut, Save, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Home() {
  const { user, logout, history, saveInvoice } = useStore();
  const { items, addItem, updateItem, deleteItem, subTotal, total } = useInvoice();
  const [client, setClient] = useState('');

  if (!user) return <Auth />;

  const handleDownload = async () => {
    const element = document.getElementById('printable-invoice');
    if (element) {
      const canvas = await html2canvas(element);
      const pdf = new jsPDF();
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 0);
      pdf.save(`${client || 'Invoice'}.pdf`);
    }
  };

  const handleSave = () => {
    saveInvoice({ id: Date.now(), client: client || 'Guest', total, date: new Date().toLocaleDateString() });
    alert("Saved to History!");
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <nav className="bg-white border-b px-10 py-4 flex justify-between items-center shadow-sm">
        <h1 className="font-black text-blue-600 tracking-tight">GLOBAL-EXAM GEN</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-500">{user}</span>
          <button onClick={logout} className="text-red-500 hover:bg-red-50 p-2 rounded"><LogOut size={18}/></button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto mt-10 space-y-6">
        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button onClick={handleSave} className="flex items-center gap-2 bg-white border px-4 py-2 rounded shadow-sm hover:bg-gray-50"><Save size={18}/> Save Data</button>
          <button onClick={handleDownload} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700"><Download size={18}/> Download PDF</button>
        </div>

        {/* Invoice Card */}
        <div id="printable-invoice" className="bg-white p-12 shadow-xl border rounded">
          <input 
            placeholder="CLIENT NAME" 
            className="text-4xl font-black mb-8 w-full outline-none border-b-4 border-transparent focus:border-blue-100" 
            onChange={(e) => setClient(e.target.value)} 
          />
          <InvoiceTable items={items} addItem={addItem} updateItem={updateItem} deleteItem={deleteItem} />
          <div className="mt-10 border-t pt-6 text-right space-y-2">
            <p className="text-slate-400">Subtotal: ${subTotal.toFixed(2)}</p>
            <p className="text-3xl font-black text-blue-700">Total: ${total.toFixed(2)}</p>
          </div>
        </div>

        {/* History List */}
        <div className="mt-10">
          <h2 className="font-bold text-slate-700 mb-4">Saved History (LocalStorage)</h2>
          <div className="grid gap-2">
            {history.map((h: any) => (
              <div key={h.id} className="bg-white p-4 rounded border flex justify-between shadow-sm">
                <span className="font-medium text-slate-600">{h.client} - {h.date}</span>
                <span className="font-bold text-blue-600">${h.total.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}