import { Router as orderRouter } from "express";
import { 
	createOrder, readOrder, 
	readOrders, updateOrder, 
	deleteOrder
} from "../controllers";

const router = orderRouter();

router.post("/create", createOrder);
router.get("/:orderId", readOrder);
router.get("/", readOrders);
router.patch("/:orderId", updateOrder);
router.delete("/:orderId", deleteOrder);

export default router;