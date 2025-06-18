import React, { useState } from 'react';
import { ChevronDown, Info } from 'lucide-react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";



// Mock data - initially empty to show the "No records found" message.
// You can populate this array with data from an API call.
const mockRequests = [
    // Example of a request item:
    /*
    {
        id: 1,
        user: {
            name: 'John Doe',
            avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=JD'
        },
        shopDescription: 'Selling handmade crafts and jewelry.',
        requiredFiles: '3 files',
        membershipPlan: 'Premium',
        payment: 'Paid',
    }
    */
];

// Reusable Dropdown Component for options
const Select = ({ children, className }) => (
    <div className={`relative ${className}`}>
        <select className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500">
            {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <ChevronDown size={20} />
        </div>
    </div>
);

// Request Row Component
const RequestRow = ({ request }) => (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="py-4 px-4 text-sm font-medium text-gray-600">{request.id}</td>
        <td className="py-4 px-4">
            <div className="flex items-center space-x-3">
                <img className="h-10 w-10 rounded-full object-cover" src={request.user.avatar} alt={request.user.name} />
                <div>
                    <div className="text-sm font-semibold text-gray-800">{request.user.name}</div>
                </div>
            </div>
        </td>
        <td className="py-4 px-4 text-sm text-gray-600">{request.shopDescription}</td>
        <td className="py-4 px-4 text-sm text-gray-600">{request.requiredFiles}</td>
        <td className="py-4 px-4 text-sm text-gray-600">{request.membershipPlan}</td>
        <td className="py-4 px-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${request.payment === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {request.payment}
            </span>
        </td>
        <td className="py-4 px-4">
            <Select className="w-full sm:w-40">
                <option>Select an option</option>
                <option>Approve</option>
                <option>Reject</option>
                <option>View Details</option>
            </Select>
        </td>
    </tr>
);

// Main Shop Opening Requests Component
const ShopOpeningRequests = () => {
    // State to hold the requests. Initially empty.
    const [requests] = useState(mockRequests);

    return (
        <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
        <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h1 className="text-xl font-bold text-gray-800 mb-6">Shop Opening Requests</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    {['Id', 'User', 'Shop Description', 'Required Files', 'Membership Plan', 'Payment', 'Options'].map(header => (
                                        <th key={header} scope="col" className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {requests.length > 0 ? (
                                    requests.map(request => <RequestRow key={request.id} request={request} />)
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="py-16 text-center">
                                            <div className="flex flex-col items-center justify-center text-gray-500">
                                                <Info size={48} className="mb-4 text-gray-300" />
                                                <p className="text-lg font-medium">No records found!</p>
                                                <p className="text-sm">There are currently no shop opening requests to display.</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <Adminfooter />
      
    </div>
    );
};

export default function App() {
    return <ShopOpeningRequests />;
}
