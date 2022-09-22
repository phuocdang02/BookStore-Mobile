import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { leaders } from "./leaders";
import { books } from "./books";
import { comments } from "./comments";
import { promotions } from "./promotions";
import { favorites } from "./favorites";
import { users } from "./users";

// redux-persist
import { persistStore, persistCombineReducers } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
const config = { key: "root", storage: AsyncStorage, debug: true };

export const ConfigureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
      leaders,
      books,
      comments,
      promotions,
      favorites,
      users,
    }),
    applyMiddleware(thunk, logger)
  );
  const persistor = persistStore(store);
  return { persistor, store };
};