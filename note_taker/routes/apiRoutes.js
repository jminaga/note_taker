const fs = require("fs");

// exporting html paths
module.exports = function (app) {
  // this adds notes to the json object
  app.get("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", (error, data) => {
      notes = JSON.parse(data);
      res.send(notes);
      if (error) throw error;
    });
  });

  // adding notes
  app.post("/api/notes", function (req, res) {
    const addedNotes = req.body;

    fs.readFile("././db/db.json", (error, data) => {
      notes = JSON.parse(data);
      notes.push(addedNotes);
      if (error) throw error;

      let value = 1;
      notes.forEach((note, index) => {
        note.id = value;
        value++;
        return notes;
      });

      makeString = JSON.stringify(notes);

      fs.writeFile("./db/db.json", makeString, (error, data) => {
        if (error) throw error;
      });
    });
    res.send();
  });

  // to deletes notes
  app.delete("/api/notes/id:", function (req, res) {
    res.json({ ok: true });
  });
};
