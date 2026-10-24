
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

    phoneNo: {
     type: String,
    required: [true, "Phone number is required"],
     trim: true,
    match: [
      /^[6-9]\d{9}$/,
      "Enter a valid 10-digit Indian mobile number"
    ],
},

    email: {
      type: String,
      required: [true, "AKGEC email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    githubUsername: {
      type: String,
      required: [true, "GitHub username is required"],
      trim: true,
      match: [
      /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i,
      "Enter a valid GitHub username format",
     ],
},
    year: {
      type: String,
      required: [true, "Year is required"],
      enum: {
        values: ["2nd Year", "3rd Year", "4th Year"],
        message: "Invalid year",
      },
    },
    laptop: {
      type: String,
      required: [true, "Laptop is required"],
      enum: {
        values: ["Yes", "No"],
        message: "Invalid laptop option",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
