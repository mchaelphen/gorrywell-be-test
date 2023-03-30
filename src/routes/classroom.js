import { Router } from "express";
import { ClassroomController } from "../controllers";
import { checkJwt, isMentor, isMentorOrMentee } from "../middlewares/checkJwt";

const router = Router();

router.get("/", [checkJwt, isMentorOrMentee] , ClassroomController.getAll);
router.get("/check-class/:id", [checkJwt, isMentorOrMentee] , ClassroomController.checkClass);
router.post("/", [checkJwt, isMentor], ClassroomController.create);
router.patch("/update-exercise/:id", [checkJwt, isMentor], ClassroomController.updateExercise);
export default router;
