import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'airport_management',
  password: '123456',
  port: 5432,
});

export default {
  query: (text: string, params?: any[]) => pool.query(text, params),
};
