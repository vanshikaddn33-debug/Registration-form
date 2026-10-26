const express = require("express");
const { registerStudent } = require("../controllers/studentController");
const verifyRecaptcha = require("../middleware/verifyRecaptcha");
const registrationLimiter = require("../middleware/rateLimiter");
const checkRegistration = require("../middleware/checkRegistration");

const router = express.Router();

router.post("/register", registrationLimiter, checkRegistration, verifyRecaptcha, registerStudent);

module.exports = router;
