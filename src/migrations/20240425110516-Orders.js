/* eslint-disable @typescript-eslint/no-unused-vars */
"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("orders", {
			id: {
				type: Sequelize.DataTypes.UUID,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
			},
			userId: {
				type: Sequelize.DataTypes.UUID,
				allowNull: false,
				references: {
					model: "users",
					key: "id",
				},
			},
			orderName: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: Sequelize.DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			status: {
				type: Sequelize.DataTypes.STRING,
				defaultValue: "Pending",
			},
			active: {
				type: Sequelize.DataTypes.BOOLEAN,
				defaultValue: true,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DataTypes.DATE,
				defaultValue: new Date(),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DataTypes.DATE,
				defaultValue: new Date(),
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("orders");
	},
};
