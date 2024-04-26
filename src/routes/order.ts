import { Router as orderRouter } from "express";
import { 
	createOrder, readOrder, 
	readOrders, updateOrder, 
	deleteOrder
} from "../controllers";
import { validator } from "../middlewares";
import { orderCreation, orderUpdate } from "../utils";

const router = orderRouter();

router.post("/create", validator(orderCreation), createOrder);
router.get("/:orderId", readOrder);
router.get("/", readOrders);
router.patch("/:orderId", validator(orderUpdate), updateOrder);
router.delete("/:orderId", deleteOrder);

export default router;