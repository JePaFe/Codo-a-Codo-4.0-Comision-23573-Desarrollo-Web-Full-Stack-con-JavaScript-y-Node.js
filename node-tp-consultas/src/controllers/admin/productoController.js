const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const { validationResult } = require("express-validator");

const model = require("../../models/Product");
const modelCategory = require("../../models/Category");

const index = async (req, res) => {
  try {
    const productos = await model.findAll({
      include: "Category",
    });
    // console.log(productos);
    res.render("admin/productos/index", { productos });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const create = async (req, res) => {
  try {
    const categorias = await modelCategory.findAll();
    res.render("admin/productos/create", { categorias });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const store = async (req, res) => {
  console.log(req.body, req.file);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    try {
      const categorias = await modelCategory.findAll();
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
    // console.log(producto);

    if (producto && req.file) {
      const extname = path.extname(req.file.originalname);
      sharp(req.file.buffer)
        .resize(300)
        .toFile(
          path.resolve(
            __dirname,
            `../../../public/uploads/productos/producto_${producto.id}${extname}`
          )
        );

      producto.imagen = "miimagen.jpg";
      producto.save();
    }

    res.redirect("/admin/productos");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const edit = async (req, res) => {
  try {
    const producto = await model.findByPk(req.params.id);

    if (producto) {
      const categorias = await modelCategory.findAll();
      res.render("admin/productos/edit", { values: producto, categorias });
    } else {
      res.status(404).send("El producto no existe");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  console.log(req.params, req.body, path.extname(req.file.originalname));

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    try {
      const categorias = await modelCategory.findAll();
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
    const affected = await model.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affected[0] == 1) {
      const extname = path.extname(req.file.originalname);
      if (req.file) {
        sharp(req.file.buffer)
          .resize(300)
          .toFile(
            path.resolve(
              __dirname,
              `../../../public/uploads/productos/producto_${req.params.id}${extname}`
            )
          );
      }

      res.redirect("/admin/productos");
    } else {
      res.status(500).send("Error al actualizar el producto");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const destroy = async (req, res) => {
  console.log(req.params);

  try {
    const result = await model.destroy({
      where: {
        id: req.params.id,
      },
    });
    // console.log(result);

    if (result == 1) {
      if (
        fs.existsSync(
          path.resolve(
            __dirname,
            `../../../public/uploads/productos/producto_${req.params.id}.jpg`
          )
        )
      ) {
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
    }

    res.redirect("/admin/productos");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
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
