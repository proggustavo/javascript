const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("form_test", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  charset: "utf8",
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true,
  },
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
