const Director = require("./directorTable");

exports.addDirector = async (directorObj) => {
    try {
        await Director.create(directorObj);
    } catch (error) {
        console.log(error)
    }
}

exports.listDirectors = async () => {
    try {
        return await Director.findAll();
    } catch (error) {
        console.log(error)
    }
}

exports.updateDirector = async (directorObj) => {
    try {
        await Director.update({ director: directorObj.directorUpdate }, {
            where: {
                director: directorObj.director, 
            }
        });
    } catch (error) {
        console.log(error)
    }
}

exports.deleteDirector = async (directorObj) => {
    try {
        await Director.destroy({where: {director: directorObj.director}})
    } catch (error) {
        console.log(error)
    }
}