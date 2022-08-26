
const fs = require("fs");
const path = require("path");


// Get note by ID
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
  }

// create new note
function createNewNote(body, notesArray) {
    
    const note = body;
    
    notesArray.push( note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({notes: notesArray}, null, 2),
      
    );

    }


module.exports = {findById, createNewNote};