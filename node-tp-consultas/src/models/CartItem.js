const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Cart = require("./Cart");

const CartItem = sequelize.define("CartItem");

CartItem.belongsTo(Cart);

module.exports = CartItem;
