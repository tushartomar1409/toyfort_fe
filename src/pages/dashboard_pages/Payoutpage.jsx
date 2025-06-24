import React from 'react';

const Payoutpage = () => {
  return (
    <div className="p-6 bg-white-100  flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md w-full max-w-7xl p-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Payouts</h2>
        <div className="w-full overflow-x-auto">
          <table className="min-w-full text-left text-sm text-gray-700">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 font-semibold">Withdrawal Method</th>
                <th className="px-4 py-2 font-semibold">Withdrawal Amount</th>
                <th className="px-4 py-2 font-semibold">Status</th>
                <th className="px-4 py-2 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No records found!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payoutpage;
