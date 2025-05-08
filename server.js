const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//  Statische Dateien aus dem "public"-Ordner
app.use(express.static(path.join(__dirname, 'public')));

//  Weiterleitungen ohne .html
app.get('/', (req, res) => {
  res.redirect('/client');
});

app.get('/client', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'client.html'));
});

app.get('/server', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'server.html'));
});

//  Socket.io für Emoji-Events
io.on('connection', (socket) => {
  console.log('Ein Benutzer ist verbunden.');

  socket.on('emoji', (emoji) => {
    socket.broadcast.emit('emoji', emoji);
  });

  socket.on('disconnect', () => {
    console.log('Benutzer hat die Verbindung getrennt.');
  });
});

//Server starten
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
