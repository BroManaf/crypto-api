const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Koneksi ke database
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

// Test koneksi
db.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Gagal konek ke database:', err.message);
  } else {
    console.log('✅ Berhasil konek ke database!');
    connection.release();
  }
});

// ============================================
// ROUTES (endpoint API)
// ============================================

// GET / → cek API hidup
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Crypto API berjalan!',
    endpoints: [
      'GET /datacollect',
      'GET /datacollect/:id',
      'GET /signals',
      'GET /trades'
    ]
  });
});

// GET /datacollect → ambil semua data dari dataCollect_gary
app.get('/datacollect', (req, res) => {
  const limit = req.query.limit || 50;
  const query = `SELECT * FROM dataCollect_gary ORDER BY id DESC LIMIT ?`;
  db.query(query, [parseInt(limit)], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ total: results.length, data: results });
  });
});

// GET /datacollect/:id → ambil 1 data berdasarkan id
app.get('/datacollect/:id', (req, res) => {
  const query = `SELECT * FROM dataCollect_gary WHERE id = ?`;
  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Data tidak ditemukan' });
    res.json(results[0]);
  });
});

// GET /signals → ambil data dari trade_signals
app.get('/signals', (req, res) => {
  const limit = req.query.limit || 50;
  const query = `SELECT * FROM trade_signals ORDER BY id DESC LIMIT ?`;
  db.query(query, [parseInt(limit)], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ total: results.length, data: results });
  });
});

// GET /trades → ambil data dari trade_manaf
app.get('/trades', (req, res) => {
  const limit = req.query.limit || 50;
  const query = `SELECT * FROM trade_manaf ORDER BY id DESC LIMIT ?`;
  db.query(query, [parseInt(limit)], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ total: results.length, data: results });
  });
});

// ============================================
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 API berjalan di port ${PORT}`);
});
