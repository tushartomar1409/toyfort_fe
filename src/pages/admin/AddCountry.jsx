import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

/**
 * AddCountry Page Component
 * Renders a form to add a new country.
 * Includes fields for name, continent, and status.
 */
const AddCountry = () => {
    // Hook from react-router-dom to programmatically navigate
    const navigate = useNavigate();

    // State for form fields
    const [countryName, setCountryName] = useState('');
    const [continent, setContinent] = useState('Europe');
    const [status, setStatus] = useState('Active');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const newCountryData = {
            name: countryName,
            continent: continent,
            status: status,
        };
        // In a real application, you would send this data to your API
        console.log('Submitting new country:', newCountryData);
        alert(`Country "${countryName}" added successfully!`);
        // Navigate back to the main countries list after submission
        navigate('/countries');
    };

    // --- Styles (CSS-in-JS) ---
    const styles = {
        pageContainer: {
            backgroundColor: '#f0f2f5',
            padding: '2rem',
            fontFamily: 'system-ui, sans-serif',
            minHeight: '100vh',
        },
        card: {
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            padding: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
        },
        title: {
            margin: '0',
            fontSize: '1.75rem',
            fontWeight: 600,
            color: '#333',
        },
        countriesButton: {
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '0.6rem 1rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
        },
        formGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
        },
        label: {
            fontWeight: 500,
            color: '#495057',
        },
        input: {
            padding: '0.75rem',
            borderRadius: '6px',
            border: '1px solid #ced4da',
            fontSize: '1rem',
        },
        select: {
            padding: '0.75rem',
            borderRadius: '6px',
            border: '1px solid #ced4da',
            fontSize: '1rem',
            backgroundColor: 'white',
        },
        radioGroup: {
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
        },
        radioLabel: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
        },
        radioInput: {
            display: 'none', // Hide the default radio button
        },
        customRadio: {
            width: '20px',
            height: '20px',
            border: '2px solid #ced4da',
            borderRadius: '50%',
            display: 'inline-block',
            position: 'relative',
        },
        customRadioChecked: {
            width: '20px',
            height: '20px',
            border: '2px solid #563d7c',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#563d7c',
            fontWeight: 'bold'
        },
        footer: {
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'flex-end',
        },
        submitButton: {
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 500,
        }
    };

    return (
        <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
        <div style={styles.pageContainer}>
            <div style={styles.card}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Add Country</h1>
                    <button onClick={() => navigate('/countries')} style={styles.countriesButton}>
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                           <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        Countries
                    </button>
                </div>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label htmlFor="country-name" style={styles.label}>Name</label>
                        <input
                            type="text"
                            id="country-name"
                            value={countryName}
                            onChange={(e) => setCountryName(e.target.value)}
                            style={styles.input}
                            placeholder="Name"
                            required
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label htmlFor="continent" style={styles.label}>Continent</label>
                        <select
                            id="continent"
                            value={continent}
                            onChange={(e) => setContinent(e.target.value)}
                            style={styles.select}
                        >
                            <option>Europe</option>
                            <option>Asia</option>
                            <option>Africa</option>
                            <option>North America</option>
                            <option>South America</option>
                            <option>Australia/Oceania</option>
                            <option>Antarctica</option>
                        </select>
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Status</label>
                        <div style={styles.radioGroup}>
                            <label style={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="status"
                                    value="Active"
                                    checked={status === 'Active'}
                                    onChange={(e) => setStatus(e.target.value)}
                                    style={styles.radioInput}
                                />
                                <span style={status === 'Active' ? styles.customRadioChecked : styles.customRadio}>
                                    {status === 'Active' && '✔'}
                                </span>
                                Active
                            </label>
                            <label style={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="status"
                                    value="Inactive"
                                    checked={status === 'Inactive'}
                                    onChange={(e) => setStatus(e.target.value)}
                                    style={styles.radioInput}
                                />
                                <span style={status === 'Inactive' ? styles.customRadioChecked : styles.customRadio}>
                                     {status === 'Inactive' && '✔'}
                                </span>
                                Inactive
                            </label>
                        </div>
                    </div>

                    <div style={styles.footer}>
                        <button type="submit" style={styles.submitButton}>Add Country</button>
                    </div>
                </form>
            </div>
        </div>
        <Adminfooter />
      
    </div>
    );
};

export default AddCountry;