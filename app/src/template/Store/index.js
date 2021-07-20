/* ******************************
 * Top-Level Redux Store Setup
 * ****************************** */

import React from "react";

import { Provider, connect } from "react-redux";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { themeReducer } from "./Theme";
import { userReducer } from "./User";
import { uiReducer } from "./AppUi";

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

const allReducers = combineReducers({
    user: userReducer,
    ui: uiReducer,
    theme: themeReducer,
    router: routerReducer
});

const baseReducer = (state, action) => {
    if (action.type === "RESET_APP") state = undefined;
    return allReducers(state, action);
};

const persistConfig = {
    key: "INSERT_PROJNAME::root",
    storage: storage,
    whitelist: ["user"]
};

const store = createStore(
    persistReducer(persistConfig, baseReducer),
    undefined,
    composeEnhancers(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

const StoreProvider = props => {
    return <Provider store={store}>
        {props.children}
    </Provider>;
};

export const Store = {
    connect,
    store,
    persistor,
    dispatch: store.dispatch,
    getState: store.getState,
    Provider: StoreProvider,
    connectUser: Comp => connect(state => ({ user: state.user }))(Comp),

};

export default Store;

