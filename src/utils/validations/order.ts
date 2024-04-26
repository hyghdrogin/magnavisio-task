import Joi from "joi";
import { CreateOrderInterface, UpdateOrderInterface } from "..";

export const orderCreation = Joi.object<CreateOrderInterface>({
	orderName: Joi.string().min(3).max(100).required(),
	price: Joi.number().required(),
});

export const orderUpdate = Joi.object<UpdateOrderInterface>({
	price: Joi.number(),
	status: Joi.string().valid("pending", "shipped", "cancelled")
});
