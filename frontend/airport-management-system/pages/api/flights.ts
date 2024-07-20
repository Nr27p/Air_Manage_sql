

import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';
import db from '../../lib/db';


// Configure the PostgreSQL connection pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'airport_management',
//   password: '123456',
//   port: 5432,
// });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const result = await db.query('SELECT * FROM flights');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching flights:', error);
      res.status(500).json({ message: 'Failed to fetch flights' });
    }
  } else if (req.method === 'POST') {
    const { flight_number, origin, destination, departure_time, arrival_time, status } = req.body;
    try {
      const result = await db.query(
        'INSERT INTO flights (flight_number, origin, destination, departure_time, arrival_time, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [flight_number, origin, destination, departure_time, arrival_time, status]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error adding flight:', error);
      res.status(500).json({ message: 'Failed to add flight' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}



