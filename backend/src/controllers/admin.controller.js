import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {Student} from "../models/student.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import {Admin} from "../models/admin.model.js";
import {Franchise} from "../models/franchise.model.js";


const createAdmin = asyncHandler(async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body;

    if(!name || !email || !password){
        throw new ApiError(400, "Please provide all the required fields")
    }

    const admin = await Admin.create({
        name,
        email,
        password
    });

    const admin_new = admin.select("-password");

    return res
    .status(200)
    .json(new ApiResponse(200, admin_new,"Admin created successfully"));
});


const loginAdmin = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        throw new ApiError(400, "Please provide all the required fields")
    }

    const admin = await Admin.findOne({email}).select("-password");

    if(!admin){
        throw new ApiError(404, "Invalid credentials")
    }

    const isPasswordCorrect = await admin.isPasswordCorrect(password);

    if(!isPasswordCorrect){
        throw new ApiError(404, "Invalid credentials")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, admin,"Admin logged in successfully"));
});


const getallStudents = asyncHandler(async (req, res) => {
    const students = await Student.find({});

    return res
    .status(200)
    .json(new ApiResponse(200,students,"All students fetched successfully"));
});


const getallFranchises = asyncHandler(async (req, res) => {
    const franchises = await Franchise.find({});

    return res
    .status(200)
    .json(new ApiResponse(200,franchises,"All franchises fetched successfully"));
});


const getNewFranchiseRequests = asyncHandler(async (req, res) => {
    const franchises = await Franchise.find({isVerified: false});

    return res
    .status(200)
    .json(new ApiResponse(200,franchises,"All new franchise requests fetched successfully"));
});


const getFranchise = asyncHandler(async (req, res) => {
    const id = req.params.id;

    if(!id){
        throw new ApiError(400, "Please provide the franchise id")
    }

    const franchise = await Franchise.findById(id);

    if(!franchise){
        throw new ApiError(404, "Franchise not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(200,franchise,"Franchise application fetched successfully"));
});


const verifyFranchise = asyncHandler(async (req, res) => {
    const id = req.params.id;

    if(!id){
        throw new ApiError(400, "Please provide the franchise id")
    }

    const franchise = await Franchise.findById(id);

    if(!franchise){
        throw new ApiError(404, "Franchise not found")
    }

    franchise.isVerified = true;

    await franchise.save();

    return res
    .status(200)
    .json(new ApiResponse(200,franchise,"Franchise application verified successfully"));
});



export {
    createAdmin,
    loginAdmin,
    getallStudents,
    getallFranchises,
    getNewFranchiseRequests,
    getFranchise,
    verifyFranchise
}