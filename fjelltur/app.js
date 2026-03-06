// Server-bit, setter opp en Express-app
//expresse m
const express = require('express');
const app = express();

const PORT = 3000; //forteller at koden skal høres på et spesefikt 'port' number. indicates that a web application is running locally for development and testing purposes

// Databasen
const Database = require('better-sqlite3');
const db = new Database('fjelltur.db');

// CORS-middleware for å tillate forespørsler fra andre domener
const cors = require('cors');
app.use(cors());

// Eksempel på en rute som henter alle fjell, beskrivelse, høydene og bilde deres
app.get('/api/fjell_info', (req, res) => {
    const rows = db.prepare('SELECT fjellnavn, hoyde, beskrivelse, foto FROM fjell').all();
    res.json(rows);
});

// Åpner en viss port på serveren, og starter serveren
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});

// Middleware for å servere statiske filer fra "public" mappen
app.use(express.static('public'));