 import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // Importing an icon for the send button
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const Newsletter = () => {
  // Sample data for users, replace with actual data fetching in a real application
  const [users, setUsers] = useState([
    { id: 1, username: 'Rahul', email: 'rahul.tenii@austere.co.in' },
    { id: 2, username: 'Rohit', email: 'rohit.bhargavi@austere.co.in' },
    { id: 3, username: 'Mehul', email: 'mehul.kumar@austere.co.in' },
    { id: 4, username: 'Deepika', email: 'deepika.seksaria@gmail.com' },
    { id: 5, username: 'Deepika', email: 'deepikaseksaria@gmail.com' },
    { id: 6, username: 'Rashmeet', email: 'rashmeetbhatiamua@gmail.com' },
    { id: 7, username: 'Pinky', email: 'pinkykumar10089@gmail.com' },
    { id: 8, username: 'Piyush', email: 'tushartomar1409@gmail.com' },
    { id: 9, username: 'Mr Frank', email: 'alvarasefrank89@gmail.com' },
    { id: 10, username: 'gopi', email: 'jjonna421@gmail.com' },
    { id: 11, username: 'Victor', email: 'jaspreetsidhu35751@gmail.com' },
    { id: 12, username: 'Nandani', email: 'nandani.duggal@opo.razorpay.com' },
    { id: 13, username: 'Micael', email: 'micaelperera72@gmail.com' },
    { id: 14, username: 'Arathy', email: 'arathysadanandan1991@gmail.com' },
    { id: 159, username: 'Gourav', email: 'gourav@mailinator.cpm' },
    { id: 160, username: 'Manas', email: 'tushar.tomar@austere.co.in' },
    { id: 161, username: 'anil', email: 'anil.waghmare@austere.co.in' },
  ]);

  const [status, setStatus] = useState('enable');
  const [newsletterPopup, setNewsletterPopup] = useState('disable');

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Newsletter</h1>

      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Users Section */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Users</h2>
          <div className="overflow-x-auto max-h-80 custom-scrollbar"> {/* Added custom-scrollbar and max-h-80 */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0"> {/* Made header sticky */}
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                      <span className="ml-2">{user.id}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.username}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2 w-full justify-center">
              <FaPaperPlane />
              <span>Send Email</span>
            </button>
          </div>
        </div>

        {/* Subscribers Section (modified to fit the new layout, without the "No records found!") */}
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Subscribers</h2>
          {/* This section now removed as the "Send Email" button is part of the Users section */}
          <p className="text-gray-500 mb-4">No records found!</p> {/* Keep this if 'Subscribers' is distinct from 'Users' with send email */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2">
              <FaPaperPlane />
              <span>Send Email</span>
            </button>
        </div>
      </div>

      {/* Settings Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Settings</h2>

        {/* Status */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
          <div className="flex items-center">
            <label className="inline-flex items-center mr-6">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-blue-600"
                name="status"
                value="enable"
                checked={status === 'enable'}
                onChange={() => setStatus('enable')}
              />
              <span className="ml-2 text-gray-700">Enable</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-blue-600"
                name="status"
                value="disable"
                checked={status === 'disable'}
                onChange={() => setStatus('disable')}
              />
              <span className="ml-2 text-gray-700">Disable</span>
            </label>
          </div>
        </div>

        {/* Newsletter Popup */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Newsletter Popup</label>
          <div className="flex items-center">
            <label className="inline-flex items-center mr-6">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-blue-600"
                name="newsletterPopup"
                value="enable"
                checked={newsletterPopup === 'enable'}
                onChange={() => setNewsletterPopup('enable')}
              />
              <span className="ml-2 text-gray-700">Enable</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-blue-600"
                name="newsletterPopup"
                value="disable"
                checked={newsletterPopup === 'disable'}
                onChange={() => setNewsletterPopup('disable')}
              />
              <span className="ml-2 text-gray-700">Disable</span>
            </label>
          </div>
        </div>

        {/* Image */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Image</label>
          <div className="flex items-center space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">
              Select Image
            </button>
            <span className="text-gray-500">(.png, .jpg, .jpeg)</span>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
            Save Changes
          </button>
        </div>
      </div>
    </div>
      <Adminfooter />
      
    </div>
  );
};

export default Newsletter;