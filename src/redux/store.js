import { createStore } from "redux";
import imageReducer from "./reducer.js";

const store = createStore(imageReducer);

export default store;
