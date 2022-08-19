
const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();
const apiRoutes = require('./routes/apiRoutes/notesRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index');

// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());
// link assets (css, javascript code, and images) from public folder
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// route to listen to PORT
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})