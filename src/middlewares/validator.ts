/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils";

const options = {
	stripUnknown: true,
	abortEarly: false,
	errors: {
		wrap: {
			label: ""
		}
	}
};

const validate = (schemas: any, values: Record<string, unknown>) => {
	const error = [];
	for (const paramToValidate of Object.keys(schemas)) {
		const value = values[paramToValidate];
		if (value) {
			const schema = schemas[paramToValidate];
			const result = schema.validate(values[paramToValidate], options);
			if (result.error) {
				error.push(
					result.error.details.map(
						(detail: { message: unknown; }) => `${detail.message}`
					)
				);
			} else {
				values[paramToValidate] = result.value;
			}
		} else {
			error.push(`${paramToValidate} missing`);
		}
	}
	if (error.length > 0) return { error: error.flat() };
	return {};
};

export const validator = (requestSchema: any, auth = true) => {
	const schema = auth
		? {
			...requestSchema,
		}
		: requestSchema;
	return (req: Request, res: Response, next: NextFunction) => {
		const { error } = validate(schema, req.body);
		if (error) {
			return errorResponse(res, 422, error[0]);
		}
		next();
	};
};
