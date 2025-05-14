const express = require('express');

const router = express.Router();

const adminController = require("../controller/adminController");



router.post("/cadastro",adminController.postUser);
router.get("/info",adminController.getAdmin);

module.exports = router;