import { Router as serverRouter } from "express";
import userRoutes from "./user";
import orderRoutes from "./order";
import { authenticateUser } from "../middlewares";

const router = serverRouter();

router.use("/user", userRoutes );
router.use("/order", authenticateUser, orderRoutes );

export default router;