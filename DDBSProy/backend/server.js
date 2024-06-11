const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  port: '33066',
  user: 'root',
  password: 'root',
  database: 'apparty_db',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM Boleto', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


app.get('/api/paquetes', (req, res) => {
  connection.query('SELECT * FROM paquete', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/api/servicio', (req, res) => {
  connection.query('SELECT * FROM boleto', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});
