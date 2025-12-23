import express from "express";
import {getheadersExample} from "../controllers/example-headers"
const router = express.Router();

router.get("/", getheadersExample)

export default router;
