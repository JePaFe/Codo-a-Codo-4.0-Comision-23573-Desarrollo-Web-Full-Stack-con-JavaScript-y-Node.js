const { Router } = require("express");
const router = Router();

const controller = require("../controllers/mainController");

router.get("/", controller.index);
router.get("/item/:id", controller.item);

module.exports = router;
