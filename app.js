import express from "express"
import dotenv from "dotenv"
import router from "./routes/index.routes.js"

dotenv.config()

const app = express()

app.use(express.text())

app.use("/", router)

export default app;