import { Router } from "express";
import { getApplication, getApplicationByID, postApplication } from "../controllers/application.js";

const router = Router();

router.get("/", getApplication);
router.get("/:id", getApplicationByID);
router.post("/", postApplication);

export default router;

