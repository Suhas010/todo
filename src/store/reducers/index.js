import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import task from "./taskReducer";
const persistConfig = {
  key: 'task',
  storage,
  blacklist: ['modal']
}
const rootReducer = combineReducers({
  root: persistReducer(persistConfig, task)
});
export let store = createStore(rootReducer);
export let persistor = persistStore(store);
export default { store, persistor };
