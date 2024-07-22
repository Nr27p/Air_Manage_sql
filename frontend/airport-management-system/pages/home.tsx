// pages/index.tsx
// import React from 'react';
// import { Navbar } from '../components/Navbar';

// const Home = () => {
//   return (
//     <div className=' min-h-screen'>
//     <main className="flex items-center justify-center">
//       <Navbar />
//       <h1>hello</h1>
//         <h1 className="text-4xl font-bold text-gray-800">Airport Management</h1>
//       </main>
//     </div>
//   );
// };

// export default Home;
// pages/index.tsx
// pages/home.tsx
import React from 'react';
import { Navbar } from '../components/Navbar';
import Head from 'next/head';
 // Adjust import path if necessary
import Footer from './Footer';



const Home = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            /* Global reset */
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            html, body {
              height: 100%;
            }
          `}
        </style>
      </Head>
      <div style={styles.container}>
        <Navbar />
        <main style={styles.main}>
          <h1 style={styles.title}>Airport Management</h1>
        </main>
        <Footer />
      </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1661962354730-cda54fa4f9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))', // Background image with dark gradient
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Montserrat, sans-serif',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // Ensures it takes up remaining space
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: '48px',
    fontWeight: '600',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Shadow for text border effect
    padding: '10px',
  },
};

export default Home;


