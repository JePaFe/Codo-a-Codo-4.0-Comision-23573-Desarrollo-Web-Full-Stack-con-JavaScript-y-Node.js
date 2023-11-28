require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

// const session = require("express-session");
const session = require("cookie-session");

// app.use(
//   session({
//     secret: "S3cr3t01",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

app.use(
  session({
    keys: ["S3cr3t01", "S3cr3t02"],
  })
);

const isLogin = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/login");
  }

  next();
};

// app.use((req, res, next) => {
//   res.send("Sitio en mantenimiento");
// });

const sequelize = require("./src/models/connection");

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: false }));

app.use(require("./src/routes/authRoutes"));

const mainRoutes = require("./src/routes/mainRoutes");
app.use(mainRoutes);

app.use(
  "/admin/productos",
  isLogin,
  require("./src/routes/admin/productosRoutes")
);

app.use((req, res, next) => {
  res.status(404).send("La pagina no existe");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log(error);
  }

  console.log(`http://localhost:${PORT}`);
});
