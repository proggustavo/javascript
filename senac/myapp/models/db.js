const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("form_test", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
