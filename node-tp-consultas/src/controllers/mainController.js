const product = require("../models/Product");

const index = async (req, res) => {
  try {
    const productos = await product.findAll();
    res.render("inicio", { mensaje: "Hola EJS", productos });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  index,
};
