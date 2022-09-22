const express   = require('express');
const Movie     = require('./Movie');
const router    = express.Router();

router.get('/movies/movie/:movieTitle', (req, res) => {
    const nameRegex = new RegExp(req.params.movieTitle);
    const query = { primaryTitle: { $regex: nameRegex, $options: 'i'} }   
    
    Movie.find(query, {'_id':0}).then(data => {
        res.send(data);
    });
});

router.get('/movies/year/:movieYear', (req, res) => {
    const movieYear = req.params.movieYear;
    const query = { startYear: parseInt(movieYear) }   

    Movie.find(query, {'_id':0}).then(data => {
        res.send(data);
    });
});

router.get('/movies/runtime/:minMinutes/:maxMinutes', (req, res) => {
    const minMinutes = parseInt(req.params.minMinutes);
    const maxMinutes = parseInt(req.params.maxMinutes);

    const query = { startYear: { $gte: minMinutes, $lte:maxMinutes } };

    Movie.find(query, {'_id':0}).then(data => {
        res.send(data);
    });
});

module.exports = router;