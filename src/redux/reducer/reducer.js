import {combineReducers} from "redux";
import entitiesReducers from "../entities/entities";

export default combineReducers({
  entities: entitiesReducers
});
