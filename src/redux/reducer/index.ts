<<<<<<< Updated upstream
import { ApplicationReducer } from "./app";
import { LoginReducer, UserReducer } from "./user";

const appReducer = {
  user: UserReducer,
  app: ApplicationReducer,

  login: LoginReducer,
=======
import { BusReducer } from "./bus";
import { UserReducer } from "./user";

const appReducer = {
  user: UserReducer,

  bus:BusReducer,
>>>>>>> Stashed changes
};

export default appReducer;
