import { Router } from "express";
import { ClassroomController } from "../controllers";
import { checkJwt, isMentor } from "../middlewares/checkJwt";

const router = Router();

router.get("/", ClassroomController.getAll);
router.post("/", [checkJwt], [isMentor], ClassroomController.create);
router.patch("/update-exercise/:id", [checkJwt], [isMentor], ClassroomController.updateExercise);
export default router;
