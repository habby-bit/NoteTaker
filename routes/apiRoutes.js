const fs = require('fs');

var noteData = fs.readFileSync("./db/db.json", "utf8");
var notes = JSON.parse(noteData)

module.exports = function (app) {

    // Gets all the saved notes data
    app.get("/api/notes", function (req, res) {
        res.json(notes);
    });

    app.get("/api/notes/:id", function (req, res) {
        res.json(notes[Number(req.params.id)]);
    });

    // Adds new notes to the existing notes data
    app.post("/api/notes", function (req, res) {
        var newNote = req.body;
        var noteId = (notes.length).toString();
        
        newNote.id = noteId;
        notes.push(newNotes);

        fs.writeFileSync("./db/db.json", JSON.stringify(notes), function (err) {
            if (err) throw (err);
        });

        res.json(notes);
    });

    // Deletes notes from the existing notes data
    app.delete("/api/notes/:id", function (req, res) {
        var pickedNote = req.params.id;
        var idNum = 0;

        notes = notes.filter(current => {
            return current.id != pickedNote;
        });

        for (current of notes) {
            current.id = idNum.toString();
            idNum++;
        }

        fs.writeFileSync('./db/db.json', JSON.stringify(notes));
        res.json(notes);
    });
};