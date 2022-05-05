require("dotenv").config();
const { Sequelize } = require("sequelize");
 


//with this shorthand method we have to use curly brackets to import it
exports.sequelize = new Sequelize(process.env.MYSQL_URI);

