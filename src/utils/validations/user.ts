import Joi from "joi";
import { Credentials, } from "..";

const options = {
	stripUnknown: true,
	abortEarly: false,
	errors: {
		wrap: {
			label: "",
		},
	},
};

export const validateUserCredentials = (userDetails: Credentials) => {
	const userSignUpLogin = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(6).max(36).required(),
	});
	return userSignUpLogin.validate(userDetails, options);
};