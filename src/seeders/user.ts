import { hashPassword } from "../utils";

const hashPasswordAsync = async () => {
	const password = "password";

	try {
		const hashedPassword = await hashPassword(password);
		return hashedPassword;
	} catch (error) {
		console.error("Error hashing password:", error);
	}
};

export const generateUsers = async () => {
	try {
		const hashedPassword = await hashPasswordAsync();

		const users = [
			{
				id: "d939b42e-8848-4d70-8b64-a93953c28910",
				email: "test1@gmail.com",
				password: hashedPassword
			},
			{
				id: "1f0d3324-d0bf-429d-a520-3311a1dde2e2",
				email: "test2@gmail.com",
				password: hashedPassword
			},
			{
				id: "1687325a-8bc8-4a90-9bed-b82fb4bdc313",
				email: "test3@gmail.com",
				password: hashedPassword
			},
			{
				id: "fb440f03-6cba-4c9e-9672-2e15aa039718",
				email: "test4@gmail.com",
				password: hashedPassword
			},
			{
				id: "15a4ffeb-e35b-47ab-8abd-a1e11e10f0fd",
				email: "test5@gmail.com",
				password: hashedPassword
			},
			{
				id: "9f2cba03-d57d-489e-8027-e894778af1b0",
				email: "test6@gmail.com",
				password: hashedPassword
			},
			{
				id: "a1f0df3f-4cc9-499e-be2b-f9a519e1c2b4",
				email: "test7@gmail.com",
				password: hashedPassword
			},
			{
				id: "5ce3c07c-eb81-4ce5-be74-db571ed595f6",
				email: "test8@gmail.com",
				password: hashedPassword
			},
			{
				id: "ef446c9c-76da-4500-a974-094a9471e7c2",
				email: "test9@gmail.com",
				password: hashedPassword
			},
			{
				id: "c0c338ac-a6b9-4c19-b266-0a1461e9e36c",
				email: "test10@gmail.com",
				password: hashedPassword
			}
		];
		return users;
	} catch (error) {
		console.error("Error seeding to database", error);
		process.exit(1);
	}
};