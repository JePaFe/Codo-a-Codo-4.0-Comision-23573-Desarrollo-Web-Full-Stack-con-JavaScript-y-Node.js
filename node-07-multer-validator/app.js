const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

// app.use((req, res, next) => {
//   res.send("Sitio en mantenimiento");
// });

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: false }));

const mainRoutes = require("./src/routes/mainRoutes");
app.use(mainRoutes);

app.use("/admin/productos", require("./src/routes/admin/productosRoutes"));

app.use((req, res, next) => {
  res.status(404).send("La pagina no existe");
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
