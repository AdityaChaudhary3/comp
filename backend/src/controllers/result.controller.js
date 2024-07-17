import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import  { Result } from "../models/result.model.js";
import mongoose from "mongoose";

const createResult = asyncHandler(async (req, res) => {
    const {
        studentId,
        courseId,
        franchiseId,
        max_marks,
        obtained_marks,
        percentage,
    } = req.body;
    
    if(!studentId || !courseId || !franchiseId || !max_marks || !obtained_marks || !percentage){
        throw new ApiError(400, "All fields are required");
    }

    const checkResult = await Result.findOne({studentId, courseId, franchiseId});
    if(checkResult){
        throw new ApiError(400, "Result already exists");
    }

    const result = await Result.create({
        studentId,
        courseId,
        franchiseId,
        max_marks,
        obtained_marks,
        percentage,
    });

    return res
    .status(201)
    .json(new ApiResponse(201,result ,"Result created successfully"));
});


const createResultOfStudent = asyncHandler(async (req, res) => {
    const {
        studentId,
        courseId,
        max_marks,
        obtained_marks,
        percentage,
    } = req.body;

    if(!studentId || !courseId || !max_marks || !obtained_marks || !percentage){
        throw new ApiError(400, "All fields are required");
    }

    const checkResult = await Result.findOne({studentId, courseId});
    if(checkResult){
        throw new ApiError(400, "Result already exists");
    }

    const result = await Result.create({
        studentId,
        courseId,
        max_marks,
        obtained_marks,
        percentage,
    });

    return res
    .status(201)
    .json(new ApiResponse(201,result ,"Result created successfully"));

});

const createResultOfFranchise = asyncHandler(async (req, res) => {
    const {
        franchiseId,
        courseId,
        max_marks,
        obtained_marks,
        percentage,
    } = req.body;

    if(!franchiseId || !courseId || !max_marks || !obtained_marks || !percentage){
        throw new ApiError(400, "All fields are required");
    }

    const checkResult = await Result.findOne({franchiseId, courseId});
    if(checkResult){
        throw new ApiError(400, "Result already exists");
    }

    const result = await Result.create({
        franchiseId,
        courseId,
        max_marks,
        obtained_marks,
        percentage,
    });

    return res
    .status(201)
    .json(new ApiResponse(201,result ,"Result created successfully"));
});

const getResultsByFranchise = asyncHandler(async (req, res) => {
    const {franchiseId}  = req.params;

    if(!franchiseId){
        throw new ApiError(400, "Franchise id is required");
    }

    const results = await Result.find({franchiseId: new mongoose.Types.ObjectId(franchiseId)});

    return res
    .status(200)
    .json(new ApiResponse(200,results ,"Results fetched successfully"));
    
});

const getResultsByStudent = asyncHandler(async (req, res) => {
    const { studentId } = req.params;

    if(!studentId){
        throw new ApiError(400, "Student id is required");
    }

    const results = await Result.find({studentId});

    return res
    .status(200)
    .json(new ApiResponse(200,results ,"Results fetched successfully"));
});

const getResultsByCourse = asyncHandler(async (req, res) => {
    const { courseId } = req.params;

    if(!courseId){
        throw new ApiError(400, "Course id is required");
    }

    const results = await Result.find({courseId});

    return res
    .status(200)
    .json(new ApiResponse(200,results ,"Results fetched successfully"));
});

const deleteResultById = asyncHandler(async (req, res) => {
    const { resultId } = req.params;

    if(!resultId){
        throw new ApiError(400, "Result id is required");
    }

    const result = await Result.findByIdAndDelete(resultId);

    if(!result){
        throw new ApiError(404, "Result not found");
    }

    return res
    .status(200)
    .json(new ApiResponse(200,null ,"Result deleted successfully"));
});

const updateResultById = asyncHandler(async (req, res) => {
    const { resultId } = req.params;

    if(!resultId){
        throw new ApiError(400, "Result id is required");
    }

    const {
        studentId,
        courseId,
        franchiseId,
        max_marks,
        obtained_marks,
        percentage,
    } = req.body;

    // if(!studentId || !courseId || !franchiseId || !max_marks || !obtained_marks || !percentage){
    //     throw new ApiError(400, "All fields are required");
    // }

    const result = await Result.findById(resultId);

    if(!result){
        throw new ApiError(404, "Result not found");
    }

    if(studentId != result.studentId || courseId != result.courseId || franchiseId != result.franchiseId){
        throw new ApiError(400, "Cannot change student, course or franchise id");
    }

    const updatedResult = await Result.findByIdAndUpdate(resultId, {
        max_marks,
        obtained_marks,
        percentage,
    }, {new : true});

    return res
    .status(200)
    .json(new ApiResponse(200,updatedResult ,"Result updated successfully"));
});

const deleteResultAll = asyncHandler(async (req, res) => {
    await Result.deleteMany({});
    return res
    .status(200)
    .json(new ApiResponse(200,null ,"All results deleted successfully"));
});


const deleteResultFranchiseCourse = asyncHandler(async (req, res) => {
    const franchiseId = req.query.franchiseId;
    const courseId = req.query.courseId;

    if(!franchiseId || !courseId){
        throw new ApiError(400, "Franchise id and course id are required");
    }

    await Result.deleteMany({franchiseId, courseId});

    return res
    .status(200)
    .json(new ApiResponse(200,null ,"Results deleted successfully"));
});

export {
    createResult,
    createResultOfStudent,
    createResultOfFranchise,
    getResultsByFranchise,
    getResultsByStudent,
    getResultsByCourse,
    deleteResultById,
    updateResultById,
    deleteResultAll,
    deleteResultFranchiseCourse,
}