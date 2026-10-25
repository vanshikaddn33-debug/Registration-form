
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
  enum: {
    values: [
      "CE",
      "CSE",
      "CSIT",
      "CS",
      "IT",
      "EE",
      "EEE",
      "ECE",
      "ME",
      "CSE(AI)",
      "CSE(AIML)",
      "CSE(DS)",
      "AIML",
      "CS(Hindi)",
    ],
    message: "Please select a valid branch",
  },
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
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
       /^[a-zA-Z0-9._%+-]+@akgec\.ac\.in$/i,
       "Please use your AKGEC college email address",
      ],
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
      values: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
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
