const express = require("express");

const authController = require("../controllers/authControllers")
const mlController = require("../controllers/mlController");
const router = express.Router();
router.route("/signup").post(authController.signup)
router.route("/").get(authController.AllUser)
router.route("/news").post(authController.protectedRoute, authController.restrictTo('admin','contributer'),mlController.news);
router.route("/login").post(authController.login)
module.exports = router;
