import { Model, DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../config/database";

export default class User extends Model {
	public id!: string;
	public email!: string;
	public password!: string;
}

User.init({
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		primaryKey: true
	},
	email: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
}, 
{
	sequelize,
	tableName: "users",
});