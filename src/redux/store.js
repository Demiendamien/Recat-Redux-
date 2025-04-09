import { createStore } from "redux";
import rootReducer from "./reducers"; // Assurez-vous que ce fichier combine tous vos reducers

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;