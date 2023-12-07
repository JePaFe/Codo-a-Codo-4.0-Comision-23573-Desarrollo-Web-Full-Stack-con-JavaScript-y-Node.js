const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Category = require("./Category");

const Product = sequelize.define("Product", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Product.belongsTo(Category);

// (async () => {
//   await sequelize.sync();
//   // await sequelize.sync({ force: true });
//   // await sequelize.sync({ alter: true });
// })();

module.exports = Product;
