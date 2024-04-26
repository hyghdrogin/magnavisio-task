import dotenv from "dotenv";

dotenv.config();

const config = {
	PORT: process.env.PORT,
	DATABASE_URL: process.env.DATABASE_URL  as string,
	DATABASE_USERNAME: process.env.DATABASE_USERNAME,
	DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
	DATABASE_NAME: process.env.DATABASE_NAME,
	DATABASE_HOST: process.env.DATABASE_HOST,
	DATABASE_PORT: process.env.DATABASE_PORT,
	DATABASE_DIALECT: process.env.DATABASE_DIALECT,
	SECRET: process.env.SECRET,
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
