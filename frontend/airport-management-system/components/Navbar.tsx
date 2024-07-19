'use client';

import React, { useState } from 'react';

import FlightForm from './FlightsForm';// Ensure the path is correct

const Navbar: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Airport Management System</h1>
        <button className="toggle-button" onClick={toggleForm}>
          {isFormVisible ? 'Close Form' : 'Add New Flight'}
        </button>
        {isFormVisible && <FlightForm />}
      </div>

      <style jsx>{`
        .navbar {
          background-color: #0070f3;
          padding: 10px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .navbar-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .navbar-title {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .toggle-button {
          background-color: #005bb5;
          color: #ffffff;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s;
          margin-bottom: 10px;
        }

        .toggle-button:hover {
          background-color: #004494;
          transform: scale(1.05);
        }

        .toggle-button:active {
          background-color: #003366;
        }

        .navbar .flight-form {
          width: 100%;
          max-width: 600px;
          margin-top: 20px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
