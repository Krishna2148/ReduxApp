import { combineReducers, createStore } from "redux";
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer"
// import { persistReducers } from "redux-persist";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 


const rootReducer = combineReducers({
  itemStore: itemReducer,
  cartStore: cartReducer
})

const persistConfig = {
  key: 'root',
  storage:storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const myStore = createStore(persistedReducer)
export  const myPresistor = persistStore(myStore)
