const express = require("express");
const app = express();
const methodOverride = require("method-override");

// app.use((req, res, next) => {
//   res.send("Sitio en mantenimiento");
// });

app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

const mainRoutes = require("./routes/mainRoutes");
const exp = require("constants");
app.use(mainRoutes);

app.use("/admin/productos", require("./routes/adminProductosRoutes"));

app.use((req, res, next) => {
  res.status(404).send("La pagina no existe");
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
