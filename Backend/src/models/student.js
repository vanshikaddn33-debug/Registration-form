
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    studentId: {
      type: String,
      required: [true, "Student ID is required"],
      unique: true,
      trim: true,
    },

    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: {
        values: ["Male", "Female", "Other"],
        message: "Invalid gender",
      },
    },

    branch: {
      type: String,
      required: [true, "Branch is required"],
      trim: true,
    },

    residence: {
      type: String,
      required: [true, "Residence is required"],
      enum: {
        values: ["Hosteller", "Day Scholar"],
        message: "Invalid residence",
      },
    },

    contactNo: {
      type: String,
      required: [true, "Contact number is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "AKGEC email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
