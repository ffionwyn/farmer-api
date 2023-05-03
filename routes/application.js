import { Router } from "express";
import { getApplication } from "../controllers/application.js";

const router = Router();

router.get("/", getApplication);

export default router;
