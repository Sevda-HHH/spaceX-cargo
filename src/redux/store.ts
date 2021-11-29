import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { shipmentReducer } from "./reducers/shipment";

const middlewares = applyMiddleware(logger, thunk)
export const store = createStore(shipmentReducer, middlewares)