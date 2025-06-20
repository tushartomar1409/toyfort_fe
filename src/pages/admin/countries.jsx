 import React, { useState } from 'react';
// ⬇️ 1. IMPORT `Link` INSTEAD OF `useNavigate`
import { Link } from 'react-router-dom';

// Sample data for the list of countries. In a real application, this would likely come from an API.
const sampleCountries = [
  { id: 1, name: 'Afghanistan', status: 'Active' },
  { id: 2, name: 'Albania', status: 'Active' },
  { id: 3, name: 'Algeria', status: 'Active' },
  { id: 4, name: 'American Samoa', status: 'Active' },
  { id: 5, name: 'Andorra', status: 'Active' },
  { id: 6, name: 'Angola', status: 'Active' },
  { id: 7, name: 'Anguilla', status: 'Active' },
  { id: 8, name: 'Antarctica', status: 'Active' },
  { id: 9, name: 'Antigua and Barbuda', status: 'Active' },
  { id: 10, name: 'Argentina', status: 'Active' },
  { id: 11, name: 'Armenia', status: 'Active' },
  { id: 12, name: 'Aruba', status: 'Active' },
  { id: 13, name: 'Australia', status: 'Active' },
  { id: 14, name: 'Austria', status: 'Active' },
  { id: 15, name: 'Azerbaijan', status: 'Active' },
  // Add more data to demonstrate pagination
  { id: 16, name: 'Bahamas', status: 'Active' },
  { id: 17, name: 'Bahrain', status: 'Active' },
  { id: 18, name: 'Bangladesh', status: 'Active' },
  { id: 19, name: 'Barbados', status: 'Active' },
  { id: 20, name: 'Belarus', status: 'Active' },
  { id: 21, name: 'Belgium', status: 'Active' },
  { id: 22, name: 'Belize', status: 'Active' },
  { id: 23, name: 'Benin', status: 'Active' },
  { id: 24, name: 'Bermuda', status: 'Active' },
  { id: 25, name: 'Bhutan', status: 'Active' },
  { id: 26, name: 'Bolivia', status: 'Active' },
  { id: 27, name: 'Bosnia and Herzegovina', status: 'Active' },
  { id: 28, name: 'Botswana', status: 'Active' },
  { id: 29, name: 'Brazil', status: 'Active' },
  { id: 30, name: 'Brunei Darussalam', status: 'Active' },
  { id: 31, name: 'Bulgaria', status: 'Active' },
];

/**
 * Countries Page Component
 * * Renders a management page for a list of countries, including features like
 * search, pagination, and status management. The styling is self-contained
 * using CSS-in-JS to replicate the look from the provided images.
 */
const Countries = () => {
  // The useNavigate hook is no longer needed here
  
  // State for the list of countries
  const [countries, setCountries] = useState(sampleCountries);
  // State for the search input value
  const [searchTerm, setSearchTerm] = useState('');
  // State for the number of items to show per page
  const [itemsPerPage, setItemsPerPage] = useState(15);
  // State for the current active page
  const [currentPage, setCurrentPage] = useState(1);

  // --- Event Handlers ---

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to page 1 on a new search
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to page 1 when items per page changes
  };

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // --- Data Filtering and Pagination ---

  // Filter countries based on the search term
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination variables
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

  // --- Styles (CSS-in-JS) ---
  // Using objects to define styles for different elements
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
      backgroundColor: '#1890ff', // A slightly different blue
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: 500,
      textDecoration: 'none', // 2. ADD THIS TO REMOVE THE LINK UNDERLINE
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
      alignItems: 'center',
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
    },
    input: {
      padding: '0.5rem',
      borderRadius: '6px',
      border: '1px solid #ced4da',
      minWidth: '200px',
    },
    filterButton: {
      backgroundColor: '#6c757d',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
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
      backgroundColor: '#563d7c',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      cursor: 'pointer',
    },
    cardFooter: {
      padding: '1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    bulkActions: {
       display: 'flex',
       gap: '0.5rem',
    },
    inactivateButton: {
       backgroundColor: '#dc3545',
       color: 'white',
       border: 'none',
       padding: '0.5rem 1rem',
       borderRadius: '6px',
       cursor: 'pointer',
    },
    activateButton: {
       backgroundColor: '#28a745',
       color: 'white',
       border: 'none',
       padding: '0.5rem 1rem',
       borderRadius: '6px',
       cursor: 'pointer',
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
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        <div style={styles.cardHeader}>
            <h2 style={styles.title}>Countries</h2>
            {/* ⬇️ 3. REPLACE THE BUTTON WITH A LINK COMPONENT */}
            <Link to="/admin/addCountries" style={styles.addButton}>
                + Add Country
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
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Options</th>
                </tr>
            </thead>
            <tbody>
                {currentItems.map((country) => (
                <tr key={country.id}>
                    <td style={styles.td}>{country.id}</td>
                    <td style={styles.td}>{country.name}</td>
                    <td style={styles.td}>
                    <span style={styles.statusActive}>{country.status}</span>
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
            <div style={styles.bulkActions}>
                <button style={styles.inactivateButton}>Inactivate All</button>
                <button style={styles.activateButton}>Activate All</button>
            </div>
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
  );
};

export default Countries;