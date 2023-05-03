import { Router } from "express";
import { getFarmers } from "../controllers/farmers";

const router = Router();

router.get("/farmers", getFarmers);

export default router;
