const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema ({ 
    tconst: String,
    titleType: String,
    primaryTitle: String,
    originalTitle: String,
    isAdult: Number,
    startYear: Number,
    endYear: String,
    runtimeMinutes: Number,
    genres: [String]
});

module.exports = mongoose.model('Movie', movieSchema);