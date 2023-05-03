import { Router } from "express";
import { getApplication, postApplication } from "../controllers/application.js";

const router = Router();

router.get("/", getApplication);
router.post("/", postApplication);

export default router;

