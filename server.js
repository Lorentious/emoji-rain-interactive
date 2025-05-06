const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Statische Dateien aus dem public-Ordner bereitstellen
app.use(express.static('public'));

// WebSocket-Ereignisse
io.on('connection', socket => {
  console.log('Ein Client ist verbunden');
  socket.on('emoji', emoji => {
    io.emit('emoji', emoji); // an alle verbundenen Clients senden
  });
});

// Server starten
http.listen(3000, () => {
  console.log('WebSocket-Server läuft auf http://localhost:3000');
});
