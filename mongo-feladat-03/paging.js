async function countMovies() {

    const numberOfMovies = await db.movies.find({}).count();

    for (let i = 0; i < numberOfMovies; i += 3) {

        const movie1 = db.movies.find({}, { title: 1, category: 1, _id: 0 }).skip(i).limit(1);
        const movie2 = db.movies.find({}, { title: 1, category: 1, _id: 0 }).skip(i + 1).limit(1);
        const movie3 = db.movies.find({}, { title: 1, category: 1, _id: 0 }).skip(i + 2).limit(1);

        print(movie1[0].title, ":", movie1[0].category.toLowerCase(), "movie");
        print(movie2[0].title, ":", movie2[0].category.toLowerCase(), "movie");
        print(movie3[0].title, ":", movie3[0].category.toLowerCase(), "movie");
        print("--page over--")
    }
  }
  
countMovies();
  