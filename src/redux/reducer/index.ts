import { ApplicationReducer } from "./app";
import { LoginReducer, UserReducer } from "./user";
import { BusReducer } from "./bus";
import { HotelReducer } from "./hotel";
import { TrainReducer } from "./train";

const appReducer = {
  user: UserReducer,
  app: ApplicationReducer,
  bus: BusReducer,
  login: LoginReducer,
  hotel: HotelReducer,
  train: TrainReducer,
};
export default appReducer;
