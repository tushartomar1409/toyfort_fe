 import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const CurrencySettings = () => {
    const [defaultCurrency, setDefaultCurrency] = useState('INR');
    const [allowAllCurrencies, setAllowAllCurrencies] = useState(true);
    const [converterStatus, setConverterStatus] = useState('Disable');
    const [autoUpdateRates, setAutoUpdateRates] = useState(false);
    const [converterApi, setConverterApi] = useState('');
    const [accessKey, setAccessKey] = useState('');
    const [showEntries, setShowEntries] = useState(15);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const currencies = [
        { id: 62, name: 'India Rupee', code: 'INR', symbol: '₹', status: 'Active', rate: 'Default' },
        { id: 1, name: 'US Dollar', code: 'USD', symbol: '$', status: 'Inactive', rate: 1 },
        { id: 2, name: 'Euro', code: 'EUR', symbol: '€', status: 'Inactive', rate: 1 },
        { id: 3, name: 'Canada Dollar', code: 'CAD', symbol: '$', status: 'Inactive', rate: 1 },
        { id: 4, name: 'UAE Dirham', code: 'AED', symbol: 'د.إ', status: 'Inactive', rate: 1 },
        { id: 5, name: 'Afghanistan Afghani', code: 'AFN', symbol: '؋', status: 'Inactive', rate: 1 },
        { id: 6, name: 'Albania Lek', code: 'ALL', symbol: 'Lek', status: 'Inactive', rate: 1 },
        { id: 9, name: 'Kwanza', code: 'AOA', symbol: 'Kz', status: 'Inactive', rate: 1 },
        { id: 10, name: 'Argentina Peso', code: 'ARS', symbol: '$', status: 'Inactive', rate: 1 },
        { id: 11, name: 'Australia Dollar', code: 'AUD', symbol: '$', status: 'Inactive', rate: 1 },
        { id: 12, name: 'Aruba Guilder', code: 'AWG', symbol: 'ƒ', status: 'Inactive', rate: 1 },
        { id: 13, name: 'Azerbaijan New Manat', code: 'AZN', symbol: 'ман', status: 'Inactive', rate: 1 },
        { id: 14, name: 'Bosnia and Herzegovina Convertible Marka', code: 'BAM', symbol: 'KM', status: 'Inactive', rate: 1 },
    ];

    // Filtered currencies based on search term
    const filteredCurrencies = currencies.filter(currency =>
        currency.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
         <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
  
        <div className="p-6 bg-gray-50 min-h-screen">
            <style>{`
                .btn {
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    cursor: pointer;
                    font-weight: 500;
                    transition: background-color 0.2s;
                    text-decoration: none; /* To remove underline from link */
                    display: inline-block; /* For proper padding and alignment */
                }
                .btn-primary {
                    background-color: #3b82f6;
                    color: white;
                }
                .btn-primary:hover {
                    background-color: #2563eb;
                }
                 .btn-secondary {
                    background-color: #6b7280;
                    color: white;
                }
                .btn-secondary:hover {
                    background-color: #4b5563;
                }
                .btn-success {
                    background-color: #10b981;
                    color: white;
                }
                .btn-success:hover {
                    background-color: #059669;
                }
                .card {
                    background-color: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 0.5rem;
                    padding: 1.5rem;
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
                }
                .form-select, .form-input {
                    width: 100%;
                    padding: 0.5rem 0.75rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.375rem;
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                }
                .table-auto {
                    width: 100%;
                    border-collapse: collapse;
                }
                .table-auto th, .table-auto td {
                    border: 1px solid #e5e7eb;
                    padding: 0.75rem 1rem;
                    text-align: left;
                    font-size: 0.875rem;
                }
                 .table-auto th {
                    background-color: #f9fafb;
                }
                 .status-active {
                    background-color: #d1fae5;
                    color: #065f46;
                    padding: 0.25rem 0.5rem;
                    border-radius: 9999px;
                    font-size: 0.75rem;
                    font-weight: 500;
                }
                .status-inactive {
                    background-color: #f3f4f6;
                    color: #4b5563;
                    padding: 0.25rem 0.5rem;
                    border-radius: 9999px;
                    font-size: 0.75rem;
                    font-weight: 500;
                }
                 .pagination {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    list-style: none;
                }
                .pagination li {
                    margin: 0 0.25rem;
                }
                .pagination a {
                    display: block;
                    padding: 0.5rem 0.75rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.375rem;
                    color: #374151;
                    cursor: pointer;
                }
                .pagination li.active a {
                    background-color: #3b82f6;
                    color: white;
                    border-color: #3b82f6;
                }
                 .pagination li.disabled a {
                    color: #9ca3af;
                    cursor: not-allowed;
                }
            `}</style>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Currency Settings Card */}
                <div className="card">
                    <h2 className="text-xl font-semibold mb-4">Currency Settings</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Default Currency</label>
                            <select
                                className="form-select mt-1"
                                value={defaultCurrency}
                                onChange={(e) => setDefaultCurrency(e.target.value)}
                            >
                                <option value="INR">India Rupee (₹)</option>
                                <option value="USD">US Dollar ($)</option>
                                <option value="EUR">Euro (€)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Allow All Currencies for Ordinary Listing</label>
                            <div className="mt-2 flex items-center space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="allowCurrencies"
                                        checked={allowAllCurrencies}
                                        onChange={() => setAllowAllCurrencies(true)}
                                    />
                                    <span className="ml-2">Yes</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="allowCurrencies"
                                        checked={!allowAllCurrencies}
                                        onChange={() => setAllowAllCurrencies(false)}
                                    />
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>

                {/* Currency Converter Card */}
                <div className="card">
                    <h2 className="text-xl font-semibold mb-4">Currency Converter</h2>
                    <div className="space-y-4">
                        <div>
                           <label className="block text-sm font-medium text-gray-700">Status</label>
                           <div className="mt-2 flex items-center space-x-4">
                               <label className="inline-flex items-center">
                                   <input type="radio" name="converterStatus" checked={converterStatus === 'Enable'} onChange={() => setConverterStatus('Enable')} />
                                   <span className="ml-2">Enable</span>
                               </label>
                               <label className="inline-flex items-center">
                                   <input type="radio" name="converterStatus" checked={converterStatus === 'Disable'} onChange={() => setConverterStatus('Disable')} />
                                   <span className="ml-2">Disable</span>
                               </label>
                           </div>
                        </div>
                         <div>
                           <label className="block text-sm font-medium text-gray-700">Automatically Update Exchange Rates</label>
                           <div className="mt-2 flex items-center space-x-4">
                               <label className="inline-flex items-center">
                                   <input type="radio" name="autoUpdate" checked={autoUpdateRates} onChange={() => setAutoUpdateRates(true)} />
                                   <span className="ml-2">Yes</span>
                               </label>
                               <label className="inline-flex items-center">
                                   <input type="radio" name="autoUpdate" checked={!autoUpdateRates} onChange={() => setAutoUpdateRates(false)} />
                                   <span className="ml-2">No</span>
                               </label>
                           </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Currency Converter API</label>
                            <select
                                className="form-select mt-1"
                                value={converterApi}
                                onChange={(e) => setConverterApi(e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="api1">API Layer</option>
                                <option value="api2">ExchangeRate-API</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Access Key</label>
                            <input
                                type="text"
                                className="form-input mt-1"
                                value={accessKey}
                                onChange={(e) => setAccessKey(e.target.value)}
                            />
                        </div>

                        <div>
                            <button className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Currencies List Card */}
            <div className="card">
                 <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Currencies</h2>
                    {/* MODIFIED LINE: Changed button to a Link */}
                    <Link to="/admin/addCurrency" className="btn btn-success">+ Add Currency</Link>
                 </div>
                 <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                        <span>Show</span>
                        <select
                            className="form-select"
                            style={{width: 'auto'}}
                            value={showEntries}
                            onChange={(e) => setShowEntries(e.target.value)}
                        >
                            <option value="15">15</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                         <span>entries</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>Search:</span>
                        <input
                            type="text"
                            className="form-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                 </div>

                <div className="overflow-x-auto">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Currency</th>
                                <th>Status</th>
                                <th>Currency Code</th>
                                <th>Currency Symbol</th>
                                <th>Exchange Rate</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCurrencies.slice(0, showEntries).map((currency) => (
                                <tr key={currency.id}>
                                    <td>{currency.id}</td>
                                    <td>{currency.name}</td>
                                    <td>
                                        <span className={currency.status === 'Active' ? 'status-active' : 'status-inactive'}>
                                            {currency.status}
                                        </span>
                                    </td>
                                    <td>{currency.code}</td>
                                    <td>{currency.symbol}</td>
                                    <td>
                                        {currency.rate === 'Default' ? (
                                            <span>Default</span>
                                        ) : (
                                            <input type="number" defaultValue={currency.rate} className="form-input w-24" />
                                        )}
                                    </td>
                                    <td>
                                         <select className="form-select" defaultValue="">
                                            <option value="" disabled>Select an option</option>
                                            <option value="edit">Edit</option>
                                            <option value="delete">Delete</option>
                                            <option value="activate">Activate</option>
                                         </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                 <div className="flex justify-between items-center mt-4">
                    <div>
                        <p className="text-sm text-gray-700">
                           Number of Entries: 158
                        </p>
                    </div>
                    <nav>
                        <ul className="pagination">
                            <li className="disabled"><a href="#">&laquo;</a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><span>...</span></li>
                            <li><a href="#">11</a></li>
                            <li><a href="#">&raquo;</a></li>
                        </ul>
                    </nav>
                 </div>
            </div>
        </div>
         <Adminfooter />
      
    </div>
    );
};

export default CurrencySettings;