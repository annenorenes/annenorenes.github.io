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

// Middleware for å servere statiske filer fra "public" mappen
app.use(express.static('public'));

// Eksempel på en rute som henter alle fjell, beskrivelse, høydene og bilde deres
app.get('/api/fjell_info', (req, res) => {
    const rows = db.prepare('SELECT fjellnavn, hoyde, beskrivelse, foto FROM fjell').all();
    res.json(rows);
});

// Eksempel på en rute som henter alle brukernavnene til alle personene i databasen
app.get('/api/personer_alle', (req, res) => { //oppretter en GET rute, slik at når vi åpner 'localhost' serveren, vil denne koden kjøre. Vi oppretter en sti, som er navnet på endepunktet våres
    const rows = db.prepare('SELECT brukernavn FROM person').all(); //her henter vi brukernavn fra person 
    res.json(rows); //dette sender resultatet tilbake til json filen 
});

//Ruten under tar inn et brukernavn som en URL-parameter, og bruker dette for å hente ut alle fjellene som denne personen har gått på.
app.get('/api/fjellturer/:brukernavn', (req, res) => {
    const brukernavn = req.params.brukernavn;
    if (!brukernavn) return res.status(400).json({ error: 'Mangler brukernavn' });

    const rows = db.prepare(`
        SELECT fjell.fjellnavn
        FROM person
        JOIN fjelltur ON person.brukernavn = fjelltur.brukernavn
        JOIN fjell ON fjelltur.fjell_id = fjell.fjell_id
        WHERE person.brukernavn = 'hausnes'`).all();

    res.json(rows);
});

// Åpner en viss port på serveren, og starter serveren
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});
