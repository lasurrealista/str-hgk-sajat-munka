cd C:\Program Files\MongoDB\Server\4.4\bin

mongo

use videoStore

db.createCollection("movies")

db.movies.insertMany( [
      { title: "Poltergeist", category: "fantasy", director: "Steven Spielberg"},
      { title: "Indiana Jones and the Kingdom of the Crystal Skull", category: "action", director: "Steven Spielberg"},
      { title: "Always", category: "romantic", director: "Steven Spielberg"},
      { title: "E.T. the Extra-Terrestrial", category: "fantasy", director: "Steven Spielberg"},
      { title: "Letters From Iwo Jima", category: "action", director: "Clint Eastwood"},
      { title: "The Bridges of Madison County", category: "romantic", director: "Clint Eastwood"},
      { title: "The Mule", category: "action", director: "Clint Eastwood"},
      { title: "Avatar", category: "fantasy", director: "James Cameron"},
      { title: "Titanic", category: "romantic", director: "James Cameron"},
      { title: "The Terminator", category: "action", director: "James Cameron"}
   ] )

db.movies.updateMany({}, {$set: {ratings: []}})

db.movies.updateOne({title: "Indiana Jones and the Kingdom of the Crystal Skull"}, {$push: {ratings: 5} })
db.movies.updateOne({title: "Indiana Jones and the Kingdom of the Crystal Skull"}, {$push: {ratings: 4} })

db.movies.updateMany({category: "romantic"}, {$push: {ratings: 4} })
db.movies.updateMany({category: "action"}, {$push: {ratings: 5} })

db.movies.updateMany({director: "Clint Eastwood"}, {$push: {ratings: 5} })
db.movies.updateMany({director: "James Cameron"}, {$push: {ratings: 3} })

db.movies.updateMany({}, {$set: { releaseYear: 2000 }} ) 

//Just showing.
db.movies.aggregate([
... {$project: {category: {$toUpper: "$category"}}}])

//Modifying.
db.movies.find().forEach(
    function(movie) { db.movies.update( {"_id": movie._id}, {"$set": {"category": movie.category.toUpperCase() }})}) 
db.movies.updateMany( {}, [{$set: {category: {$toUpper: "$category"} }}] )

db.movies.find()

pwd()

load('C:\\Users\\evelin.szarka\\Documents\\Újratervezés program\\Training\\Feladatok\\str-hgk-sajat-munka\\mongo-feladat-01\\setMoviesYear.js')


