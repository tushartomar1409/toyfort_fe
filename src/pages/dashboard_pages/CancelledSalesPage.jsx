import React, { useState } from 'react';
import Select from 'react-select';

export default function CancelledSalesPage() {
  const [paymentStatus, setPaymentStatus] = useState({ value: 'All', label: 'All' });
  const [saleId, setSaleId] = useState('');

//   const paymentOptions = [
//     { value: 'All', label: 'All' },
//     { value: 'Payment Received', label: 'Payment Received' },
//     { value: 'Awaiting Payment', label: 'Awaiting Payment' },
//   ];

  const handleFilter = () => {
    // Implement filtering logic based on paymentStatus and saleId
    console.log('Filter by:',  saleId);
  };

  return (
    <div className="p-6 max-w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-4"> Cancelled Sales</h2>

      <div className="flex items-end gap-4 mb-6">
        {/* <div className="w-1/4">
           <label className="block font-semibold mb-1">Payment Status</label>
          <Select
            options={paymentOptions}
            value={paymentStatus}
            onChange={setPaymentStatus}
            className="text-sm"
          /> 
        </div> */}

        <div className="w-1/3">
          <label className="block font-semibold mb-1">Search</label>
          <input
            type="text"
            placeholder="Sale Id"
            value={saleId}
            onChange={(e) => setSaleId(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          onClick={handleFilter}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm h-fit"
        >
          Filter
        </button>
      </div>

      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2">Sale</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Payment</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-6 text-center text-gray-500" colSpan="6">
              No records found!
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
