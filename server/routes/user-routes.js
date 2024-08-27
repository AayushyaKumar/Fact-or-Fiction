const express = require("express");

const authController = require("../controllers/authControllers")
const mlController = require("../controllers/mlController");
const router = express.Router();
router.post("/signup",authController.signup)

router.post("/news",authController.protectedRoute, authController.restrictTo('admin','contributer'),mlController.news);
router.post("/login",authController.login)
router.post('/forgotPassword', authController.forgotPassword)
router.patch('/resetPassword/:token', authController.resetPassword)
router.post('/newPassword',authController.updateCurrentPassword)
module.exports = router;
