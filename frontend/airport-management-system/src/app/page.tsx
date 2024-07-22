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
    <Home />


  );
}

export default Page;
