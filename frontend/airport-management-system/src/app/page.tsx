'use client';

import React, { useState } from 'react';
// import FlightForm from '../../components/FlightsForm';
// import FlightList from '../../components/FlightList';
// import Navbar from '../../components/Navbar';
// import SignUp from '../../pages/signup';
// import Booking from '../../pages/booking';
import Home from '../../pages/home';

const Page: React.FC = () => {
  const [refresh, setRefresh] = useState<boolean>(false);

  const refreshFlightList = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className='p-20 bg-slate-300 min-h-screen'>
      {/* <h1 className="page-title">Airport Management System</h1> */}
      {/* <Navbar /> */}
      {/* <FlightForm onFlightAdded={refreshFlightList} /> */}
      {/* <FlightList refresh={refresh} /> */}
      {/* <SignUp /> */}
      {/* <Booking /> */}
      <Home />

      {/* <style jsx>{`
        .page-container {
          padding: 20px;
        }

        .page-title {
          text-align: center;
          margin-bottom: 20px;
          font-size: 28px;
          font-weight: 700;
        }
      `}</style> */}
    </div>
  );
}

export default Page;
