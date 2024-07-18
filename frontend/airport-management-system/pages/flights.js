import { useState, useEffect } from 'react';
import FlightForm from '../components/FlightForm';

const Flights = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('/api/flights')
      .then(response => response.json())
      .then(data => setFlights(data));
  }, []);

  return (
    <div>
      <h1>Flights</h1>
      <FlightForm />
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.flight_number} - {flight.origin} to {flight.destination} ({flight.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Flights;
