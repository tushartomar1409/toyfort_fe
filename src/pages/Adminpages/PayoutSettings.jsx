import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const payoutMethods = [
  { key: 'paypal', label: 'PayPal' },
  { key: 'bitcoin', label: 'Bitcoin (BTC)' },
  { key: 'iban', label: 'IBAN' },
  { key: 'swift', label: 'SWIFT' },
];

const initialSettings = {
  paypal: { enabled: true, minAmount: 50 },
  bitcoin: { enabled: false, minAmount: 50 },
  iban: { enabled: true, minAmount: 50 },
  swift: { enabled: true, minAmount: 50 },
};

const PayoutSettings = () => {
  const [settings, setSettings] = useState(initialSettings);

  const handleStatusChange = (method, enabled) => {
    setSettings(prev => ({
      ...prev,
      [method]: { ...prev[method], enabled }
    }));
  };

  const handleAmountChange = (method, value) => {
    setSettings(prev => ({
      ...prev,
      [method]: { ...prev[method], minAmount: value }
    }));
  };

  const handleSave = (method) => {
    alert(`${payoutMethods.find(m => m.key === method).label} settings saved!`);
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
            <Adminheader />
    <div style={{
      minHeight: '100vh',
      background: '#f3f4f6', // grey background
      padding: '40px 0',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ marginBottom: 32 }}>Payout Settings</h1>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', // exactly 2 cards per row
          gap: 40, // spacing between cards
          justifyItems: 'center',
        }}>
          {payoutMethods.map(method => (
            <div key={method.key} style={{
              background: '#fff',
              borderRadius: 12,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              padding: 40,
              width: '100%',
              maxWidth: 540, // bigger card width
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 300,
              border: '1px solid #e5e7eb',
            }}>
              <h3 style={{ marginBottom: 24 }}>{method.label}</h3>
              <div style={{ marginBottom: 32 }}>
                <div style={{ marginBottom: 8, fontWeight: 500 }}>Status</div>
                <label style={{ marginRight: 32, display: 'inline-flex', alignItems: 'center' }}>
                  <input
                    type="radio"
                    name={`${method.key}-status`}
                    checked={settings[method.key].enabled}
                    onChange={() => handleStatusChange(method.key, true)}
                    style={{ marginRight: 8 }}
                  />
                  Enable
                </label>
                <label style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <input
                    type="radio"
                    name={`${method.key}-status`}
                    checked={!settings[method.key].enabled}
                    onChange={() => handleStatusChange(method.key, false)}
                    style={{ marginRight: 8 }}
                  />
                  Disable
                </label>
              </div>
              <div style={{ marginBottom: 32 }}>
                <div style={{ marginBottom: 8, fontWeight: 500 }}>
                  Minimum payout amount (₹)
                </div>
                <input
                  type="number"
                  min="0"
                  value={settings[method.key].minAmount}
                  onChange={e => handleAmountChange(method.key, e.target.value)}
                  style={{
                    width: '100%',
                    padding: 12,
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    fontSize: 18,
                  }}
                />
              </div>
              <button
                onClick={() => handleSave(method.key)}
                style={{
                  background: '#2196f3',
                  color: '#fff',
                  border: 'none',
                  padding: '14px 32px',
                  borderRadius: 6,
                  fontSize: 18,
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                }}
              >
                Save Changes
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
     <Adminfooter/>
    </div>
  );
};

export default PayoutSettings;
