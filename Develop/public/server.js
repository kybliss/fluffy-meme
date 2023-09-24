const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 3001;

const dbFile = './db.json';

const read = () => {
    const notes = fs.readFileSync(notesFile, 'utf-8');
    return JSON.parse(notes);
}

const write = (notes) => {
    const jsonData = JSON.stringify(notes);
    fs.writeFileSync(dbFile, jsonData)
}

app.get('/db', (req, res) => {
    const notes = read();
    res.json(notes);
});

app.post('/db', (req, res) => {
    const notes = read();
    const newNote = req.body;
    notes.push(newNote);
    write(notes);
    res.json(notes);
});

app.delete('/db/:id', (req, res) => {
    const notes = read();
    const noteID = req.params.id;
    const noteIndex = notes.findIndex((note) => note.id === noteID);
    notes.splice(noteIndex, 1);
    write(notes);
    res.json(notes);
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});