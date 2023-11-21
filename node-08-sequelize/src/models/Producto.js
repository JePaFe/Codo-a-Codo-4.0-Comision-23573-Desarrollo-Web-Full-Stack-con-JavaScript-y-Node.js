const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Producto = sequelize.define("Producto", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

(async () => {
  //   await sequelize.sync({ force: true });
  await sequelize.sync();
})();

module.exports = Producto;
