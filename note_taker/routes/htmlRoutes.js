const path = require("path");

module.exports = function(app) {
    
    //GET request for notes.jtml
    app.get("/notes", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

   // default to index
   app.get("*", function(req,res) {
       res.sendFile(path.join(__dirname, "../public/index.html"));
     });

};