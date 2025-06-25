 import React, { useState } from 'react';
import { ChevronDown, Plus, ArrowLeft, User, Search, Filter } from 'lucide-react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


// Mock data based on the provided image
const mockUsers = [
    {
        id: 161,
        name: 'anil waghmare',
        username: 'anil waghmare',
        email: 'anil.waghmare@austere.co.in',
        emailConfirmed: true,
        status: 'Active',
        lastSeen: '26 days ago',
        date: '2025-05-15 / 10:36',
        membershipPlan: 'Member',
        avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=AW'
    },
    {
        id: 160,
        name: 'Manas Baranwal',
        username: 'Manas Baranwal',
        email: 'tushar.tomar@austere.co.in',
        emailConfirmed: true,
        status: 'Active',
        lastSeen: '6 days ago',
        date: '2025-05-01 / 13:47',
        membershipPlan: 'Member',
        avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=MB'
    },
    {
        id: 159,
        name: 'Gourav Mane',
        username: 'Gourav Mane',
        email: 'gourav@mailinator.com',
        emailConfirmed: true,
        status: 'Active',
        lastSeen: '2 months ago',
        date: '2025-04-22 / 11:16',
        membershipPlan: 'Member',
        avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=GM'
    },
    {
        id: 158,
        name: 'Simmi Chaudhary',
        username: 'Simmi Chaudhary',
        email: 'abcd@gmail.com',
        emailConfirmed: true,
        status: 'Active',
        lastSeen: '2 months ago',
        date: '2025-04-15 / 13:06',
        membershipPlan: 'Member',
        avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=SC'
    },
    {
        id: 157,
        name: 'Simmi Chaudhary',
        username: 'Simmi Chaudhary',
        email: 'abc@gmail.com',
        emailConfirmed: true,
        status: 'Active',
        lastSeen: '12 months ago',
        date: '2025-04-15 / 12:58',
        membershipPlan: 'Member',
        avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=SC'
    },
    {
        id: 156,
        name: 'Rushikesh Mohite',
        username: 'Rushikesh Mohite',
        email: 'rushikesh@mailinator.com',
        emailConfirmed: true,
        status: 'Active',
        lastSeen: '3 months ago',
        date: '2025-03-27 / 10:22',
        membershipPlan: 'Member',
        avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=RM'
    },
    {
        id: 155,
        name: 'Rohan kalesi',
        username: 'Rohan kalesi',
        email: 'Rohankalesi35@gmail.com',
        emailConfirmed: true,
        status: 'Active',
        lastSeen: '3 months ago',
        date: '2025-03-18 / 15:34',
        membershipPlan: 'Member',
        avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=RK'
    },
];

// Reusable Dropdown Component - Updated for better arrow display
const Select = ({ children, className, ...props }) => (
    <div className={`relative ${className}`}>
        <select
            {...props}
            className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
            {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <ChevronDown size={20} />
        </div>
    </div>
);


// User Row Component
const UserRow = ({ user }) => (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="py-4 px-4 text-sm font-medium text-gray-600">{user.id}</td>
        <td className="py-4 px-4">
            <div className="flex items-center space-x-3">
                <img className="h-10 w-10 rounded-full object-cover" src={user.avatar} alt={user.name} />
                <div>
                    <div className="text-sm font-semibold text-gray-800 capitalize">{user.name}</div>
                    <div className="text-xs text-gray-500">( {user.username} )</div>
                </div>
            </div>
        </td>
        <td className="py-4 px-4">
            <div className="text-sm text-gray-800">{user.email}</div>
            {user.emailConfirmed && <div className="text-xs text-green-600">( Confirmed )</div>}
        </td>
        <td className="py-4 px-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                {user.membershipPlan}
            </span>
        </td>
        <td className="py-4 px-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {user.status}
            </span>
        </td>
        <td className="py-4 px-4 text-sm text-gray-600">{user.lastSeen}</td>
        <td className="py-4 px-4 text-sm text-gray-600 whitespace-nowrap">{user.date}</td>
        <td className="py-4 px-4">
             <Select className="w-full sm:w-40">
                <option>Select an option</option>
                <option>Edit</option>
                <option>Delete</option>
            </Select>
        </td>
    </tr>
);

// Main Users Component
const Users = () => {
    const [users] = useState(mockUsers);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
        <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Users</h1>
                    <div className="flex items-center space-x-2">
                        <button className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                            <Plus size={16} className="mr-2"/> Add User
                        </button>
                        <button className="flex items-center justify-center bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded-md border border-gray-300 transition duration-300">
                            <ArrowLeft size={16} className="mr-2"/> Back
                        </button>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="bg-white p-4 rounded-lg shadow-sm mb-6 border border-gray-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
                        <div className="w-full">
                            <label className="text-sm font-medium text-gray-600 mb-1 block">Show</label>
                            <Select>
                                <option>15</option>
                                <option>25</option>
                                <option>50</option>
                            </Select>
                        </div>
                         <div className="w-full">
                            <label className="text-sm font-medium text-gray-600 mb-1 block">Role</label>
                            <Select>
                                <option>All</option>
                                <option>Admin</option>
                                <option>Member</option>
                            </Select>
                        </div>
                        <div className="w-full">
                            <label className="text-sm font-medium text-gray-600 mb-1 block">Status</label>
                            <Select>
                                <option>All</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </Select>
                        </div>
                        <div className="w-full">
                            <label className="text-sm font-medium text-gray-600 mb-1 block">Email Status</label>
                             <Select>
                                <option>All</option>
                                <option>Confirmed</option>
                                <option>Unconfirmed</option>
                            </Select>
                        </div>
                        <div className="w-full lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="relative sm:col-span-2">
                                <label className="text-sm font-medium text-gray-600 mb-1 block">Search</label>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <Search size={18} className="absolute right-3 top-9 text-gray-400"/>
                            </div>
                            <div className="self-end">
                                <button className="w-full flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                                   <Filter size={16} className="mr-2" /> Filter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Users Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-x-auto border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {['Id', 'User', 'Email', 'Membership Plan', 'Status', 'Last seen', 'Date', 'Options'].map(header => (
                                    <th key={header} scope="col" className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredUsers.map(user => <UserRow key={user.id} user={user} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Adminfooter />
      
    </div>
    );
};


export default function App() {
    return <Users />;
}
