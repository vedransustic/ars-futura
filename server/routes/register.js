const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const { REGISTER_ROUTE } = require("../const/routes");

router.post(REGISTER_ROUTE, registerController.handleNewUser);

module.exports = router;
