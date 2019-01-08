import { createStore, applyMiddleware } from "redux";
import allReducer from "../reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(allReducer, applyMiddleware(thunk, logger));

export default store;
