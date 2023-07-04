import express from "express";
import trimRequest from "trim-request";
import {
  login,
  logout,
  refreshToken,
  register,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/register").post(trimRequest.all, register);
router.route("/register").post(trimRequest.all, login);
router.route("/register").post(trimRequest.all, logout);
router.route("/register").post(trimRequest.all, refreshToken);

export default router;
