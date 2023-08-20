import { applyMiddleware, createStore } from "redux";
import rootReducer from "../rootReducer/rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import flightBookingReducer from "../flightBooking/flightBookingReducer";

const store = createStore(
  flightBookingReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
