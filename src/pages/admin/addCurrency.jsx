 import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

const AddCurrency = () => {
    // State for text inputs
    const [currencyName, setCurrencyName] = useState('');
    const [currencyCode, setCurrencyCode] = useState('');
    const [currencySymbol, setCurrencySymbol] = useState('');

    // State for radio button groups
    const [currencyFormat, setCurrencyFormat] = useState('comma'); // 'comma' or 'dot'
    const [symbolFormat, setSymbolFormat] = useState('left'); // 'left' or 'right'
    const [addSpace, setAddSpace] = useState('no'); // 'yes' or 'no'
    const [status, setStatus] = useState('inactive'); // 'active' or 'inactive'

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            currencyName,
            currencyCode,
            currencySymbol,
            currencyFormat,
            symbolFormat,
            addSpace,
            status
        });
        alert('Currency added! Check the console for the form data.');
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
            <style>{`
                .card {
                    background-color: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 0.5rem;
                    padding: 1.5rem;
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
                    width: 100%;
                    max-width: 800px;
                }
                .form-input {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.375rem;
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                }
                .form-input::placeholder {
                    color: #9ca3af;
                }
                .form-label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                    color: #374151;
                }
                .radio-group {
                    display: flex;
                    gap: 1.5rem;
                    margin-top: 0.5rem;
                }
                .radio-label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }
                .radio-input {
                    appearance: none;
                    width: 1.25rem;
                    height: 1.25rem;
                    border: 2px solid #d1d5db;
                    border-radius: 50%;
                    position: relative;
                    margin-right: 0.5rem;
                    transition: all 0.2s;
                }
                .radio-input:checked {
                    border-color: #4f46e5;
                }
                .radio-input:checked::before {
                    content: '';
                    display: block;
                    width: 0.75rem;
                    height: 0.75rem;
                    background-color: #4f46e5;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                .btn {
                    padding: 0.6rem 1.25rem;
                    border-radius: 0.375rem;
                    cursor: pointer;
                    font-weight: 500;
                    transition: background-color 0.2s;
                    border: none;
                    display: inline-flex;
                    align-items: center;
                    text-decoration: none; /* Remove underline from links styled as buttons */
                }
                .btn-primary {
                    background-color: #2563eb;
                    color: white;
                }
                .btn-primary:hover {
                    background-color: #1d4ed8;
                }
                .btn-secondary {
                    background-color: #10b981;
                    color: white;
                }
                 .btn-secondary:hover {
                    background-color: #059669;
                }
            `}</style>
            <div className="card">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">Add Currency</h1>
                    {/* MODIFIED LINE: Changed button to a Link */}
                    <Link to="/admin/currency-settings" className="btn btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        Currencies
                    </Link>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="form-label" htmlFor="currencyName">Currency Name</label>
                        <input
                            id="currencyName"
                            type="text"
                            className="form-input"
                            placeholder="Ex: US Dollar"
                            value={currencyName}
                            onChange={(e) => setCurrencyName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="form-label" htmlFor="currencyCode">Currency Code</label>
                        <input
                            id="currencyCode"
                            type="text"
                            className="form-input"
                            placeholder="Ex: USD"
                            value={currencyCode}
                            onChange={(e) => setCurrencyCode(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="form-label" htmlFor="currencySymbol">Currency Symbol</label>
                        <input
                            id="currencySymbol"
                            type="text"
                            className="form-input"
                            placeholder="Ex: $"
                            value={currencySymbol}
                            onChange={(e) => setCurrencySymbol(e.target.value)}
                        />
                    </div>

                    {/* Radio Groups */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="form-label">Currency Format (Thousands Seperator)</label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input type="radio" className="radio-input" name="currencyFormat" value="comma" checked={currencyFormat === 'comma'} onChange={(e) => setCurrencyFormat(e.target.value)} />
                                    <span>1,234,567.89</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" className="radio-input" name="currencyFormat" value="dot" checked={currencyFormat === 'dot'} onChange={(e) => setCurrencyFormat(e.target.value)} />
                                    <span>1.234.567,89</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="form-label">Currency Symbol Format</label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input type="radio" className="radio-input" name="symbolFormat" value="left" checked={symbolFormat === 'left'} onChange={(e) => setSymbolFormat(e.target.value)} />
                                    <span>$100 (Left)</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" className="radio-input" name="symbolFormat" value="right" checked={symbolFormat === 'right'} onChange={(e) => setSymbolFormat(e.target.value)} />
                                    <span>100$ (Right)</span>
                                </label>
                            </div>
                        </div>
                         <div>
                            <label className="form-label">Add Space Between Money and Currency</label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input type="radio" className="radio-input" name="addSpace" value="yes" checked={addSpace === 'yes'} onChange={(e) => setAddSpace(e.target.value)} />
                                    <span>Yes</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" className="radio-input" name="addSpace" value="no" checked={addSpace === 'no'} onChange={(e) => setAddSpace(e.target.value)} />
                                    <span>No</span>
                                </label>
                            </div>
                        </div>
                         <div>
                            <label className="form-label">Status</label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input type="radio" className="radio-input" name="status" value="active" checked={status === 'active'} onChange={(e) => setStatus(e.target.value)} />
                                    <span>Active</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" className="radio-input" name="status" value="inactive" checked={status === 'inactive'} onChange={(e) => setStatus(e.target.value)} />
                                    <span>Inactive</span>
                                </label>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-end pt-4">
                        <button type="submit" className="btn btn-primary">Add Currency</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCurrency;