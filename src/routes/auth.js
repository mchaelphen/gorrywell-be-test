import { Router } from "express";
import AuthController from "../controllers/AuthController";
// import { checkJwt } from "../middlewares";

const router = Router();
//Login route
// router.get("/check-user", [checkJwt], AuthController.checkUser);
router.post("/sign-up", AuthController.signUp);
router.post("/sign-in", AuthController.signIn);
// router.post("/forget-password", AuthController.forgetPassword);
// router.post("/reset-password", AuthController.resetPassword);

export default router;
