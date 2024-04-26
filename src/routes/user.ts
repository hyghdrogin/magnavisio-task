import { Router as userRouter } from "express";
import { signupUser, signinUser, logOut} from "../controllers";
import { authenticateUser } from "../middlewares";
import { userCredentials } from "../utils";
import { validator } from "../middlewares";

const router = userRouter();

router.post("/signup", validator(userCredentials), signupUser);
router.post("/signin", validator(userCredentials), signinUser);
router.get("/signout", authenticateUser, logOut);

export default router;