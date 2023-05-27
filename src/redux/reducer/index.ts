import { ApplicationReducer } from "./app";
import { LoginReducer, UserReducer } from "./user";

const appReducer = {
  user: UserReducer,
  app: ApplicationReducer,

  login: LoginReducer,
};

export default appReducer;
