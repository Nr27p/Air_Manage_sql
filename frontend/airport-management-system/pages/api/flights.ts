import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { rows } = await query('SELECT * FROM Flights');
    res.status(200).json(rows);
  } else if (req.method === 'POST') {
    const { flight_number, origin, destination, departure_time, arrival_time, status } = req.body;
    const result = await query(
      'INSERT INTO Flights (flight_number, origin, destination, departure_time, arrival_time, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [flight_number, origin, destination, departure_time, arrival_time, status]
    );
    res.status(201).json(result.rows[0]);
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
