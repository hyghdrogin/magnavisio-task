import Joi, { ObjectSchema } from "joi";
import { Credentials } from "..";

const userCredentials: ObjectSchema = Joi.object<Credentials>({
	email: Joi.string().email().required(),
	password: Joi.string().min(6).max(36).required(),
});

export { userCredentials };