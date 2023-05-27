import { ApplicationReducer } from "./app";
import { LoginReducer, UserReducer } from "./user";
import { BusReducer } from "./bus";

const appReducer = {
  user: UserReducer,
  app: ApplicationReducer,
  bus:BusReducer,
  login: LoginReducer,

}
export default appReducer;
