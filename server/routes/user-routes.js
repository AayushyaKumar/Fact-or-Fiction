const express = require("express");

const authController = require("../controllers/authControllers")
const mlController = require("../controllers/mlController");
const router = express.Router();
router.route("/signup").post(
    authController.signup,
)

router.route("/news").post(mlController.news);

module.exports = router;
