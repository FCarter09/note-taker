
const router = require('express').Router();
const {  findById, createNewNote} = require('../../lib/notes');
const generateUniqueId = require('generate-unique-id');
let { notes } = require('../../db/db');



// GET route for notes
router.get('/notes', (req, res) => {
    let results = notes;
    console.log(results);
    
    res.json(results);
});

// GET Route for note id
router.get('/notes/:id', (req, res,) => {
  //now check to see if there is a note with this noteID
   const result = findById(req.params.id, notes);// whatever you need to do to find a note with the noteID
  
   //if there is a note with that noteID
    if (result) {
        res.json(result);
      } else {  // if there is not a note with that noteID
        res.send(404);
      }
  });

 // POST route for adding new note
 router.post('/notes/', (req, res) => {
    //req.body.id = notes.length.toString();

    req.body.id = generateUniqueId();

    const note = createNewNote(req.body, notes);
    if (note) {
      res.json(note);
    } else {
      res.status(400).send('The note is not properly formatted.');
    }
   
});

// DELETE route for note
router.delete('/notes/:id', (req, res) =>{
  // delete note based on id
  let noteId = req.params.id;
  
  // remove item from notes array
  notes = notes.filter(note => note.id != noteId)
  
  res.end();
})


  module.exports = router;