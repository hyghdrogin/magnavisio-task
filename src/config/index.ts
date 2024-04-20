import dotenv from "dotenv";

dotenv.config();

const config = {
	PORT: process.env.PORT,
	DATABASE_URL: process.env.DATABASE_URL  as string,
	SECRET: process.env.SECRET,
	DIALECT: process.env.DIALECT,
	JWT_KEY: process.env.JWT_KEY as string,
};

const incompleteEntry = Object.entries(config)
	.map(([key, value]) => [key, !!value])
	.filter(([, value]) => !value)
	.map(([key]) => key);

if (incompleteEntry.length > 0) {
	throw new Error(`Missing Configuration: ${incompleteEntry.join(", ")}`);
}

export default config;
