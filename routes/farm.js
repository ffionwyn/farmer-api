import { Router } from "express";
import { getFarm } from "../controllers/farm.js";

const router = Router();

router.get("/", getFarm);


export default router;
