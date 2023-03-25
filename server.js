const express = require (`express`);
const drinks = require ('./models/drinks');
const app = express ();
const PORT = 3000;




app.listen(3000, () => {
    console.log('Listening on port 3000!');
})