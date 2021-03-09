import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import thunk from "redux-thunk";
import rootReducer from "./reducers";

const persistedConfig = {
  key: "root",
  storage: storage,
  timeout: 0,
};

const persistedReducer = persistReducer(persistedConfig, rootReducer);

const initialState = {};
const middleware = [thunk, logger];
const store = createStore(
  persistedReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { persistor, store };
