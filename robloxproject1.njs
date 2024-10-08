const https = require('https');
const express = require('express');
const fs = require('fs');
const http = require('http');



const app = express()
app.use(express.json());

app.post('/roblox', (req, res) => {
    console.log('Received data from platform Roblox:', req.body);
    res.status(200).send('Data received');
});
const server = http.createServer(app);
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`HTTP Server is running on http://localhost:${PORT}`);
  });
