import { Router } from "express";
import { getAllcategories } from "../controller/category.controller.js";

const router = Router()

router.get("/", getAllcategories)

export default router;