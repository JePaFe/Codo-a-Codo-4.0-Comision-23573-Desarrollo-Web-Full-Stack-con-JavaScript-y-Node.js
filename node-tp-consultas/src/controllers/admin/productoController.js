const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const { validationResult } = require("express-validator");

const model = require("../../models/Product");
const modelCategory = require("../../models/Category");

const index = async (req, res) => {
  // req.query ?collectionId=2
  try {
    const productos = await model.findAll({
      include: "Category",
      limit: 9,
      // attributes: ["id", "nombre", "precio"],
      // where: {
      //   collectionId: req.query.collectionId
      // }
    });
    console.log(productos);
    res.render("admin/productos/index", { productos });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const create = async (req, res) => {
  try {
    const categorias = await modelCategory.findAll({
      // order: [["nombre", "ASC"]],
    });
    res.render("admin/productos/create", { categorias });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const store = async (req, res) => {
  console.log(req.body);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    try {
      const categorias = await modelCategory.findAll({
        // order: [["nombre", "ASC"]],
      });
      return res.render("admin/productos/create", {
        categorias,
        values: req.body,
        errors: errors.array(),
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  try {
    const producto = await model.create(req.body);
    console.log(producto);

    if (req.file) {
      sharp(req.file.buffer)
        .resize(300)
        .toFile(
          path.resolve(
            __dirname,
            `../../../public/uploads/productos/producto_${producto.id}.webp`
          )
        );

      // producto.image = `producto_${producto.id}.webp`;
      // producto.save();
    }

    res.redirect("/admin/productos");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const edit = async (req, res) => {
  try {
    const producto = await model.findByPk(req.params.id);

    if (producto) {
      const categorias = await modelCategory.findAll();

      res.render("admin/productos/edit", { values: producto, categorias });
    } else {
      res.status(404).send("No existe el producto");
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const update = async (req, res) => {
  console.log(req.params, req.body);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    try {
      const categorias = await modelCategory.findAll({
        // order: [["nombre", "ASC"]],
      });
      return res.render("admin/productos/edit", {
        categorias,
        values: { ...req.params, ...req.body },
        errors: errors.array(),
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  try {
    const count = await model.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // console.log(count);

    if (req.file) {
      sharp(req.file.buffer)
        .resize(300)
        .toFile(
          path.resolve(
            __dirname,
            `../../../public/uploads/productos/producto_${req.params.id}.jpg`
          )
        );
    }

    res.redirect("/admin/productos");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const destroy = async (req, res) => {
  console.log(req.params);

  try {
    const destroyed = await model.destroy({
      where: {
        id: req.params.id,
      },
    });
    // console.log(destroyed);

    if (destroyed == 1) {
      fs.unlink(
        path.resolve(
          __dirname,
          `../../../public/uploads/productos/producto_${req.params.id}.jpg`
        ),
        (error) => {
          if (error) {
            console.log(error);
          }
        }
      );
    }

    res.redirect("/admin/productos");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = {
  index,
  create,
  store,
  edit,
  update,
  destroy,
};
