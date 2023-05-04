import { Router } from "express";
import { getApplication, getApplicationByID, postApplication } from "../controllers/application.js";

const router = Router();

router.get("/:id", getApplicationByID);
router.get("/", getApplication);
router.post("/", postApplication);

export default router;

