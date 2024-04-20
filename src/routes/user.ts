import { Router as userRouter } from "express";
import { signupUser, signinUser, logOut} from "../controllers";
import { authenticateUser } from "../middlewares";

const router = userRouter();

router.post("/signup", signupUser);
router.post("/signin", signinUser);
router.get("/signout", authenticateUser, logOut);

export default router;