const { validationResult } = require("express-validator");

const model = require("../../models/Category");

const index = async (req, res) => {
  try {
    const categorias = await model.findAll();
    // console.log(categorias);
    res.render("admin/categorias/index", { categorias });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const create = (req, res) => {
  res.render("admin/categorias/create");
};

const store = async (req, res) => {
  console.log(req.body, req.file);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/categorias/create", {
      values: req.body,
      errors: errors.array(),
    });
  }

  try {
    const categoria = await model.create(req.body);
    // console.log(categoria);

    res.redirect("/admin/categorias");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const edit = async (req, res) => {
  console.log(req.query, req.params);
  try {
    const categoria = await model.findByPk(req.params.id);

    if (categoria) {
      res.render("admin/categorias/edit", { values: categoria });
    } else {
      res.status(404).send("El categoria no existe");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  console.log(req.params, req.body);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/categorias/edit", {
      values: { ...req.params, ...req.body },
      errors: errors.array(),
    });
  }

  try {
    const affected = await model.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affected[0] == 1) {
      res.redirect("/admin/categorias");
    } else {
      res.status(500).send("Error al actualizar el categoria");
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

    res.redirect("/admin/categorias");
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
