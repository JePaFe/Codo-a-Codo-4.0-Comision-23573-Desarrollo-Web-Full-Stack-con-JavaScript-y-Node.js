const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const bcryptjs = require("bcryptjs");

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.beforeSave(async (user, options) => {
  const { password } = user;

  const hash = await bcryptjs.hash(password, 12);

  user.password = hash;
});

(async () => {
  await sequelize.sync();
})();

module.exports = User;
