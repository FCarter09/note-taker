
const router = require('express').Router();
const {  findById } = require('../../lib/notes');
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
    const note = req.body;
    notes.push(note);
    res.end()
   
});

// DELETE route for note
router.delete('/notes/:id', (req, res) =>{
  // delete note based on id
  let noteId = req.params.id
  console.log('before delete', notes);
  
  // remove item from notes array
  notes = notes.filter(note => note.id != noteId)
  
  res.end();
})


  module.exports = router;