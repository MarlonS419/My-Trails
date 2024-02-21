import express from "express";

import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import trailsRouter from "./api/v1/trailsRouter.js"
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import statesRouter from "./api/v1/statesRouter.js";
import userDataRouter from "./api/v1/userDataRouter.js";

const rootRouter = new express.Router();

rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/states", statesRouter);
rootRouter.use("/api/v1/trails", trailsRouter);
rootRouter.use("/api/v1/user", userDataRouter)

// place your server-side routes here

export default rootRouter;