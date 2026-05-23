import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { getCurrentUser } from "../controllers/user.controller.js"
import cacheMiddleware from "../middlewares/cache.middleware.js";


const userRouter = express.Router()

userRouter.get(
    "/current-user",
    isAuth,

    cacheMiddleware(
        (req) => `current-user:${req.id}`,
        300
    ),

    getCurrentUser
)

export default userRouter