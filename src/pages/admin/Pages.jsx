 import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- 1. IMPORT LINK HERE
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

// --- Reusable Sub-components ---

// Header for table columns with sorting indicator
const SortableHeader = ({ children }) => (
  <th className="p-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
    <div className="flex items-center">
      {children}
      {/* You can replace this with a proper icon from a library */}
      <span className="ml-2 text-gray-400">↕</span>
    </div>
  </th>
);

// Green/Red icon for the "Visibility" column
const VisibilityIcon = ({ isVisible }) => {
    const bgColor = isVisible ? 'bg-green-100' : 'bg-red-100';
    const iconColor = isVisible ? 'text-green-600' : 'text-red-600';
    const icon = isVisible ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
    ) : (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
          <path d="M12.454 16.697L9.727 13.97a2 2 0 01-2.121-2.121l-2.727-2.727A10.004 10.004 0 01.458 10c1.274 4.057 5.022 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
        </svg>
    );

    return (
      
        <div className={`p-1 inline-flex items-center justify-center rounded-full ${bgColor} ${iconColor}`}>
            {icon}
        </div>
    );
};


// Custom dropdown for the "Options" column
const OptionsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none"
      >
        Select an option
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Edit</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Delete</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">View</a>
          </div>
        </div>
      )}
    </div>
  );
};


// --- Main Pages Component ---

export default function Pages() {
  // Mock data based on the screenshot
  const pagesData = [
    { id: 8, title: 'Privacy Policy', language: 'English', location: 'Information', visibility: true, pageType: 'Default', date: '2023-07-16 / 13:22' },
    { id: 7, title: 'Write For Us', language: 'English', location: 'Quick Links', visibility: true, pageType: 'Default', date: '2023-06-28 / 15:49' },
    { id: 6, title: 'Shipping Policy', language: 'English', location: 'Information', visibility: true, pageType: 'Default', date: '2023-06-28 / 15:43' },
    { id: 5, title: 'About Us', language: 'English', location: 'Information', visibility: true, pageType: 'Default', date: '2023-06-28 / 15:40' },
    { id: 4, title: 'Shops', language: 'English', location: 'Quick Links', visibility: false, pageType: 'Default', date: '2021-11-03 / 05:28' },
    { id: 3, title: 'Blog', language: 'English', location: 'Quick Links', visibility: true, pageType: 'Default', date: '2020-11-21 / 16:10' },
    { id: 2, title: 'Contact', language: 'English', location: 'Quick Links', visibility: true, pageType: 'Default', date: '2020-11-21 / 16:10' },
    { id: 1, title: 'Terms & Conditions', language: 'English', location: 'Information', visibility: true, pageType: 'Default', date: '2020-11-21 / 16:10' },
  ];

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
            Pages
          </h1>
          {/* 2. REPLACE THE BUTTON WITH A LINK */}
          <Link to="/admin/add-page" className="px-5 py-2.5 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 flex items-center space-x-2">
             <span className="text-xl">+</span>
             <span>Add Page</span>
          </Link>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-lg shadow p-6">

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label htmlFor="show-entries" className="text-sm text-gray-600">Show</label>
                <select id="show-entries" className="border border-gray-300 rounded-md px-3 py-1.5 focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                  <option>15</option>
                  <option>25</option>
                  <option>50</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                 <label htmlFor="language-filter" className="text-sm text-gray-600">Language</label>
                <select id="language-filter" className="border border-gray-300 rounded-md px-3 py-1.5 focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                  <option>All</option>
                  <option>English</option>
                  <option>Spanish</option>
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-2">
               <label htmlFor="search" className="text-sm text-gray-600">Search:</label>
               <input type="text" id="search" className="border border-gray-300 rounded-md px-3 py-1.5 w-48 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <SortableHeader>Id</SortableHeader>
                  <SortableHeader>Title</SortableHeader>
                  <SortableHeader>Language</SortableHeader>
                  <SortableHeader>Location</SortableHeader>
                  <SortableHeader>Visibility</SortableHeader>
                  <SortableHeader>Page Type</SortableHeader>
                  <SortableHeader>Date</SortableHeader>
                  <SortableHeader>Options</SortableHeader>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pagesData.map((page) => (
                  <tr key={page.id} className="hover:bg-gray-50">
                    <td className="p-3 whitespace-nowrap text-sm font-medium text-gray-800">{page.id}</td>
                    <td className="p-3 whitespace-nowrap text-sm text-gray-600">{page.title}</td>
                    <td className="p-3 whitespace-nowrap text-sm text-gray-600">{page.language}</td>
                    <td className="p-3 whitespace-nowrap text-sm text-gray-600">{page.location}</td>
                    <td className="p-3 whitespace-nowrap text-sm text-gray-600">
                        <VisibilityIcon isVisible={page.visibility} />
                    </td>
                    <td className="p-3 whitespace-nowrap">
                        <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-md bg-gray-200 text-gray-800">
                           {page.pageType}
                        </span>
                    </td>
                    <td className="p-3 whitespace-nowrap text-sm text-gray-600">{page.date}</td>
                    <td className="p-3 whitespace-nowrap text-right text-sm font-medium">
                      <OptionsDropdown />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

           {/* Pagination */}
           <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
                <p className="text-sm text-gray-600 mb-4 sm:mb-0">
                    Number of Entries: {pagesData.length}
                </p>
                <div className="flex items-center space-x-1">
                    <button className="px-3 py-1 border rounded-md text-sm text-gray-500 bg-white hover:bg-gray-100">&lt;</button>
                    <button className="px-3 py-1 border rounded-md text-sm text-white bg-indigo-600">1</button>
                    <button className="px-3 py-1 border rounded-md text-sm text-gray-500 bg-white hover:bg-gray-100">&gt;</button>
                </div>
            </div>
        </div>
      </div>
    </div>
    <Adminfooter />
      
    </div>
  );
}
