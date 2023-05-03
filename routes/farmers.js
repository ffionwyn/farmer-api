import { Router } from "express";
import { getFarmers } from "../controllers/farmers.js";

const router = Router();

router.get("/", getFarmers);

export default router;
