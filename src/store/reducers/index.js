import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import task from "./taskReducer";

const rootReducer = combineReducers({
  task
});




const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer);
export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
export default { store, persistor };
