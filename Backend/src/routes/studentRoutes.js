const express = require("express");
const { registerStudent } = require("../controllers/studentController");
const verifyRecaptcha = require("../middleware/verifyRecaptcha");

const router = express.Router();

router.post("/register", verifyRecaptcha, registerStudent);

module.exports = router;
