const express   = require('express');
const ejs       = require('ejs');
const mongoose  = require('mongoose');
const routes    = require('./routes');

// connecting to the mongoDB database
const uri = 'mongodb://localhost:27017/movieAPI';
const db  = mongoose.connect( uri, {useNewUrlParser:true, useUnifiedTopology:true} )
.then(() => {
    console.log(`Database connected.`);
})
.catch((error) => {
    console.dir(error.code);
});

// initialize Express
const app = express();
const port = 3000;

// Express setup
app.set('json spaces', 4);
app.use(express.json());
app.use('/api', routes);

app.listen(port, ()=> {
    console.log(`listening to port ${port}`);
});











