import { Router } from "express";
import { getFarmers, postFarmers, getFarmerByName } from "../controllers/farmers.js";

const router = Router();

router.get("/", getFarmers);
router.post("/", postFarmers);
router.get("/:name", getFarmerByName);

export default router;
