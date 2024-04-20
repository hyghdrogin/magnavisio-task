import { Request, Response, NextFunction } from "express";
import { validateUserToken, errorResponse, logError } from "../utils";
import models from "../models";

export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let token;

		if (req.headers && req.headers.cookie) {
			const cookies = req.headers.cookie.split("; ");
			const tokenCookie = cookies.find(cookie => cookie.startsWith("token="));
		
			if (tokenCookie) {
				token = tokenCookie.split("=")[1];
			} else {
				return errorResponse(res, 401, "Token cookie not found");
			}
		}

		if (!token) {
			return errorResponse(res, 403, "Authorization not found");
		}
		const decoded = await validateUserToken(token);
		const user = await models.User.findByPk(decoded?.id);
		if (!user) {
			return errorResponse(res, 404, "User account not found");
		}

		req.user = user;
		return next();
	} catch (error) {
		logError((error as Error), req);
		return errorResponse(res, 500, "Internal Server error");
	}
};
