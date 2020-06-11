const Sequelize = require("sequelize");
const connection = new Sequelize("guiapress", "root", "Toronto@01", {
	host: "localhost",
	dialect: "mysql",
	timezone: "-05:00"
});

module.exports = connection;