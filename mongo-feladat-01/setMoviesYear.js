function randomYears(items) {
    return items[Math.floor(Math.random()*items.length)];   
}

function setYearToMovies() {
    const years = [1980, 1992, 2005, 2017];
    const titles = [
        "Poltergeist", 
        "Indiana Jones and the Kingdom of the Crystal Skull", 
        "Always", 
        "E.T. the Extra-Terrestrial", 
        "Letters From Iwo Jima",
        "The Bridges of Madison County",
        "The Mule",
        "Avatar",
        "Titanic",
        "The Terminator"
    ];
    titles.forEach( title => db.movies.updateOne({"title": title}, {$set: {releaseYear: randomYears(years)}}));
};

setYearToMovies();
