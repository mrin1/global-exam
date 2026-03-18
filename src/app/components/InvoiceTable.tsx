import { Trash, Plus } from "lucide-react";

export default function InvoiceTable({
  items,
  addItem,
  updateItem,
  deleteItem,
}: any) {
  return (
    <div className="mt-8 space-y-3">
      <div className="grid grid-cols-12 gap-4 font-bold text-gray-400 text-xs uppercase px-2">
        <div className="col-span-6">Description</div>
        <div className="col-span-2">Qty</div>
        <div className="col-span-2">Price</div>
        <div className="col-span-2 text-right">Delete</div>
      </div>
      {items.map((item: any) => (
        <div
          key={item.id}
          className="grid grid-cols-12 gap-4 items-center bg-gray-50 p-2 rounded"
        >
          <input
            className="col-span-6 border-b bg-transparent p-1 outline-none focus:border-blue-500"
            placeholder="Service/Product"
            onChange={(e) => updateItem(item.id, "name", e.target.value)}
          />
          <input
            type="number"
            className="col-span-2 border-b bg-transparent p-1 outline-none"
            placeholder="1"
            onChange={(e) =>
              updateItem(item.id, "quantity", Number(e.target.value))
            }
          />
          <input
            type="number"
            className="col-span-2 border-b bg-transparent p-1 outline-none"
            placeholder="0"
            onChange={(e) =>
              updateItem(item.id, "price", Number(e.target.value))
            }
          />
          <button
            onClick={() => deleteItem(item.id)}
            className="col-span-2 text-red-400 flex justify-end hover:text-red-600"
          >
            <Trash size={18} />
          </button>
        </div>
      ))}
      <button
        onClick={addItem}
        className="flex items-center gap-1 text-blue-600 text-sm font-bold mt-4 border border-blue-100 px-3 py-1 rounded-full hover:bg-blue-50"
      >
        <Plus size={14} /> Add New Line
      </button>
    </div>
  );
}
