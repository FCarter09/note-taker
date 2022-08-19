const path = require("path");
const router = require('express').Router();


 // GET route for index.html homepage
 router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });

// GET route for notes.html page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
  });


 // wildcard route for invalid endpoint
 router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

  module.exports = router;