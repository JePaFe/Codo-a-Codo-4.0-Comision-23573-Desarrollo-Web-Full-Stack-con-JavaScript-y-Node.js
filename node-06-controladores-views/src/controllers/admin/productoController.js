const index = (req, res) => {
  res.send("Listado de productos");
};

const store = (req, res) => {
  console.log(req.body);
  res.send("Crear Producto");
};

const update = (req, res) => {
  console.log(req.params, req.body);
  res.send("Producto modificado");
};

const destroy = (req, res) => {
  console.log(req.params);
  res.send("Producto borrado");
};

module.exports = {
  index,
  store,
  update,
  destroy,
};
