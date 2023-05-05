import { Router } from "express";
import { getFarm, postFarm } from "../controllers/farm.js";

const router = Router();

router.get("/", getFarm);
router.post("/", postFarm);


export default router;
