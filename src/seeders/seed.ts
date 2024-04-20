import sequelize from "../config/database";
import { generateUsers } from "./user";
import { orders } from "./order";

const main = async () => {
	try {
		await sequelize.authenticate();
		const users = await generateUsers();
		await sequelize.models.User.bulkCreate(users);
		await sequelize.models.Order.bulkCreate(orders);

		console.log("Seeding done...");
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

main();
