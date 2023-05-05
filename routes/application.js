import { Router } from "express";
import { deleteApplication, getApplication, getApplicationByID, updateApplication, postApplication } from "../controllers/application.js";

const router = Router();

router.get("/:id", getApplicationByID);
router.get("/", getApplication);
router.post("/", postApplication);
router.delete("/", deleteApplication)
router.patch("/:id", updateApplication)

export default router;

