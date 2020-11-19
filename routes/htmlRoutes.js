const path = require("path");

module.exports = function (app) {

    // Returns the content from the notes.html file
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/notes.html"));
    });

    // Returns the content from the index.html file
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });

}