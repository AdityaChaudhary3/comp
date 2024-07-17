import { Router } from "express";
import {
    createStudent,
    loginStudent,
    editStudent,
    deleteStudent
} from "../controllers/student.controller.js";
import {upload} from  "../middlewares/multer.middleware.js";

const router = Router();

router.route("/student-register").post(
    upload.fields([
        { name: "photo", maxCount: 1 },
        { name: "id_proof", maxCount: 1 },
    ]),
    createStudent
);
        
router.route("/student-login").post(loginStudent);

router.route("/student-edit/:studentId").put(editStudent);
router.route("/student-delete/:studentId").delete(deleteStudent);

export default router;