const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  counter: 0,
  dynamicCounter: 0,
});

export default rootReducer;
