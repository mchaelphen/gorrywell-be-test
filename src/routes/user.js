import { Router } from "express";
import { UserController } from "../controllers";
import { checkJwt, isMentor } from "../middlewares/checkJwt";

const router = Router();

// router.get("/approve/:id", [checkJwt], UserController.approve);
router.get("/", UserController.getAll);
router.get("/get-mentee/:id", [checkJwt], [isMentor], UserController.getMentee);
// router.get("/get-leaderboard-per-class/:id", [checkJwt], [isMentor], UserController.getLeaderboardByClassroom);
// router.get("/:id", [checkJwt], UserController.getOneById);
router.patch("/assign-mentee/:id", [checkJwt, isMentor], UserController.assignMentee);
router.patch("/update-score/:id", [checkJwt, isMentor], UserController.updateScore);

export default router;
