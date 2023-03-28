import { Router } from "express";
import auth from "./auth";
import user from "./user";
import classroom from "./classroom"

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/classroom", classroom);

export default routes;
