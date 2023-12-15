const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const { body } = require("express-validator");

const validations = [
  body("nombre")
    .not()
    .isEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Tiene que tener 3 caracteres"),
  body("precio").not().isEmpty().withMessage("El precio es obligatorio"),
  body("CategoryId").not().isEmpty().withMessage("La categoría es obligatoria"),
];

const controller = require("../../controllers/admin/productoController");

// CRUD = Create, Read, Update, Delete

router.get("/", controller.index);
// router.get("/:id", controller.show);

router.get("/create", controller.create);
router.post("/", upload.single("imagen"), validations, controller.store);

router.get("/:id/edit", controller.edit);
router.put("/:id", upload.single("imagen"), validations, controller.update);

router.delete("/:id", controller.destroy);

module.exports = router;
