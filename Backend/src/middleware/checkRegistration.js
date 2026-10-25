
function checkRegistration(req, res, next) {
  if (process.env.REGISTRATION_OPEN === "false") {
    return res.status(403).json({
      message: "Registration is currently closed.",
    });
  }

  next();
}

module.exports = checkRegistration;
