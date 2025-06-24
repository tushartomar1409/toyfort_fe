import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

// Sample data for the list of states. In a real application, this would come from an API.
// Added states from another country to demonstrate the filter.
const sampleStates = [
  { id: 1, name: 'Badakhshan', country: 'Afghanistan', status: 'Active' },
  { id: 2, name: 'Badghis', country: 'Afghanistan', status: 'Active' },
  { id: 3, name: 'Baghlan', country: 'Afghanistan', status: 'Active' },
  { id: 4, name: 'Balkh', country: 'Afghanistan', status: 'Active' },
  { id: 5, name: 'Bamyan', country: 'Afghanistan', status: 'Active' },
  { id: 6, name: 'Daykundi', country: 'Afghanistan', status: 'Active' },
  { id: 7, name: 'Farah', country: 'Afghanistan', status: 'Active' },
  { id: 8, name: 'Faryab', country: 'Afghanistan', status: 'Active' },
  { id: 9, name: 'Ghazni', country: 'Afghanistan', status: 'Active' },
  { id: 10, name: 'Ghor', country: 'Afghanistan', status: 'Active' },
  { id: 11, name: 'Helmand', country: 'Afghanistan', status: 'Active' },
  { id: 12, name: 'Herat', country: 'Afghanistan', status: 'Active' },
  { id: 13, name: 'Jowzjan', country: 'Afghanistan', status: 'Active' },
  { id: 14, name: 'Kabul', country: 'Afghanistan', status: 'Active' },
  { id: 15, name: 'Kandahar', country: 'Afghanistan', status: 'Active' },
  // --- More data for filtering/pagination ---
  { id: 16, name: 'Alabama', country: 'USA', status: 'Active' },
  { id: 17, name: 'Alaska', country: 'USA', status: 'Active' },
  { id: 18, name: 'Arizona', country: 'USA', status: 'Active' },
  { id: 19, name: 'California', country: 'USA', status: 'Active' },
  { id: 20, name: 'Colorado', country: 'USA', status: 'Active' },
];

// Automatically get a unique list of countries from the sample data
const countryOptions = ['All', ...new Set(sampleStates.map(state => state.country))];


/**
 * States Page Component
 * Renders a management page for a list of states.
 */
const States = () => {
  const [states, setStates] = useState(sampleStates);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  // New state for the country filter
  const [selectedCountry, setSelectedCountry] = useState('All');

  // --- Event Handlers ---

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };
  
  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  // --- Data Filtering and Pagination ---

  // Apply filters for both country and search term
  const filteredStates = states
    .filter(state => selectedCountry === 'All' || state.country === selectedCountry)
    .filter(state => state.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Calculate pagination variables
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStates.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredStates.length / itemsPerPage);

  // --- Styles (CSS-in-JS) ---
  const styles = {
    pageContainer: {
      backgroundColor: '#f0f2f5',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      overflow: 'hidden',
    },
    cardHeader: {
      padding: '1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #e9ecef'
    },
    title: {
      margin: '0',
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    addButton: {
      backgroundColor: '#20c997',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: 500,
      textDecoration: 'none',
    },
    filterContainer: {
      padding: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      borderBottom: '1px solid #e9ecef'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    label: {
      fontSize: '0.875rem',
      color: '#495057'
    },
    select: {
      padding: '0.5rem',
      borderRadius: '6px',
      border: '1px solid #ced4da',
      minWidth: '150px',
    },
    input: {
      padding: '0.5rem',
      borderRadius: '6px',
      border: '1px solid #ced4da',
      minWidth: '200px',
    },
    filterButton: {
      backgroundColor: '#6f42c1',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      alignSelf: 'flex-end', // Aligns button with the bottom of inputs
      height: '38px', // Match height of inputs
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      color: '#212529',
    },
    th: {
      textAlign: 'left',
      padding: '1rem 1.5rem',
      borderBottom: '2px solid #e9ecef',
      color: '#6c757d',
      fontWeight: 600,
      fontSize: '0.875rem',
      textTransform: 'uppercase',
    },
    td: {
      textAlign: 'left',
      padding: '1rem 1.5rem',
      borderTop: '1px solid #e9ecef',
      verticalAlign: 'middle',
    },
    statusActive: {
      backgroundColor: 'rgba(40, 167, 69, 0.1)',
      color: '#28a745',
      padding: '0.25rem 0.6rem',
      borderRadius: '15px',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      display: 'inline-block',
    },
    optionsSelect: {
      backgroundColor: '#6f42c1',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
    },
    cardFooter: {
      padding: '1.5rem',
      display: 'flex',
      justifyContent: 'flex-end', // Only pagination is here now
      alignItems: 'center',
    },
    pagination: {
      display: 'flex',
      listStyle: 'none',
      padding: 0,
      margin: 0,
      borderRadius: '6px',
      overflow: 'hidden',
      border: '1px solid #dee2e6'
    },
    pageItem: {
      padding: '0.5rem 0.75rem',
      cursor: 'pointer',
      color: '#007bff',
      borderLeft: '1px solid #dee2e6'
    },
    pageItemActive: {
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'default',
    },
    pageItemDisabled: {
      color: '#6c757d',
      cursor: 'not-allowed',
    }
  };


  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        <div style={styles.cardHeader}>
            <h2 style={styles.title}>States</h2>
            <Link to="/add-state" style={styles.addButton}>
                + Add State
            </Link>
        </div>
        
        <div style={styles.filterContainer}>
          <div style={styles.formGroup}>
            <label htmlFor="show-entries" style={styles.label}>Show</label>
            <select id="show-entries" value={itemsPerPage} onChange={handleItemsPerPageChange} style={styles.select}>
              <option value="15">15</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
           <div style={styles.formGroup}>
            <label htmlFor="country-filter" style={styles.label}>Country</label>
            <select id="country-filter" value={selectedCountry} onChange={handleCountryChange} style={styles.select}>
              {countryOptions.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="search" style={styles.label}>Search</label>
            <input
              id="search"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              style={styles.input}
            />
          </div>
          <button style={styles.filterButton}>Filter</button>
        </div>

        <div style={styles.tableWrapper}>
            <table style={styles.table}>
            <thead>
                <tr>
                <th style={styles.th}>Id</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Country</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Options</th>
                </tr>
            </thead>
            <tbody>
                {currentItems.map((state) => (
                <tr key={state.id}>
                    <td style={styles.td}>{state.id}</td>
                    <td style={styles.td}>{state.name}</td>
                    <td style={styles.td}>{state.country}</td>
                    <td style={styles.td}>
                        <span style={styles.statusActive}>{state.status}</span>
                    </td>
                    <td style={styles.td}>
                    <select style={styles.optionsSelect}>
                            <option>Select an option</option>
                            <option>Edit</option>
                            <option>Deactivate</option>
                            <option>Delete</option>
                        </select>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        
        <div style={styles.cardFooter}>
            <nav>
                <ul style={styles.pagination}>
                    <li style={{...styles.pageItem, ...(currentPage === 1 ? styles.pageItemDisabled : {}), borderLeft: 'none' }} onClick={() => currentPage > 1 && handlePaginate(currentPage - 1)}>
                        &lt;
                    </li>
                    {[...Array(totalPages).keys()].map(number => (
                        <li 
                            key={number + 1} 
                            onClick={() => handlePaginate(number + 1)} 
                            style={currentPage === number + 1 ? {...styles.pageItem, ...styles.pageItemActive} : styles.pageItem}>
                        {number + 1}
                        </li>
                    ))}
                    <li style={{...styles.pageItem, ...(currentPage === totalPages ? styles.pageItemDisabled : {}) }} onClick={() => currentPage < totalPages && handlePaginate(currentPage + 1)}>
                        &gt;
                    </li>
                    <li style={{...styles.pageItem, ...(currentPage === totalPages ? styles.pageItemDisabled : {}) }} onClick={() => currentPage < totalPages && handlePaginate(totalPages)}>
                        &raquo;
                    </li>
                </ul>
            </nav>
        </div>
      </div>
    </div>
    <Adminfooter />
      
    </div>
  );
};

export default States;