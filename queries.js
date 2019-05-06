const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'tsundoku-api',
  password: 'password',
  port: 5432,
});

export default pool;