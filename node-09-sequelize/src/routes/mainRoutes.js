const { Router } = require("express");
const router = Router();

const controller = require("../controllers/mainController");

router.get("/", controller.index);

module.exports = router;
