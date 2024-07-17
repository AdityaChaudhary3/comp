import { Router } from "express";
import {
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
} from "../controllers/result.controller.js";

const router = Router();

router.route("/create-result").post(createResult);
router.route("/create-result-student").post(createResultOfStudent);
router.route("/create-result-franchise").post(createResultOfFranchise);
router.route("/get-results-franchise/:franchiseId").get(getResultsByFranchise);
router.route("/get-results-student/:studentId").get(getResultsByStudent);
router.route("/get-results-course/:courseId").get(getResultsByCourse);
router.route("/delete-result/:resultId").delete(deleteResultById);
router.route("/update-result/:resultId").put(updateResultById);
router.route("/delete-all-results").delete(deleteResultAll);
router.route("/delete-results-franchise-course").delete(deleteResultFranchiseCourse);

export default router;
