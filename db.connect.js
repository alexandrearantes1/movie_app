const mongoose  = require('mongoose');
const Movie = require('./Movie.js');

const uri = 'mongodb://localhost:27017/movieAPI';

const db = mongoose.connect(uri, 
    {
        useNewUrlParser:true, 
        useUnifiedTopology:true
    }
)
.then(() => {
    console.log('connection with database successful.');
})
.catch((e) => {
    console.log(e);
});
module.exports.db = db;
module.exports.Movie = Movie;

// Movie.find({startYear: {$gt: 2022}}).then(data => {console.log(data.length)});