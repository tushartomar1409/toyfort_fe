import React, { useState } from "react";

const initialSales = [
  { id: 10114, total: 3141, payment: "Payment Received", status: "Completed", date: "2025-05-23 / 18:34", delivered: false },
  { id: 10113, total: 159, payment: "Payment Received", status: "Completed", date: "2025-05-23 / 18:25", delivered: false },
  { id: 10112, total: 319, payment: "Payment Received", status: "Completed", date: "2025-05-23 / 14:56", delivered: false },
  { id: 10111, total: 544, payment: "Payment Received", status: "Completed", date: "2025-05-23 / 13:19", delivered: false },
  { id: 10110, total: 569, payment: "Payment Received", status: "Completed", date: "2025-05-20 / 11:32", delivered: false },
  { id: 10109, total: 467, payment: "Payment Received", status: "Completed", date: "2025-05-19 / 18:11", delivered: true },
  { id: 10108, total: 198, payment: "Payment Received", status: "Completed", date: "2025-05-19 / 13:16", delivered: false },
];

export default function CompletedSales() {
  const [sales, setSales] = useState(initialSales);
  const [search, setSearch] = useState("");

  const markAsDelivered = (id) => {
    const updatedSales = sales.map((sale) =>
      sale.id === id ? { ...sale, delivered: true } : sale
    );
    setSales(updatedSales);
  };

  const filteredSales = sales.filter((sale) =>
    sale.id.toString().includes(search)
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Completed Sales</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Sale ID"
          className="border rounded px-3 py-2 w-60"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Filter
        </button>
      </div>

      <table className="w-full table-auto border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Sale</th>
            <th className="p-2">Total</th>
            <th className="p-2">Payment</th>
            <th className="p-2">Status</th>
            <th className="p-2">Date</th>
            <th className="p-2">Options</th>
            <th className="p-2">Mark As Delivered</th>
          </tr>
        </thead>
        <tbody>
          {filteredSales.map((sale) => (
            <tr key={sale.id} className="border-b">
              <td className="p-2 font-medium">#{sale.id}</td>
              <td className="p-2">₹{sale.total.toLocaleString()}</td>
              <td className="p-2">{sale.payment}</td>
              <td className="p-2">
                <span className="bg-gray-200 px-2 py-1 rounded text-xs">
                  {sale.status}
                </span>
              </td>
              <td className="p-2">{sale.date}</td>
              <td className="p-2">
                <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">
                  Details
                </button>
              </td>
              <td className="p-2">
                <button
                  onClick={() => markAsDelivered(sale.id)}
                  className={`px-4 py-1 rounded text-sm ${
                    sale.delivered
                      ? "bg-green-600 text-white"
                      : "bg-green-200 text-green-700 hover:bg-green-300"
                  }`}
                  disabled={sale.delivered}
                >
                  {sale.delivered ? "Delivered" : "Mark As Delivered"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm mt-4">Number of Entries: {filteredSales.length}</p>
    </div>
  );
}
