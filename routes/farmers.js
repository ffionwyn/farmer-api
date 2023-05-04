import { Router } from "express";
import { getFarmers, postFarmers, getAllFarmerInfo } from "../controllers/farmers.js";

const router = Router();

router.get("/", getFarmers);
router.post("/", postFarmers);
router.get("/all/:id", getAllFarmerInfo)

export default router;
