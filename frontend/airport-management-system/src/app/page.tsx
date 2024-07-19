import React from 'react';

// import FlightList from '../components/FlightList';
import FlightForm from '../../components/FlightsForm';
import FlightList from '../../components/FlightList';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Flight Management</h1>
      <FlightForm />
      <FlightList />
    </div>
  );
};

export default HomePage;
