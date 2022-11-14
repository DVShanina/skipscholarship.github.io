import { createStore } from "redux"; 
import currentValue from "./reducers/currentValue";

const store = createStore(currentValue); 
export default store;

