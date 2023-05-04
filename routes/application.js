import { Router } from "express";
import { deleteApplication, getApplication, getApplicationByID, postApplication } from "../controllers/application.js";

const router = Router();

router.get("/:id", getApplicationByID);
router.get("/", getApplication);
router.post("/", postApplication);
router.delete("/", deleteApplication)

export default router;

