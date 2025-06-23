import React from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";
import { Link } from 'react-router-dom';

const ApprovedProductComments = () => {
  const comments = [
    {
      id: 9,
      name: "anil",
      email: "anil.waghmare@austere.co.in",
      comment: "What is the capacity of the bottle?",
      url: "Rabitat Nutrilock Insulated Steel Bottle Mad Eye",
      ip: "172.71.178.154",
      date: "2025-05-15 / 11:54",
    },
    {
      id: 8,
      name: "Piyush Gupta",
      email: "tushar.tomar@austere.co.in",
      comment: "123",
      url: "Smiggle Away Hard Top Pencil Case Navy",
      ip: "172.69.195.101",
      date: "2025-05-01 / 17:06",
    },
    {
      id: 7,
      name: "Piyush Gupta",
      email: "tushar.tomar@austere.co.in",
      comment: "qwerty",
      url: "Smartivity Smart Busy Box",
      ip: "172.68.234.229",
      date: "2025-05-01 / 15:42",
    },
    {
      id: 5,
      name: "Piyush Gupta",
      email: "tushar.tomar@austere.co.in",
      comment: "Amazing",
      url: "Hot Wheels Track Builder Flame Stunt Pack HMC04",
      ip: "172.70.108.52",
      date: "2025-05-01 / 12:07",
    },
    {
      id: 2,
      name: "Piyush Gupta",
      email: "tushar.tomar@austere.co.in",
      comment: "laxman",
      url: "Chicco Baby Carrier Easyfit Black Night",
      ip: "172.68.234.164",
      date: "2025-05-01 / 11:48",
    },
  ];

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
                <Adminheader />
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Product Comments</h2>
      <div className="bg-white rounded shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Approved Comments</h3>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium">
            <li className="flex items-center space-x-2"> <Link to={"/admin/pending-product-comments"}>
        
            Pending Comments</Link></li>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead>
              <tr className="bg-gray-100 text-left text-sm text-gray-700">
                <th className="border px-4 py-2">
                  <input type="checkbox" />
                </th>
                <th className="border px-4 py-2">Id</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Comment</th>
                <th className="border px-4 py-2">URL</th>
                <th className="border px-4 py-2">Ip Address</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Options</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr key={comment.id} className="text-sm text-gray-800">
                  <td className="border px-4 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="border px-4 py-2">{comment.id}</td>
                  <td className="border px-4 py-2">{comment.name}</td>
                  <td className="border px-4 py-2">{comment.email}</td>
                  <td className="border px-4 py-2">{comment.comment}</td>
                  <td className="border px-4 py-2 text-blue-600 cursor-pointer hover:underline">{comment.url}</td>
                  <td className="border px-4 py-2">{comment.ip}</td>
                  <td className="border px-4 py-2">{comment.date}</td>
                  <td className="border px-4 py-2">
                    <select className="bg-purple-600 text-white text-sm px-2 py-1 rounded">
                      <option>Select an option</option>
                      <option>Edit</option>
                      <option>Delete</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Adminfooter />
        </div>
  );
};

export default ApprovedProductComments;
