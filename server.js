'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
let bcrypt = require('bcrypt');

fccTesting(app); //For FCC testing purposes

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
// builds hash system with salting, displays hash on console.log
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash)
  
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log(res)
  })
})


//END_ASYNC

//START_SYNC
// set logic for hashing and the result of salting

let hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

let result = bcrypt.compareSync(myPlaintextPassword, hash);



//END_SYNC

// listener to display on localhost3000

app.listen(process.env.PORT || 3000, () => {});
