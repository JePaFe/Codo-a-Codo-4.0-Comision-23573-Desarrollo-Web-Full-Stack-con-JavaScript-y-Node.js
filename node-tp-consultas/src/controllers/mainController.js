const model = require("../models/Product");

const index = async (req, res) => {
  console.log(req.query);

  let where = {};

  if (req.query.category) {
    // where = {
    //   CategoryId: req.query.category,
    // };
    where.CategoryId = req.query.category;
  }

  // if (req.query.collection) {
  //   // where = {
  //   //   CollectionId: req.query.collection,
  //   // };
  //   where.CollectionId = req.query.collection;
  // }

  console.log(where);

  try {
    const productos = await model.findAll({
      where: where,
    });
    res.render("inicio", {
      mensaje: "Hola EJS",
      productos,
      layout: "layouts/adminLayout",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  index,
};
