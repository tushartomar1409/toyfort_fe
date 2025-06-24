import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaTrash, FaCheck } from 'react-icons/fa';

export default function LatestComments() {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [viewApprovedOnly, setViewApprovedOnly] = useState(false);
  const location = useLocation();

  const isAdmin = location.pathname.includes('admin');

  useEffect(() => {
    const fetchedComments = [
      {
        id: 9,
        name: 'anil',
        email: 'anil@test.com',
        comment: 'What is the capacity of the bottle?',
        product: 'Rabitat Nutrilock Insulated Steel Bottle Mad Eye',
        ip: '172.68.234.164',
        date: '2025-05-15 / 11:54',
        approved: true
      },
      {
        id: 3,
        name: 'Dummy',
        email: 'user@gmm.co.in',
        comment: '1234',
        product: 'Chicco Baby Carrier Easyfit Black Night',
        ip: '172.68.234.164',
        date: '2025-05-01 / 11:48',
        approved: false
      },
      {
        id: 1,
        name: 'abhi tyagi',
        email: 'laxamn.mule@austere.co.in',
        comment: 'testing',
        product: 'Chicco Baby Carrier Easyfit Oxford',
        ip: '::1',
        date: '2025-05-01 / 11:46',
        approved: true
      },
    ];

    setComments(fetchedComments);
  }, [location.pathname]);

  useEffect(() => {
    let list = comments;
    if (!isAdmin || viewApprovedOnly) {
      list = list.filter(c => c.approved);
    }
    setFilteredComments(list);
  }, [comments, viewApprovedOnly, isAdmin]);

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleDelete = (id) => {
    const toDelete = id ? [id] : selectedIds;
    setComments((prev) => prev.filter((c) => !toDelete.includes(c.id)));
    setSelectedIds([]);
  };

  const handleApprove = (id) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, approved: true } : c))
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">
          {isAdmin ? 'Product Comments' : 'Comments'}
        </h2>
        {isAdmin && (
          <button
            onClick={() => setViewApprovedOnly(!viewApprovedOnly)}
            className="bg-green-600 text-white px-4 py-2 rounded flex items-center"
          >
            <FaCheck className="mr-2" /> Approved Comments
          </button>
        )}
      </div>

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-200 text-left">
            {isAdmin && (
              <th className="p-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedIds(
                      e.target.checked ? filteredComments.map((c) => c.id) : []
                    )
                  }
                  checked={selectedIds.length === filteredComments.length && filteredComments.length > 0}
                />
              </th>
            )}
            <th className="p-2">Id</th>
            <th className="p-2">Username</th>
            {isAdmin && <th className="p-2">Email</th>}
            <th className="p-2">Comment</th>
            <th className="p-2">Product</th>
            <th className="p-2">Date</th>
            {isAdmin && <th className="p-2">IP Address</th>}
            {isAdmin && <th className="p-2">Options</th>}
          </tr>
        </thead>
        <tbody>
          {filteredComments.map((c) => (
            <tr key={c.id} className="border-t">
              {isAdmin && (
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(c.id)}
                    onChange={() => toggleSelect(c.id)}
                  />
                </td>
              )}
              <td className="p-2">{c.id}</td>
              <td className="p-2">{c.name}</td>
              {isAdmin && <td className="p-2">{c.email}</td>}
              <td className="p-2">{c.comment}</td>
              <td className="p-2">{c.product}</td>
              <td className="p-2">{c.date}</td>
              {isAdmin && <td className="p-2">{c.ip}</td>}
              {isAdmin && (
                <td className="p-2">
                  <select
                    onChange={(e) => {
                      if (e.target.value === 'approve') handleApprove(c.id);
                      if (e.target.value === 'delete') handleDelete(c.id);
                    }}
                    className="p-1 border rounded bg-purple-600 text-white"
                  >
                    <option>Select an option</option>
                    {!c.approved && <option value="approve">Approve</option>}
                    <option value="delete">Delete</option>
                  </select>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {isAdmin && selectedIds.length > 0 && (
        <button
          onClick={() => handleDelete()}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
        >
          Delete Selected
        </button>
      )}

      <div className="mt-4 font-semibold">
        Number of Entries: {filteredComments.length}
      </div>
    </div>
  );
}
