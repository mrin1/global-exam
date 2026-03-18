import { useState } from "react";

export const useInvoice = () => {
  const [items, setItems] = useState([
    { id: "1", name: "", quantity: 1, price: 0 },
  ]);

  const addItem = () =>
    setItems([
      ...items,
      { id: crypto.randomUUID(), name: "", quantity: 1, price: 0 },
    ]);

  const updateItem = (id: string, field: string, value: any) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const deleteItem = (id: string) =>
    setItems(items.filter((item) => item.id !== id));

  const subTotal = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );
  const total = subTotal + subTotal * 0.1;

  return { items, addItem, updateItem, deleteItem, subTotal, total, setItems };
};
