import { Router } from "express";
import AuthController from "../controllers/AuthController";

const router = Router();
//Login route
router.post("/sign-up", AuthController.signUp);
router.post("/sign-in", AuthController.signIn);

export default router;
