// src/pages/admin/cities.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom'; // For navigation to Add City page

const Cities = () => {
  // Mock data for cities - In a real app, this would come from an API
  const allCities = useMemo(() => [
    { id: 1, name: 'Adrogue', country: 'Argentina', state: 'Buenos Aires' },
    { id: 2, name: 'Alberti', country: 'Argentina', state: 'Buenos Aires' },
    { id: 3, name: 'Arrecifes', country: 'Argentina', state: 'Buenos Aires' },
    { id: 4, name: 'Avellaneda', country: 'Argentina', state: 'Buenos Aires' },
    { id: 5, name: 'Ayacucho', country: 'Argentina', state: 'Buenos Aires' },
    { id: 6, name: 'Azul', country: 'Argentina', state: 'Buenos Aires' },
    { id: 7, name: 'Bahia Blanca', country: 'Argentina', state: 'Buenos Aires' },
    { id: 8, name: 'Balcarce', country: 'Argentina', state: 'Buenos Aires' },
    { id: 9, name: 'Baradero', country: 'Argentina', state: 'Buenos Aires' },
    { id: 10, name: 'Belen de Escobar', country: 'Argentina', state: 'Buenos Aires' },
    { id: 11, name: 'Benito Juarez', country: 'Argentina', state: 'Buenos Aires' },
    { id: 12, name: 'Berisso', country: 'Argentina', state: 'Buenos Aires' },
    { id: 13, name: 'Bragado', country: 'Argentina', state: 'Buenos Aires' },
    { id: 14, name: 'Brandsen', country: 'Argentina', state: 'Buenos Aires' },
    { id: 15, name: 'Campana', country: 'Argentina', state: 'Buenos Aires' },
    { id: 16, name: 'Cañuelas', country: 'Argentina', state: 'Buenos Aires' },
    { id: 17, name: 'Capital Federal', country: 'Argentina', state: 'Buenos Aires' },
    { id: 18, name: 'Chacabuco', country: 'Argentina', state: 'Buenos Aires' },
    { id: 19, name: 'Chascomús', country: 'Argentina', state: 'Buenos Aires' },
    { id: 20, name: 'Chivilcoy', country: 'Argentina', state: 'Buenos Aires' },
    { id: 21, name: 'Coronel Brandsen', country: 'Argentina', state: 'Buenos Aires' },
    { id: 22, name: 'Coronel Dorrego', country: 'Argentina', state: 'Buenos Aires' },
    { id: 23, name: 'Coronel Suárez', country: 'Argentina', state: 'Buenos Aires' },
    { id: 24, name: 'Ensenada', country: 'Argentina', state: 'Buenos Aires' },
    { id: 25, name: 'Escobar', country: 'Argentina', state: 'Buenos Aires' },
    { id: 26, name: 'Esteban Echeverría', country: 'Argentina', state: 'Buenos Aires' },
    { id: 27, name: 'Ezeiza', country: 'Argentina', state: 'Buenos Aires' },
    { id: 28, name: 'Florencio Varela', country: 'Argentina', state: 'Buenos Aires' },
    { id: 29, name: 'General Alvarado', country: 'Argentina', state: 'Buenos Aires' },
    { id: 30, name: 'General Alvear', country: 'Argentina', state: 'Buenos Aires' },
    { id: 31, name: 'General Belgrano', country: 'Argentina', state: 'Buenos Aires' },
    { id: 32, name: 'General Guido', country: 'Argentina', state: 'Buenos Aires' },
    { id: 33, name: 'General La Madrid', country: 'Argentina', state: 'Buenos Aires' },
    { id: 34, name: 'General Las Heras', country: 'Argentina', state: 'Buenos Aires' },
    { id: 35, name: 'General Lavalle', country: 'Argentina', state: 'Buenos Aires' },
    { id: 36, name: 'General Paz', country: 'Argentina', state: 'Buenos Aires' },
    { id: 37, name: 'General Pinto', country: 'Argentina', state: 'Buenos Aires' },
    { id: 38, name: 'General Pueyrredón', country: 'Argentina', state: 'Buenos Aires' },
    { id: 39, name: 'General Rodriguez', country: 'Argentina', state: 'Buenos Aires' },
    { id: 40, name: 'General San Martín', country: 'Argentina', state: 'Buenos Aires' },
    { id: 41, name: 'General Viamonte', country: 'Argentina', state: 'Buenos Aires' },
    { id: 42, name: 'General Villegas', country: 'Argentina', state: 'Buenos Aires' },
    { id: 43, name: 'Gonzales Chaves', country: 'Argentina', state: 'Buenos Aires' },
    { id: 44, name: 'Hipólito Yrigoyen', country: 'Argentina', state: 'Buenos Aires' },
    { id: 45, name: 'Hurlingham', country: 'Argentina', state: 'Buenos Aires' },
    { id: 46, name: 'Ituzaingó', country: 'Argentina', state: 'Buenos Aires' },
    { id: 47, name: 'José C. Paz', country: 'Argentina', state: 'Buenos Aires' },
    { id: 48, name: 'Junín', country: 'Argentina', state: 'Buenos Aires' },
    { id: 49, name: 'La Costa', country: 'Argentina', state: 'Buenos Aires' },
    { id: 50, name: 'La Matanza', country: 'Argentina', state: 'Buenos Aires' },
    { id: 51, name: 'La Plata', country: 'Argentina', state: 'Buenos Aires' },
    { id: 52, name: 'Lanús', country: 'Argentina', state: 'Buenos Aires' },
    { id: 53, name: 'Lomas de Zamora', country: 'Argentina', state: 'Buenos Aires' },
    { id: 54, name: 'Luján', country: 'Argentina', state: 'Buenos Aires' },
    { id: 55, name: 'Magdalena', country: 'Argentina', state: 'Buenos Aires' },
    { id: 56, name: 'Maipú', country: 'Argentina', state: 'Buenos Aires' },
    { id: 57, name: 'Malvinas Argentinas', country: 'Argentina', state: 'Buenos Aires' },
    { id: 58, name: 'Mar Chiquita', country: 'Argentina', state: 'Buenos Aires' },
    { id: 59, name: 'Marcos Paz', country: 'Argentina', state: 'Buenos Aires' },
    { id: 60, name: 'Mercedes', country: 'Argentina', state: 'Buenos Aires' },
    { id: 61, name: 'Merlo', country: 'Argentina', state: 'Buenos Aires' },
    { id: 62, name: 'Monte', country: 'Argentina', state: 'Buenos Aires' },
    { id: 63, name: 'Monte Hermoso', country: 'Argentina', state: 'Buenos Aires' },
    { id: 64, name: 'Moreno', country: 'Argentina', state: 'Buenos Aires' },
    { id: 65, name: 'Morón', country: 'Argentina', state: 'Buenos Aires' },
    { id: 66, 'name': 'Navarro', country: 'Argentina', state: 'Buenos Aires' },
    { id: 67, 'name': 'Necochea', country: 'Argentina', state: 'Buenos Aires' },
    { id: 68, 'name': 'Olavarría', country: 'Argentina', state: 'Buenos Aires' },
    { id: 69, 'name': 'Patagones', country: 'Argentina', state: 'Buenos Aires' },
    { id: 70, 'name': 'Pehuajó', country: 'Argentina', state: 'Buenos Aires' },
    { id: 71, 'name': 'Pila', country: 'Argentina', state: 'Buenos Aires' },
    { id: 72, 'name': 'Pilar', country: 'Argentina', state: 'Buenos Aires' },
    { id: 73, 'name': 'Pinamar', country: 'Argentina', state: 'Buenos Aires' },
    { id: 74, 'name': 'Presidente Perón', country: 'Argentina', state: 'Buenos Aires' },
    { id: 75, 'name': 'Puan', country: 'Argentina', state: 'Buenos Aires' },
    { id: 76, 'name': 'Punta Indio', country: 'Argentina', state: 'Buenos Aires' },
    { id: 77, 'name': 'Quilmes', country: 'Argentina', state: 'Buenos Aires' },
    { id: 78, 'name': 'Ramallo', country: 'Argentina', state: 'Buenos Aires' },
    { id: 79, 'name': 'Rauch', country: 'Argentina', state: 'Buenos Aires' },
    { id: 80, 'name': 'Rivadavia', country: 'Argentina', state: 'Buenos Aires' },
    { id: 81, 'name': 'Rojas', country: 'Argentina', state: 'Buenos Aires' },
    { id: 82, 'name': 'Roque Pérez', country: 'Argentina', state: 'Buenos Aires' },
    { id: 83, 'name': 'Saavedra', country: 'Argentina', state: 'Buenos Aires' },
    { id: 84, 'name': 'Saladillo', country: 'Argentina', state: 'Buenos Aires' },
    { id: 85, 'name': 'Salto', country: 'Argentina', state: 'Buenos Aires' },
    { id: 86, 'name': 'San Andrés de Giles', country: 'Argentina', state: 'Buenos Aires' },
    { id: 87, 'name': 'San Antonio de Areco', country: 'Argentina', state: 'Buenos Aires' },
    { id: 88, 'name': 'San Cayetano', country: 'Argentina', state: 'Buenos Aires' },
    { id: 89, 'name': 'San Fernando', country: 'Argentina', state: 'Buenos Aires' },
    { id: 90, 'name': 'San Isidro', country: 'Argentina', state: 'Buenos Aires' },
    { id: 91, 'name': 'San Nicolás', country: 'Argentina', state: 'Buenos Aires' },
    { id: 92, 'name': 'San Pedro', country: 'Argentina', state: 'Buenos Aires' },
    { id: 93, 'name': 'San Vicente', country: 'Argentina', state: 'Buenos Aires' },
    { id: 94, 'name': 'Suipacha', country: 'Argentina', state: 'Buenos Aires' },
    { id: 95, 'name': 'Tandil', country: 'Argentina', state: 'Buenos Aires' },
    { id: 96, 'name': 'Tapalqué', country: 'Argentina', state: 'Buenos Aires' },
    { id: 97, 'name': 'Tigre', country: 'Argentina', state: 'Buenos Aires' },
    { id: 98, 'name': 'Tordillo', country: 'Argentina', state: 'Buenos Aires' },
    { id: 99, 'name': 'Tornquist', country: 'Argentina', state: 'Buenos Aires' },
    { id: 100, 'name': 'Trenque Lauquen', country: 'Argentina', state: 'Buenos Aires' },
    { id: 101, 'name': 'Tres Arroyos', country: 'Argentina', state: 'Buenos Aires' },
    { id: 102, 'name': 'Tres de Febrero', country: 'Argentina', state: 'Buenos Aires' },
    { id: 103, 'name': 'Tres Lomas', country: 'Argentina', state: 'Buenos Aires' },
    { id: 104, 'name': 'Vicente López', country: 'Argentina', state: 'Buenos Aires' },
    { id: 105, 'name': 'Villa Gesell', country: 'Argentina', state: 'Buenos Aires' },
    { id: 106, 'name': 'Villariño', country: 'Argentina', state: 'Buenos Aires' },
    { id: 107, 'name': 'Zárate', country: 'Argentina', state: 'Buenos Aires' },
    { id: 108, 'name': 'Córdoba', country: 'Argentina', state: 'Córdoba' },
    { id: 109, 'name': 'Rosario', country: 'Argentina', state: 'Santa Fe' },
    { id: 110, 'name': 'Mendoza', country: 'Argentina', state: 'Mendoza' },
    { id: 111, 'name': 'Salta', country: 'Argentina', state: 'Salta' },
    { id: 112, 'name': 'Tucumán', country: 'Argentina', state: 'Tucumán' },
    { id: 113, 'name': 'London', country: 'United Kingdom', state: 'England' },
    { id: 114, 'name': 'Manchester', country: 'United Kingdom', state: 'England' },
    { id: 115, 'name': 'Edinburgh', country: 'United Kingdom', state: 'Scotland' },
    { id: 116, 'name': 'New York', country: 'USA', state: 'New York' },
    { id: 117, 'name': 'Los Angeles', country: 'USA', state: 'California' },
    { id: 118, 'name': 'Toronto', country: 'Canada', state: 'Ontario' },
    { id: 119, 'name': 'Vancouver', country: 'Canada', state: 'British Columbia' },
    { id: 120, 'name': 'Delhi', country: 'India', state: 'Delhi' },
    { id: 121, 'name': 'Mumbai', country: 'India', state: 'Maharashtra' },
    // Add more cities as needed to match your full data set.
  ], []); // useMemo to prevent re-creating this array on every render

  // State for filter and search inputs
  const [showPerPage, setShowPerPage] = useState(15);
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedState, setSelectedState] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Derive unique countries and states from allCities for dropdowns
  const countries = useMemo(() => {
    const uniqueCountries = [...new Set(allCities.map(city => city.country))];
    return ['All', ...uniqueCountries.sort()];
  }, [allCities]);

  const states = useMemo(() => {
    const uniqueStates = [...new Set(allCities
      .filter(city => selectedCountry === 'All' || city.country === selectedCountry)
      .map(city => city.state)
    )];
    return ['All', ...uniqueStates.sort()];
  }, [allCities, selectedCountry]);

  // Filter cities based on current filters and search term
  const filteredCities = useMemo(() => {
    return allCities.filter(city => {
      const matchesCountry = selectedCountry === 'All' || city.country === selectedCountry;
      const matchesState = selectedState === 'All' || city.state === selectedState;
      const matchesSearch = city.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCountry && matchesState && matchesSearch;
    });
  }, [allCities, selectedCountry, selectedState, searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCities.length / showPerPage);
  const startIndex = (currentPage - 1) * showPerPage;
  const endIndex = startIndex + showPerPage;
  const currentCities = filteredCities.slice(startIndex, endIndex);

  // Handle pagination clicks
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle filter button click
  const handleFilter = () => {
    setCurrentPage(1); // Reset to first page on filter
    // Filtering is already handled by useMemo on state changes, no explicit action here
  };

  return (
    <div className="cities-container">
      {/* Header Section */}
      <div className="cities-header">
        <h2>Cities</h2>
        <Link to="/admin/add-city" className="add-city-btn">
          <i className="fa fa-plus"></i> Add City
        </Link>
      </div>

      {/* Filter and Search Section */}
      <div className="filter-section">
        <div className="form-group inline-group">
          <label htmlFor="showPerPage">Show</label>
          <select
            id="showPerPage"
            value={showPerPage}
            onChange={(e) => {
              setShowPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to page 1 when items per page changes
            }}
          >
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>

        <div className="form-group inline-group">
          <label htmlFor="countryFilter">Country</label>
          <select
            id="countryFilter"
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
              setSelectedState('All'); // Reset state filter when country changes
              setCurrentPage(1);
            }}
          >
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className="form-group inline-group">
          <label htmlFor="stateFilter">State</label>
          <select
            id="stateFilter"
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setCurrentPage(1);
            }}
          >
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div className="form-group inline-group search-input-group">
          <label htmlFor="citySearch">Search</label>
          <input
            type="text"
            id="citySearch"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="filter-btn" onClick={handleFilter}>Filter</button>
      </div>

      {/* Cities Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Country</th>
              <th>State</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {currentCities.length > 0 ? (
              currentCities.map((city) => (
                <tr key={city.id}>
                  <td>{city.id}</td>
                  <td>{city.name}</td>
                  <td>{city.country}</td>
                  <td>{city.state}</td>
                  <td>
                    <select className="action-select">
                      <option>Select an option</option>
                      <option>Edit</option>
                      <option>Delete</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>No cities found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination-container">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            &laquo;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            &raquo;
          </button>
        </div>
      )}

      {/* Embedded CSS for Cities Page */}
      <style>{`
        .cities-container {
          padding: 20px;
          font-family: Arial, sans-serif;
          background-color: #f0f2f5;
          min-height: calc(100vh - 40px); /* Adjust based on header/footer if any */
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          margin: 20px; /* Add some margin around the container */
        }

        /* Header Styles */
        .cities-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e0e0e0;
        }
        .cities-header h2 {
          font-size: 26px;
          color: #333;
          margin: 0;
        }

        /* Add City Button */
        .add-city-btn {
          background-color: #28a745; /* Green */
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }
        .add-city-btn:hover {
          background-color: #218838;
        }
        .add-city-btn i {
          margin-right: 8px;
        }

        /* Filter Section Styles */
        .filter-section {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          margin-bottom: 25px;
          display: flex;
          flex-wrap: wrap; /* Allow wrapping on smaller screens */
          align-items: flex-end; /* Align items to the bottom */
          gap: 20px; /* Space between filter groups */
        }
        .filter-section .form-group {
          margin-bottom: 0; /* Override default form-group margin */
        }
        .filter-section label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #555;
          white-space: nowrap; /* Prevent label from wrapping */
        }
        .filter-section select,
        .filter-section input[type="text"] {
          width: 150px; /* Adjust width as needed */
          padding: 8px 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 14px;
          box-sizing: border-box;
          height: 38px; /* Consistent height */
        }
        .filter-section .search-input-group {
            flex-grow: 1; /* Allow search input to take more space */
            min-width: 180px; /* Minimum width for search input */
        }
        .filter-section .filter-btn {
          background-color: #6c757d; /* Grey/purple color from screenshot */
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.3s ease;
          height: 38px; /* Match height of inputs */
          white-space: nowrap;
        }
        .filter-btn:hover {
          background-color: #5a6268;
        }

        /* Table Styles */
        .table-container {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          overflow-x: auto; /* Enable horizontal scrolling for small screens */
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 0;
          padding: 0;
        }
        table thead {
          background-color: #f8f9fa;
        }
        table th,
        table td {
          padding: 12px 15px;
          border-bottom: 1px solid #e0e0e0;
          text-align: left;
        }
        table th {
          font-size: 15px;
          color: #6c757d;
          text-transform: uppercase;
        }
        table tbody tr:hover {
          background-color: #f1f1f1;
        }
        table tbody tr:last-child td {
          border-bottom: none;
        }
        .action-select {
          padding: 8px 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 14px;
          cursor: pointer;
          min-width: 120px; /* Ensure dropdown has enough width */
          background-color: #f8f9fa; /* Light grey background */
          color: #495057;
          appearance: none; /* Remove default arrow */
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23999'%3E%3Cpath d='M4 6l4 4 4-4z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 8px center;
          background-size: 12px;
        }

        /* Pagination Styles */
        .pagination-container {
          display: flex;
          justify-content: flex-end; /* Align pagination to the right */
          margin-top: 25px;
          padding: 10px 0;
        }
        .pagination-btn {
          background-color: #f8f9fa;
          color: #007bff;
          border: 1px solid #dee2e6;
          padding: 8px 12px;
          margin: 0 4px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 15px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .pagination-btn:hover:not(:disabled) {
          background-color: #e9ecef;
        }
        .pagination-btn.active {
          background-color: #007bff;
          color: white;
          border-color: #007bff;
        }
        .pagination-btn:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .filter-section {
                flex-direction: column;
                align-items: stretch;
            }
            .filter-section select,
            .filter-section input[type="text"],
            .filter-section .filter-btn {
                width: 100%;
            }
        }
      `}</style>
    </div>
  );
};

export default Cities;
