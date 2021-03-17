const db = require("./db");

const Post = db.sequelize.define("post", {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = { Post };

// Para criar novos campos nas tabelas
Post.sync({ update: true });

// para recriar as estruturas

Post.sync({ force: true });
