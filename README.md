# movie_app

An API created to put in practice concepts learned in Colt Steele's course The Web Developer Bootcamp. 

It was built in Node.js, Express and Mongoose using IMDb data to retrieve basic info about movies. 

Only entries with category "movie" were included in the database (no TV shows, series etc).

How it works:

The database was built using MongoDB and populated with IMDb public data provided in TSV format directly from their website. 

Express was used to route URL requests. Connection to DB was done using Mongoose and the information is provided in JSON format. 

Usage examples:

Search by movie title:
/api/movies/MovieTitle
will return a list of movies matching MovieTitle.

Search by year:
/api/movies/2013
will return all movies in the database that were released in the year 2013. 

Search by runtime (in minutes, Min/Max):
/api/movies/runtime/30/90
will return all movies with runtime in the 30 to 90 minutes range.

Limitations and further development:

This API was built as an exercise on REST request/response principles and database connectivity and it does not have any security features implemented.

Other routes could be included to search by cast member, director etc (the current database does not contain this infromation and it would have to be populated by a separate TSV file from IMDb).
