import { Model, DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../config/database";
import { OrderStatus } from "../utils";

export default class Order extends Model {
	public id!: string;
	public userId!: string;
	public price!: number;
	public status!: OrderStatus;
	public active!: boolean;
}

Order.init({
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		primaryKey: true
	},
	userId: {
		type: DataTypes.UUID,
		allowNull: false,
		references: {
			model: "users",
			key: "id"
		}
	},
	orderName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	price: {
		type: DataTypes.DECIMAL(10, 2),
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		defaultValue: OrderStatus.Pending
	},
	active: {
		type: DataTypes.BOOLEAN,
		defaultValue: true
	}
}, 
{
	sequelize,
	tableName: "orders",
	timestamps: true
});