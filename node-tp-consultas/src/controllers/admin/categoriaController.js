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
  console.log(req.body);

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
    res.send(error);
  }
};

const edit = async (req, res) => {
  try {
    const categoria = await model.findByPk(req.params.id);

    if (categoria) {
      res.render("admin/categorias/edit", { values: categoria });
    } else {
      res.status(404).send("No existe el categoria");
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
    return res.render("admin/categorias/edit", {
      values: { ...req.params, ...req.body },
      errors: errors.array(),
    });
  }

  try {
    const count = await model.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // console.log(count);

    res.redirect("/admin/categorias");
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

    res.redirect("/admin/categorias");
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
