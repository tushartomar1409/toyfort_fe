import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";
import { Link } from 'react-router-dom';


const PayoutRequest = () => {
  const [showCount, setShowCount] = useState(15);
  const [status, setStatus] = useState('All');
  const [search, setSearch] = useState('');

  // Placeholder for payout data
  const payouts = []; // No records found as per screenshot

  const handleFilter = (e) => {
    e.preventDefault();
    // Implement filtering logic here
    // For now, this is just a placeholder
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
            <Adminheader />
    <div style={{ margin: '40px auto', maxWidth: 1200, background: '#fff', padding: 32, borderRadius: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ margin: 0 }}>Payout Requests</h2>
        
        <button
          style={{
            background: '#16a085',
            color: '#fff',
            border: 'none',
            padding: '10px 24px',
            borderRadius: 4,
            fontSize: 16,
            cursor: 'pointer'
          }}
        > <li className="flex items-center space-x-2"> <Link to={"/admin/add-payout"}>
          + Add Payout </Link></li>
        </button>
      </div>

      <form
        onSubmit={handleFilter}
        style={{
          display: 'flex',
          gap: 16,
          alignItems: 'center',
          marginBottom: 24
        }}
      >
        <div>
          <label style={{ display: 'block', marginBottom: 4 }}>Show</label>
          <select
            value={showCount}
            onChange={e => setShowCount(e.target.value)}
            style={{ padding: 8, width: 80 }}
          >
            {[15, 30, 50, 100].map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: 4 }}>Status</label>
          <select
            value={status}
            onChange={e => setStatus(e.target.value)}
            style={{ padding: 8, width: 120 }}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: 4 }}>Search</label>
          <input
            type="text"
            placeholder="User Id"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ padding: 8, width: 140 }}
          />
        </div>
        <div style={{ alignSelf: 'flex-end' }}>
          <button
            type="submit"
            style={{
              background: '#5a67d8',
              color: '#fff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: 4,
              fontSize: 16,
              cursor: 'pointer'
            }}
          >
            Filter
          </button>
        </div>
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
        <thead>
          <tr style={{ background: '#f7f7f7' }}>
            <th style={{ padding: 12, border: '1px solid #eee' }}>Id</th>
            <th style={{ padding: 12, border: '1px solid #eee' }}>User</th>
            <th style={{ padding: 12, border: '1px solid #eee' }}>Withdrawal Method</th>
            <th style={{ padding: 12, border: '1px solid #eee' }}>Withdrawal Amount</th>
            <th style={{ padding: 12, border: '1px solid #eee' }}>Status</th>
            <th style={{ padding: 12, border: '1px solid #eee' }}>Date</th>
            <th style={{ padding: 12, border: '1px solid #eee' }}>Options</th>
          </tr>
        </thead>
        <tbody>
          {payouts.length === 0 ? (
            <tr>
              <td colSpan={7} style={{ textAlign: 'center', padding: 24, color: '#888' }}>
                No records found!
              </td>
            </tr>
          ) : (
            payouts.map((payout, idx) => (
              <tr key={payout.id}>
                <td>{payout.id}</td>
                <td>{payout.user}</td>
                <td>{payout.method}</td>
                <td>{payout.amount}</td>
                <td>{payout.status}</td>
                <td>{payout.date}</td>
                <td>{/* Options buttons here */}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>

     
      <Adminfooter/>
    </div>
    
  );
};

export default PayoutRequest;
