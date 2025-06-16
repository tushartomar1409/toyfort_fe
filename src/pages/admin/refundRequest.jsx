import React from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const RefundRequest = () => {
  // Static data for demonstration purposes.
  // In a real application, this would likely come from an API call.
  const refundEntries = [
    // Example entry structure (currently empty as in the image)
    // {
    //   product: 'Sample Product',
    //   total: '$100.00',
    //   commissionRate: '10%',
    //   earnedAmount: '$10.00',
    //   buyer: 'John Doe',
    //   seller: 'Jane Smith',
    //   status: 'Pending',
    //   updated: '2024-10-26',
    //   date: '2024-10-25',
    // },
  ];

  const numberOfEntries = refundEntries.length;


  return (
      <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Refund Requests</h1>

      <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px', backgroundColor: '#fff' }}>
        <p style={{ marginBottom: '20px' }}>Number of Entries: {numberOfEntries}</p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr>
                <th style={{ padding: '12px 15px', borderBottom: '1px solid #e0e0e0' }}>Product</th>
                <th style={{ padding: '12px 15px', borderBottom: '1px solid #e0e0e0' }}>Total</th>
                <th style={{ padding: '12px 15px', borderBottom: '1px solid #e0e0e0' }}>Commission Rate</th>
                <th style={{ padding: '12px 15px', borderBottom: '1px solid #e0e0e0' }}>Earned Amount</th>
                <th style={{ padding: '12px 15px', borderBottom: '1px solid #e0e0e0' }}>Buyer</th>
                <th style={{ padding: '12px 15px', borderBottom: '1px solid #e0e0e0' }}>Seller</th>
                <th style={{ padding: '12px 15px', borderBottom: '1px solid #e0e0e0' }}>Status</th>
                <th style={{ padding: '12px 15px', borderBottom: '1px solid #e0e0e0' }}>Updated</th>
                <th style={{ padding: '12px 15px', borderBottom: '1px solid #e0e0e0' }}>Date</th>
                <th style={{ padding: '12px 15px', borderBottom: '1px solid #e0e0e0' }}>Options</th>
              </tr>
            </thead>
            <tbody>
              {/* You can map over your refundEntries data here to populate the rows */}
              {/* For now, it's empty as in the provided image */}
              {numberOfEntries === 0 && (
                <tr>
                  <td colSpan="10" style={{ textAlign: 'center', padding: '20px' }}>
                    No refund requests to display.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#e0f7fa', border: '1px solid #b2ebf2', borderRadius: '8px', padding: '20px', color: '#006064' }}>
        <p><strong>Warning!</strong> To complete a refund request, you must return the buyer's money. If you click the "Approve Refund" button, the system will change the order status to "Refund Approved" and deduct the order amount from the seller's balance.</p>
      </div>
    </div>
 <Adminfooter />
      
    </div>
  );
};

export default RefundRequest;