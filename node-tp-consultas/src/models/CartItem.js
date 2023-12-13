const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Cart = require("./Cart");
// const Product = require("./Product");

const CartItem = sequelize.define("CartItem", {
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

CartItem.belongsTo(Cart);
// CartItem.belongsTo(Product);

module.exports = CartItem;
