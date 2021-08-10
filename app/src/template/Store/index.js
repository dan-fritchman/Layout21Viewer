/* ******************************
 * Top-Level Redux Store Setup
 * ****************************** */

import React from "react";
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { themeReducer } from "./Theme";
import { userReducer } from "./User";
import { uiReducer } from "./AppUi";
import settings from "../settings";

export const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [routeMiddleware];
const routerReducer = connectRouter(history);

// Add Redux devtools
let composeEnhancers = compose;
if (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  });
}

// Simple indication of whether the main layout window has been loaded
const layoutStateReducer = (state = { ready: false }, action) => {
  if (action.type === "LAYOUT_STATE") {
    return { ready: action.ready };
  }
  return state;
};
const allReducers = combineReducers({
  layout: layoutStateReducer,
  user: userReducer,
  ui: uiReducer,
  theme: themeReducer,
  router: routerReducer,
});

const baseReducer = (state, action) => {
  if (action.type === "RESET_APP") state = undefined;
  return allReducers(state, action);
};

const persistConfig = {
  key: `${settings.title}::root`,
  storage: storage,
  whitelist: ["user"],
};
const reducer = persistReducer(persistConfig, baseReducer);

// const store = createStore(
//   reducer,
//   undefined, // What is this argument?
//   composeEnhancers(applyMiddleware(...middlewares))
// );
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

const StoreProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export const Store = {
  connect,
  store,
  persistor,
  dispatch: store.dispatch,
  getState: store.getState,
  Provider: StoreProvider,
  connectUser: (Comp) => connect((state) => ({ user: state.user }))(Comp),
};

export default Store;
