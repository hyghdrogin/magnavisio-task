import { Router as serverRouter } from "express";
import userRoutes from "./user";
import orderRoutes from "./order";

const router = serverRouter();

router.use("/user", userRoutes );
router.use("/order", orderRoutes );

export default router;