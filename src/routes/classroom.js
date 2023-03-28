import { Router } from "express";
import { ClassroomController } from "../controllers";
// import { checkJwt } from "../middlewares";

const router = Router();

// router.get("/approve/:id", [checkJwt], UserController.approve);
router.get("/", ClassroomController.getAll);
// router.get("/:id", [checkJwt], UserController.getOneById);

router.post("/", ClassroomController.create);
export default router;
