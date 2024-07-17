import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    franchiseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Franchise",
    },
    max_marks: {
        type: Number,
        required: true,
    },
    obtained_marks: {
        type: Number,
        required: true,
    },
    percentage: {
        type: Number,
        required: true,
    },
},
{timestamps: true});

export const Result = mongoose.model("Result", resultSchema);