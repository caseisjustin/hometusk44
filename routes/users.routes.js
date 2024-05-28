import { Router } from "express";
import { getAllusers, createUser, getUserByEmail, updateUser, deleteUser } from "../controller/users.controller.js";
import { adminsCheck, userDeleteCheck } from "../middleware/admins.middleware.js"

const router = Router()

router.get("/", adminsCheck, getAllusers)
router.get("/email", adminsCheck, getUserByEmail)
router.post("/", adminsCheck, createUser)
router.put("/email", adminsCheck, updateUser)
router.delete("/email", userDeleteCheck, deleteUser)



export default router;