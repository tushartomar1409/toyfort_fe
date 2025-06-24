import React from 'react';
import { useLocation } from 'react-router-dom';

const RefundRequest = () => {
  const location = useLocation();
  const isDashboard = location.pathname.includes('/dashboard');

  const refundEntries = [
    // {
    //   product: 'Wireless Headphones',
    //   total: '$120.00',
    //   commissionRate: '10%',
    //   earnedAmount: '$12.00',
    //   buyer: 'John Doe',
    //   seller: 'Jane Smith',
    //   status: 'Pending',
    //   updated: '2025-06-15',
    //   date: '2025-06-14',
    // },
    // {
    //   product: 'Bluetooth Speaker',
    //   total: '$80.00',
    //   commissionRate: '8%',
    //   earnedAmount: '$6.40',
    //   buyer: 'Alice Johnson',
    //   seller: 'Bob Brown',
    //   status: 'Approved',
    //   updated: '2025-06-10',
    //   date: '2025-06-09',
    // },
  ];

  const numberOfEntries = refundEntries.length;

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
      <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Refund Requests</h1>

        <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px', backgroundColor: '#fff' }}>
          <p style={{ marginBottom: '20px' }}>Number of Entries: {numberOfEntries}</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Product</th>
                  <th style={thStyle}>Total</th>
                  {!isDashboard && <th style={thStyle}>Commission Rate</th>}
                  {!isDashboard && <th style={thStyle}>Earned Amount</th>}
                  <th style={thStyle}>Buyer</th>
                  {!isDashboard && <th style={thStyle}>Seller</th>}
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>Updated</th>
                  <th style={thStyle}>Date</th>
                  <th style={thStyle}>Options</th>
                </tr>
              </thead>
              <tbody>
                {numberOfEntries === 0 ? (
                  <tr>
                    <td colSpan="10" style={{ textAlign: 'center', padding: '20px' }}>
                      No refund requests to display.
                    </td>
                  </tr>
                ) : (
                  refundEntries.map((entry, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={tdStyle}>{entry.product}</td>
                      <td style={tdStyle}>{entry.total}</td>
                      {!isDashboard && <td style={tdStyle}>{entry.commissionRate}</td>}
                      {!isDashboard && <td style={tdStyle}>{entry.earnedAmount}</td>}
                      <td style={tdStyle}>{entry.buyer}</td>
                      {!isDashboard && <td style={tdStyle}>{entry.seller}</td>}
                      <td style={tdStyle}>{entry.status}</td>
                      <td style={tdStyle}>{entry.updated}</td>
                      <td style={tdStyle}>{entry.date}</td>
                      <td style={tdStyle}>
                        <button style={buttonStyle}>View</button>
                        {!isDashboard && <button style={{ ...buttonStyle, backgroundColor: '#f44336' }}>Approve Refund</button>}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {!isDashboard && (
          <div
            style={{
              marginTop: '30px',
              backgroundColor: '#e0f7fa',
              border: '1px solid #b2ebf2',
              borderRadius: '8px',
              padding: '20px',
              color: '#006064',
            }}
          >
            <p>
              <strong>Warning!</strong> To complete a refund request, you must return the buyer's money. If you click the
              "Approve Refund" button, the system will change the order status to "Refund Approved" and deduct the order
              amount from the seller's balance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const thStyle = {
  padding: '12px 15px',
  borderBottom: '1px solid #e0e0e0',
  fontWeight: 'bold',
  backgroundColor: '#f5f5f5',
};

const tdStyle = {
  padding: '12px 15px',
  borderBottom: '1px solid #e0e0e0',
};

const buttonStyle = {
  padding: '6px 12px',
  marginRight: '8px',
  backgroundColor: '#2196f3',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default RefundRequest;
