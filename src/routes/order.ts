import { Router as orderRouter } from "express";
import { 
	createOrder, readOrder, 
	readOrders, updateOrder, 
	deleteOrder
} from "../controllers";
import { authenticateUser } from "../middlewares";

const router = orderRouter();

router.post("/create", authenticateUser, createOrder);
router.get("/:orderId", readOrder);
router.get("/", readOrders);
router.patch("/:orderId", authenticateUser, updateOrder);
router.delete("/:orderId", authenticateUser, deleteOrder);

export default router;