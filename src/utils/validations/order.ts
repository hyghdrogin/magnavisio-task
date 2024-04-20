import Joi from "joi";
import { CreateOrderInterface, UpdateOrderInterface } from "..";

const options = {
	stripUnknown: true,
	abortEarly: false,
	errors: {
		wrap: {
			label: "",
		},
	},
};

export const validateOrderCreation = (orderDetails: CreateOrderInterface) => {
	const orderCreation = Joi.object({
		orderName: Joi.string().min(3).max(100).required(),
		price: Joi.number().required(),
	});
	return orderCreation.validate(orderDetails, options);
};

export const validateOrderUpdate = (orderUpdateDetails: UpdateOrderInterface) => {
	const updateOrder = Joi.object({
		price: Joi.number(),
		status: Joi.string().valid("pending", "shipped", "cancelled")
	});
	return updateOrder.validate(orderUpdateDetails, options);
};