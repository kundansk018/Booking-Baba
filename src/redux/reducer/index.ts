import { ApplicationReducer } from "./app";
import { UserReducer } from "./user";

const appReducer = {
  user: UserReducer,
  app: ApplicationReducer,
};

export default appReducer;
