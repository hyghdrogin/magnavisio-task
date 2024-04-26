import { Sequelize, Dialect } from "sequelize";
import config from ".";

const sequelize = new Sequelize(config.DATABASE_URL, {
	dialect: config.DATABASE_DIALECT as Dialect,
	logging: false,
});

export default sequelize;
