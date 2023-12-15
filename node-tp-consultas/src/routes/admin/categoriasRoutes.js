const express = require("express");
const router = express.Router();

const model = require("../../models/Category");

const { body } = require("express-validator");

const validations = [
  body("nombre")
    .not()
    .isEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Tiene que tener 3 caracteres")
    .custom((value, { req }) => {
      return new Promise(async (resolve, reject) => {
        try {
          const user = await model.findOne({
            where: {
              nombre: value,
            },
          });

          if (user) {
            console.log(user);
            return reject();
          } else {
            return resolve();
          }
        } catch (error) {
          console.log(error);
        }
      });
    })
    .withMessage("La categoría esta duplicada"),
];

const controller = require("../../controllers/admin/categoriaController");

// CRUD = Create, Read, Update, Delete

router.get("/", controller.index);
// router.get("/:id", controller.show);

router.get("/create", controller.create);
router.post("/", validations, controller.store);

router.get("/:id/edit", controller.edit);
router.put("/:id", validations, controller.update);

router.delete("/:id", controller.destroy);

module.exports = router;
