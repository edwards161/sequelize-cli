const yargs = require("yargs");
const { sequelize } = require("./db/connection");
//imports CRUD functions
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/movieMethods");
const { addDirector, listDirectors, updateDirector, deleteDirector } = require ("./movie/directorMethods");
const Director = require("./movie/directorTable");
const Movie = require("./movie/movieTable");



const app = async (yargsObj) => {
    try {
        await sequelize.sync();
        //  Director.hasMany(Movie, { foreignKey: "directorId" });
        //  Movie.belongsTo(Director, { foreignKey: "directorId" });
        // MOVIE CRUD OPERATIONS
        if (yargsObj.addMovie) {
            //add movie to database
            /* No point in creating a variable you will only use once!
            e.g. const movieObj = {title: yargsObj.title, actor: yargsObj.actor}
            */ 
            await addMovie({ 
                title: yargsObj.title, 
                actor: yargsObj.actor, 
                year: yargsObj.year,
                //genre: yargsObj.genre,
             });
        } else if (yargsObj.listMovies) {
            //list all movies
            console.log(await listMovies());
        } else if (yargsObj.updateMovie) {
            //updates a movie tile and/or actor
            await updateMovie(yargsObj);
        } else if (yargsObj.deleteMovie) {
            //deletes a movie
            await deleteMovie(yargsObj)
        }  
        // DIRECTOR CRUD OPERATIONS 
          else if (yargsObj.addDirector) {
            await addDirector ({director: yargsObj.director}) 
        } else if (yargsObj.listDirectors) {
            console.log(await listDirectors())
        } else if (yargsObj.deleteDirector) {
            await deleteDirector(yargsObj)
        } else if (yargsObj.updateDirector) {
            await updateDirector(yargsObj)
        } else {
            console.log("Incorrect command")
        }
    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv);