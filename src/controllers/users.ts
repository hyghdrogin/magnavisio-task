/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import {
	hashPassword,
	comparePassword, generateToken, errorResponse,
	successResponse, logError
} from "../utils";
import models from "../models";

export const signupUser = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;

		const emailCheck = await models.User.findOne({
			where: {
				email
			}
		});

		if (emailCheck) {
			return errorResponse(res, 409, "User with email already exists");
		}

		const hashedPassword = await hashPassword(password);
		await models.User.create({
			email,
			password: hashedPassword
		});

		return successResponse(res, 201, "User created successfully");
	} catch (error) {
		logError((error as Error), req);
		return errorResponse(res, 500, "Internal server error");
	}
};

export const signinUser = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;

		const userData = await models.User.findOne({
			where: {
				email
			}
		});
		if (!userData) {
			return errorResponse(res, 409, "Invalid user details");
		}

		const passwordCheck = await comparePassword(password, userData.password);
		if (!passwordCheck) {
			return errorResponse(res, 409, "Invalid user details");
		}

		const token = await generateToken({
			id: userData.id,
			email: userData.email
		});

		res.cookie("token", token, { httpOnly: true });
		const { password: removedPassword, ...user } = userData.toJSON();

		return successResponse(res, 200, "User Logged in successfully", {
			user
		});
	} catch (error) {
		logError((error as Error), req);
		return errorResponse(res, 500, "Internal server error");
	}
};


export const logOut = async (req: Request, res: Response) => {
	try {
		res.clearCookie("token");
		return successResponse(res, 204, "");
	} catch (error) {
		logError((error as Error), req);
		return errorResponse(res, 500, "Internal server error");
	}
};