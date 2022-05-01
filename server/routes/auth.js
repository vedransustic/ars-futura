const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { LOGIN_ROUTE } = require("../const/routes");

router.post(LOGIN_ROUTE, authController.handleLogin);

module.exports = router;
