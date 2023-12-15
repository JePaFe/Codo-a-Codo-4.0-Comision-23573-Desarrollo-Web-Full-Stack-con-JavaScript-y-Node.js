const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Category = require("./Category");

const Product = sequelize.define(
  "Product",
  {
    // productId: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    // timestamps: false,
  }
);

// (async () => {
//   await sequelize.sync();
//   // await sequelize.sync({ force: true });
//   // await sequelize.sync({ alter: true });
// })();

Product.belongsTo(Category);

module.exports = Product;
