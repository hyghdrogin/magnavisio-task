/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require("dotenv");

dotenv.config();

const config = {
	DATABASE_USERNAME: process.env.DATABASE_USERNAME,
	DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
	DATABASE_NAME: process.env.DATABASE_NAME,
	DATABASE_HOST: process.env.DATABASE_HOST,
	DATABASE_PORT: process.env.DATABASE_PORT,
};

module.exports = {
	development: {
		username: config.DATABASE_USERNAME,
		password: config.DATABASE_PASSWORD,
		database: config.DATABASE_NAME,
		host: config.DATABASE_HOST,
		port: config.DATABASE_PORT,
		dialect: "mysql"
	},
	test: {
		username: config.DATABASE_USERNAME,
		password: config.DATABASE_PASSWORD,
		database: config.DATABASE_NAME,
		host: config.DATABASE_HOST,
		port: config.DATABASE_PORT,
		dialect: "mysql"
	},
	production: {
		username: config.DATABASE_USERNAME,
		password: config.DATABASE_PASSWORD,
		database: config.DATABASE_NAME,
		host: config.DATABASE_HOST,
		port: config.DATABASE_PORT,
		dialect: "mysql"
	}
};
