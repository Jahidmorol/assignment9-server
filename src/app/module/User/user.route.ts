import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/register", userController.createUser);

export const UserRoutes = router;
