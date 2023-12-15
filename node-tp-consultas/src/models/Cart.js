const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const User = require("./User");

const Cart = sequelize.define("Cart");

Cart.belongsTo(User);

module.exports = Cart;
