// 'use client';

// import React, { useState } from 'react';

// import FlightForm from './FlightsForm';// Ensure the path is correct

// const Navbar: React.FC = () => {
//   const [isFormVisible, setIsFormVisible] = useState(false);

//   const toggleForm = () => {
//     setIsFormVisible(!isFormVisible);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <h1 className="navbar-title">Airport Management System</h1>
//         <button className="toggle-button" onClick={toggleForm}>
//           {isFormVisible ? 'Close Form' : 'Add New Flight'}
//         </button>
//         {isFormVisible && <FlightForm />}
//       </div>

//       <style jsx>{`
//         .navbar {
//           background-color: #0070f3;
//           padding: 10px;
//           color: #ffffff;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .navbar-container {
//           max-width: 1200px;
//           width: 100%;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .navbar-title {
//           font-size: 24px;
//           font-weight: 600;
//           margin-bottom: 10px;
//         }

//         .toggle-button {
//           background-color: #005bb5;
//           color: #ffffff;
//           border: none;
//           padding: 10px 20px;
//           border-radius: 4px;
//           font-size: 16px;
//           cursor: pointer;
//           transition: background-color 0.3s, transform 0.3s;
//           margin-bottom: 10px;
//         }

//         .toggle-button:hover {
//           background-color: #004494;
//           transform: scale(1.05);
//         }

//         .toggle-button:active {
//           background-color: #003366;
//         }

//         .navbar .flight-form {
//           width: 100%;
//           max-width: 600px;
//           margin-top: 20px;
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;

// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export const Navbar: React.FC = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav style={{ backgroundColor: '#1a202c', padding: '16px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: '#fff', fontSize: '24px', fontWeight: '600', fontFamily: 'Montserrat, sans-serif' }}>
            Airport Management
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/signin" legacyBehavior>
              <a style={{ color: '#fff', padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', fontFamily: 'Montserrat, sans-serif', textDecoration: 'none', backgroundColor: '#2d3748', transition: 'background-color 0.3s' }}>
                Sign In
              </a>
            </Link>
            <Link href="/signup" legacyBehavior>
              <a style={{ color: '#fff', padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', fontFamily: 'Montserrat, sans-serif', textDecoration: 'none', backgroundColor: '#2d3748', transition: 'background-color 0.3s' }}>
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};



