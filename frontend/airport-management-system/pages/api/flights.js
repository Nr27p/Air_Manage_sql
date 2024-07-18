import db from '../../lib/db';

export default async (req, res) => {
  if (req.method === 'GET') {
    const { rows } = await db.query('SELECT * FROM Flights');
    res.status(200).json(rows);
  } else if (req.method === 'POST') {
    const { flight_number, origin, destination, departure_time, arrival_time, status } = req.body;
    const result = await db.query(
      'INSERT INTO Flights (flight_number, origin, destination, departure_time, arrival_time, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [flight_number, origin, destination, departure_time, arrival_time, status]
    );
    res.status(201).json(result.rows[0]);
  }
};
