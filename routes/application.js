import { Router } from "express";
import { deleteApplication, getApplication, getApplicationByID, updateFarmerID, postApplication } from "../controllers/application.js";

const router = Router();

router.get("/:id", getApplicationByID);
router.get("/", getApplication);
router.post("/", postApplication);
router.delete("/", deleteApplication)
router.patch("/:farmerID", updateFarmerID)

export default router;

