const Movie = require("./movieTable");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error)
    }
}

exports.listMovies = async () => {
    try {
        return await Movie.findAll();
    } catch (error) {
        console.log(error)
    }
}

//can update either title or actor through --title. Doesn't have be both at once!!
exports.updateMovie = async (movieObj) => {
    try {
        await Movie.update({ 
            title: movieObj.titleUpdate, 
            actor: movieObj.actorUpdate, 
            year: movieObj.yearUpdate,
            //genre: movieObj.genreUpdate
        }, 
            {
            where: {
                title: movieObj.title, 
            }
        });
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.destroy({where: {title: movieObj.title}})
    } catch (error) {
        console.log(error)
    }
}