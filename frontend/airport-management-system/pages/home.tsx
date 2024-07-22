// pages/index.tsx
import React from 'react';
import { Navbar } from '../components/Navbar';

const Home = () => {
  return (
    <div className=' min-h-screen'>
    <main className="flex items-center justify-center">
      <Navbar />
      <h1>hello</h1>
        <h1 className="text-4xl font-bold text-gray-800">Airport Management</h1>
      </main>
    </div>
  );
};

export default Home;
