import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

export default function PromotionalPayment() {
  const [payments, setPayments] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    const fetchedPayments = [
      {
        id: 1,
        paymentId: 'PMT123456',
        productId: 'P001',
        amount: '$50',
        status: 'Completed',
        plan: 'Basic',
        date: '2025-06-01 / 11:45',
      },
      {
        id: 2,
        paymentId: 'PMT789012',
        productId: 'P002',
        amount: '$80',
        status: 'Pending',
        plan: 'Premium',
        date: '2025-06-02 / 09:30',
      },
    ];
    setPayments(fetchedPayments);
  }, []);

  const handleDelete = (id) => {
    const updated = payments.filter((payment) => payment.id !== id);
    setPayments(updated);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Promotion Payments</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Id</th>
            <th className="p-2">Payment Id</th>
            <th className="p-2">Product Id</th>
            <th className="p-2">Payment Amount</th>
            <th className="p-2">Payment Status</th>
            <th className="p-2">Purchased Plan</th>
            <th className="p-2">Date</th>
            <th className="p-2">Options</th>
          </tr>
        </thead>
        <tbody>
          {payments.length === 0 ? (
            <tr>
              <td colSpan="8" className="p-4 text-center">
                No records found!
              </td>
            </tr>
          ) : (
            payments.map((payment) => (
              <tr key={payment.id} className="border-t">
                <td className="p-2">{payment.id}</td>
                <td className="p-2">{payment.paymentId}</td>
                <td className="p-2">{payment.productId}</td>
                <td className="p-2">{payment.amount}</td>
                <td className="p-2">{payment.status}</td>
                <td className="p-2">{payment.plan}</td>
                <td className="p-2">{payment.date}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(payment.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
