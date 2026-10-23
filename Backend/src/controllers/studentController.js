
const Student = require("../models/student");

const registerStudent = async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const {
      name,
      studentId,
      gender,
      branch,
      residence,
      contactNo,
      email,
    } = req.body || {};

    const fields = {
      name,
      studentId,
      gender,
      branch,
      residence,
      contactNo,
      email,
    };

    const missingFields = Object.entries(fields)
      .filter(([key, value]) =>
        typeof value !== "string" || !value.trim()
      )
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: "Required fields are missing or empty",
        missingFields,
      });
    }

    const normalizedStudentId = studentId.trim();
    const normalizedEmail = email.trim().toLowerCase();

    const existingStudent = await Student.findOne({
      $or: [
        { studentId: normalizedStudentId },
        { email: normalizedEmail },
      ],
    });

    if (existingStudent) {
      return res.status(409).json({
        message: "Student ID or email is already registered",
      });
    }

    const student = await Student.create({
      name: name.trim(),
      studentId: normalizedStudentId,
      gender,
      branch: branch.trim(),
      residence,
      contactNo: contactNo.trim(),
      email: normalizedEmail,
    });

    return res.status(201).json({
      message: "Student registered successfully",
      student,
    });
  } catch (error) {
    console.error("Registration error:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        message: "Student ID or email is already registered",
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Student validation failed",
        error: error.message,
      });
    }

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = { registerStudent };
