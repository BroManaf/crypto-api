var express = require('express');
var mysql = require('mysql2');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(express.json());

var db = mysql.createPool({
  host: '10.11.0.16',
  user: 'root',
  password: 'R00t_Manaf!2026',
  database: 'crypto_db',
  connectionLimit: 10
});

db.getConnection(function(err, conn) {
  if (err) {
    console.log('GAGAL KONEK: ' + err.message);
  } else {
    console.log('BERHASIL KONEK!');
    conn.release();
  }
});

function makeRoute(tabel) {
  app.get('/' + tabel, function(req, res) {
    var limit = parseInt(req.query.limit) || 50;
    var page = parseInt(req.query.page) || 1;
    var offset = (page - 1) * limit;
    db.query('SELECT * FROM `' + tabel + '` ORDER BY id DESC LIMIT ? OFFSET ?', [limit, offset], function(err, rows) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ table: tabel, total: rows.length, page: page, data: rows });
    });
  });
  app.get('/' + tabel + '/:id', function(req, res) {
    db.query('SELECT * FROM `' + tabel + '` WHERE id = ?', [req.params.id], function(err, rows) {
      if (err) return res.status(500).json({ error: err.message });
      if (rows.length === 0) return res.status(404).json({ error: 'tidak ditemukan' });
      res.json(rows[0]);
    });
  });
}

makeRoute('dataCollect_gary');
makeRoute('dataCollect_manaf');
makeRoute('testing');
makeRoute('trade_manaf');
makeRoute('trade_signals');
makeRoute('conclusion_manaf');

app.get('/', function(req, res) {
  res.json({
    status: 'ok',
    message: 'Crypto API berjalan!',
    endpoints: [
      '/dataCollect_gary', '/dataCollect_gary/:id',
      '/dataCollect_manaf', '/dataCollect_manaf/:id',
      '/testing', '/testing/:id',
      '/trade_manaf', '/trade_manaf/:id',
      '/trade_signals', '/trade_signals/:id'
    ]
  });
});

app.listen(3001, function() {
  console.log('API berjalan di port 3001');
});
