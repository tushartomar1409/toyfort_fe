import React, { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

// Mock data based on the provided image
const mockRoles = [
    {
        name: 'Super Admin',
        isDefault: true,
        permissions: ['All Permissions'],
    },
    {
        name: 'Vendor',
        isDefault: true,
        permissions: ['Vendor'],
    },
    {
        name: 'Member',
        isDefault: true,
        permissions: [],
    },
    {
        name: 'Data Entry',
        isDefault: false,
        permissions: ['Orders', 'Products', 'Admin Panel'],
    },
];

// Reusable Permission Tag Component
const PermissionTag = ({ permission }) => {
    const isAllPermissions = permission === 'All Permissions';
    return (
        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-md text-white ${isAllPermissions ? 'bg-green-500' : 'bg-green-600'}`}>
            {permission}
        </span>
    );
};


// Role Row Component
const RoleRow = ({ role }) => (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="py-4 px-6">
            <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-gray-800">{role.name}</span>
                {role.isDefault && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-gray-200 text-gray-600 rounded-md">
                        Default
                    </span>
                )}
            </div>
        </td>
        <td className="py-4 px-6">
            <div className="flex flex-wrap gap-2">
                {role.permissions.length > 0 ? (
                    role.permissions.map((permission, index) => (
                        <PermissionTag key={index} permission={permission} />
                    ))
                ) : (
                     <span className="text-sm text-gray-400">-</span>
                )}
            </div>
        </td>
        <td className="py-4 px-6">
            <div className="flex items-center space-x-2">
                <button className="flex items-center justify-center bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-md border border-gray-300 transition duration-300">
                    <Edit size={16} className="mr-2" /> Edit
                </button>
                {!role.isDefault && (
                     <button className="flex items-center justify-center bg-white hover:bg-red-50 text-red-600 font-semibold py-2 px-4 rounded-md border border-gray-300 hover:border-red-400 transition duration-300">
                        <Trash2 size={16} />
                    </button>
                )}
            </div>
        </td>
    </tr>
);

// Main Roles & Permissions Component
const RolesAndPermissions = () => {
    const [roles] = useState(mockRoles);

    return (
         <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
        <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                        <h1 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">Roles & Permissions</h1>
                        <button className="flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                            <Plus size={18} className="mr-2" /> Add Role
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b-2 border-gray-200">
                                    {['Role Name', 'Permissions', 'Options'].map(header => (
                                        <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider bg-white">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {roles.map((role, index) => <RoleRow key={index} role={role} />)}
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
    return <RolesAndPermissions />;
}
