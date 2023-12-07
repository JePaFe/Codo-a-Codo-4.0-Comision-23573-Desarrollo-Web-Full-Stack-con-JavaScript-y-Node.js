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

const item = async (req, res) => {
  console.log(req.query);
  try {
    const producto = await product.findByPk(req.params.id, {
      include: "Category",
    });
    res.render("item", { producto });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  index,
  item,
};
