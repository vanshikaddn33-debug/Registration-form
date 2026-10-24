
const verifyRecaptcha = async (req, res, next) => {
  try {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const { captchaToken } = req.body || {};

    if (!secret) {
      console.error("RECAPTCHA_SECRET_KEY is missing");
      return res.status(500).json({
        message: "reCAPTCHA is not configured on the server",
      });
    }

    if (!captchaToken) {
      return res.status(400).json({
        message: "Please complete the reCAPTCHA verification",
      });
    }

    const params = new URLSearchParams({
      secret,
      response: captchaToken,
    });

    const googleResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      }
    );

    if (!googleResponse.ok) {
      return res.status(502).json({
        message: "Unable to verify reCAPTCHA right now",
      });
    }

    const result = await googleResponse.json();

    if (!result.success) {
      console.error(
        "reCAPTCHA verification failed:",
        result["error-codes"]
      );

      return res.status(400).json({
        message: "reCAPTCHA verification failed. Please try again.",
      });
    }

    next();
  } catch (error) {
    console.error("reCAPTCHA error:", error.message);

    return res.status(502).json({
      message: "Unable to verify reCAPTCHA right now",
    });
  }
};

module.exports = verifyRecaptcha;
