import { useState } from 'react';

const FlightForm = () => {
  const [flight, setFlight] = useState({
    flight_number: '',
    origin: '',
    destination: '',
    departure_time: '',
    arrival_time: '',
    status: ''
  });

  const handleChange = (e) => {
    setFlight({
      ...flight,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/flights', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(flight)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="flight_number" placeholder="Flight Number" onChange={handleChange} />
      <input type="text" name="origin" placeholder="Origin" onChange={handleChange} />
      <input type="text" name="destination" placeholder="Destination" onChange={handleChange} />
      <input type="datetime-local" name="departure_time" onChange={handleChange} />
      <input type="datetime-local" name="arrival_time" onChange={handleChange} />
      <input type="text" name="status" placeholder="Status" onChange={handleChange} />
      <button type="submit">Add Flight</button>
    </form>
  );
};

export default FlightForm;
