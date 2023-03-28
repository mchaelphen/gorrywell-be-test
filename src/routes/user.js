import { Router } from "express";
import { UserController } from "../controllers";
// import { checkJwt } from "../middlewares";

const router = Router();

// router.get("/approve/:id", [checkJwt], UserController.approve);
router.get("/", UserController.getAll);
// router.get("/:id", [checkJwt], UserController.getOneById);

export default router;
