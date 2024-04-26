import { Request, Response } from "express";
import models from "../models";
import { errorResponse, successResponse, logError } from "../utils";

export const createOrder = async ( req: Request, res: Response) => {
	try {
		const { id } = req.user;
		const { orderName, price } = req.body;

		const newOrder = await models.Order.create({
			userId: id,
			orderName,
			price
		});
		return successResponse(res, 201, "Order created successfully", { newOrder });
	} catch (error) {
		logError((error as Error), req);
		return errorResponse(res, 500, "Internal server error");
	}
};

export const readOrder = async (req: Request, res:Response) => {
	try {
		const { orderId } = req.params;
		const order = await models.Order.findOne({
			where: {
				id: orderId
			}
		});
		if(!order) {
			return errorResponse(res, 404, "Order not found");
		}
		return successResponse(res, 200, "Order fetched successfully", { order });
	} catch (error) {
		logError((error as Error), req);
		return errorResponse(res, 500, "Internal server error");
	}
};

export const readOrders = async (req: Request, res: Response) => {
	try {
		const page = parseInt(req.query.page as string) || 1;
		const pageSize = 10;
		const offset = (page - 1) * pageSize;

		const orders = await models.Order.findAndCountAll({
			where: {
				active: true
			},
			limit: pageSize,
			offset,
		});

		if (!orders) {
			return errorResponse(res, 404, "Orders not found");
		}

		return successResponse(res, 200, "Orders fetched successfully", {
			totalItems: orders.count,
			currentPage: page,
			totalPages: Math.ceil(orders.count / pageSize),
			orders: orders.rows,
		});
	} catch (error) {
		logError(error as Error, req);
		return errorResponse(res, 500, "Internal server error");
	}
};

export const updateOrder = async (req: Request, res: Response) => {
	try {
		const { id } = req.user;
		const { orderId } = req.params;
        
		const order = await models.Order.findOne({
			where: {
				id: orderId,
				userId: id
			}
		});

		if (!order) {
			return errorResponse(res, 404, "Order not found");
		}

		await order.update(req.body);

		return successResponse(res, 200, "Order updated successfully", { order });
	} catch (error) {
		logError(error as Error, req);
		return errorResponse(res, 500, "Internal server error");
	}
};

export const deleteOrder = async (req: Request, res: Response) => {
	try {
		const { id } = req.user;
		const { orderId } = req.params;
		
		const order = await models.Order.findOne({
			where: {
				id: orderId,
				userId: id
			}
		});

		if (!order) {
			return errorResponse(res, 404, "Order not found");
		}

		await order.update({
			active: false
		});

		return successResponse(res, 200, "Order deleted successfully");
	} catch (error) {
		logError(error as Error, req);
		return errorResponse(res, 500, "Internal server error");
	}
};
