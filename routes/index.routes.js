import { Router } from "express";
import usersRouter from "./users.routes.js"
import categoryRouter from "./category.routes.js"

const router = Router()
router.use("/superadmin/users", usersRouter)
router.use("/admin/category", categoryRouter)


export default router;