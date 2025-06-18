import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";
import { Link } from 'react-router-dom';


const AddPayout = () => {
  const [user, setUser] = useState('');
  const [method, setMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  // Dummy data for dropdowns
  const users = [
    { value: '', label: 'Select' },
    { value: 'user1', label: 'User 1' },
    { value: 'user2', label: 'User 2' },
  ];

  const methods = [
    { value: '', label: 'Select' },
     { value: 'paypal', label: 'PayPal' },
    { value: 'bitcoin', label: 'Bitcoin (BTC)' },
    { value: 'iban', label: 'IBAN' },
    { value: 'swift', label: 'SWIFT' },
   
  ];

  const statuses = [
    { value: '', label: 'Select' },
    { value: 'pending', label: 'Pending' },
    { value: 'completed', label: 'Completed' },
    { value: 'rejected', label: 'Rejected' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call, etc.)
    alert(`Payout Added:\nUser: ${user}\nMethod: ${method}\nAmount: ${amount}\nStatus: ${status}`);
  };

  return (
      <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
            <Adminheader />
    <div style={{ margin: '40px auto', maxWidth: 600, background: '#fff', padding: 32, borderRadius: 8 }}>
      <h2>Add Payout</h2>
      <button style={{ float: 'right', marginBottom: 16, background: '#16a085', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: 4 }}>
       <li className="flex items-center space-x-2"> <Link to={"/admin/payout-requests"}>
        
          Payout Requests</Link></li> 
      </button>
      <form onSubmit={handleSubmit} style={{ clear: 'both' }}>
        <div style={{ marginBottom: 24 }}>
          <label>User</label>
          <select value={user} onChange={e => setUser(e.target.value)} style={{ width: '100%', padding: 8, marginTop: 4 }}>
            {users.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
          </select>
        </div>
        <div style={{ marginBottom: 24 }}>
          <label>Withdrawal Method</label>
          <select value={method} onChange={e => setMethod(e.target.value)} style={{ width: '100%', padding: 8, marginTop: 4 }}>
            {methods.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
          </select>
        </div>
        <div style={{ marginBottom: 24 }}>
          <label>Withdrawal Amount (INR)</label>
          <input
            type="number"
            value={amount}
            min="0"
            step="0.01"
            onChange={e => setAmount(e.target.value)}
            style={{ width: '100%', padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label>Status</label>
          <select value={status} onChange={e => setStatus(e.target.value)} style={{ width: '100%', padding: 8, marginTop: 4 }}>
            {statuses.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>
        <button type="submit" style={{ background: '#007bff', color: '#fff', padding: '10px 24px', border: 'none', borderRadius: 4 }}>
          Add Payout
        </button>
      </form>
    </div>
     <Adminfooter />
    </div>
    
  );
};

export default AddPayout;
