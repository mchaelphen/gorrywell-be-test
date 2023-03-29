import { Router } from "express";
import { ClassroomController } from "../controllers";
import { checkJwt, isMentor } from "../middlewares/checkJwt";

const router = Router();

// router.get("/approve/:id", [checkJwt], UserController.approve);
router.get("/", ClassroomController.getAll);
// router.get("/:id", [checkJwt], UserController.getOneById);

router.post("/", [checkJwt], [isMentor], ClassroomController.create);
export default router;
