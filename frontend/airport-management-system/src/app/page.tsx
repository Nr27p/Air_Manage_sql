// import React from 'react';

// // import FlightList from '../components/FlightList';
// import FlightForm from '../../components/FlightsForm';
// import FlightList from '../../components/FlightList';
// import Navbar from '../../components/Navbar';

// const HomePage: React.FC = () => {
//   return (
//     <div>
//       <h1>Flight Management</h1>
//       <Navbar />
//       <FlightForm />
//       <FlightList />
      
//     </div>
//   );
// };

// export default HomePage;

'use client';

import React, { useState } from 'react';
import FlightForm from '../../components/FlightsForm';
import FlightList from '../../components/FlightList';
import Navbar from '../../components/Navbar';
import SignUp from '../../pages/signup';
import Booking from '../../pages/booking';

const Page: React.FC = () => {
  const [refresh, setRefresh] = useState<boolean>(false);

  const refreshFlightList = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Airport Management System</h1>
      <Navbar />
      <FlightForm onFlightAdded={refreshFlightList} />
      <FlightList refresh={refresh} />
      <SignUp />
      <Booking />

      <style jsx>{`
        .page-container {
          padding: 20px;
        }

        .page-title {
          text-align: center;
          margin-bottom: 20px;
          font-size: 28px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}

export default Page;
