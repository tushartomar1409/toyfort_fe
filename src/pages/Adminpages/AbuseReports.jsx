import React from "react";
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

const AbuseReports = () => {
  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
              <Adminheader />
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Abuse Reports</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-4 py-2 font-semibold text-sm text-gray-700">Id</th>
                <th className="border px-4 py-2 font-semibold text-sm text-gray-700">Reported Content</th>
                <th className="border px-4 py-2 font-semibold text-sm text-gray-700">Sent By</th>
                <th className="border px-4 py-2 font-semibold text-sm text-gray-700">Description</th>
                <th className="border px-4 py-2 font-semibold text-sm text-gray-700">Date</th>
                <th className="border px-4 py-2 font-semibold text-sm text-gray-700">Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-600">
                  No records found!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
     <Adminfooter />
    </div>
  );
};

export default AbuseReports;
