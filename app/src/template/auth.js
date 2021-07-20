import * as AppUi from "./Store/AppUi";

export const mount = async () => AppUi.update({isAuthReady: true});
export const unmount = async () => AppUi.update({isAuthReady: false});
export const signInWithProvider = async () => {};
export const signOut = async () => {};

// import {auth, githubProvider} from "./firebase";

// import Api from "./Api";
// import Store from "./Store";
// import * as AppUi from "./Store/AppUi";


// let refreshIntervalId = null;
// let authObserver = null;

// const getIdToken = () => auth.currentUser.getIdToken(true); // Force refresh = true



// export const mount = async () => {
//     /* App-Mount-Time Auth Setup
//      * Primarily set up observer and token-refreshing */
//     const authCb = (user) => {
//         AppUi.update({isAuthReady: true});
//         if (!user) return Store.dispatch({type: "USER_LOGOUT"});

//         // Run the user-object through our prep-steps
//         return _prepUser(user);
//     };
//     authObserver = auth.onAuthStateChanged(authCb);
// };

// export const unmount = async () => {
//     /* App-UnMount-Time Auth Setup */
//     if (refreshIntervalId) clearInterval(refreshIntervalId);
//     if (authObserver) authObserver();
// };

// export const refreshUser = async () => {
//     /* Get a new ID Token */
//     const state = Store.getState();
//     let {user} = state;
//     if (!(user && auth.currentUser)) return;
//     const idToken = await getIdToken();
//     if (!idToken) return;
//     Store.dispatch({type: "USER_LOGIN", user: {...user, idToken}});
// };

// const _prepUser = async (user) => {
//     /* Do some more stuff to get `user` ready for local storage. */
//     const idToken = await getIdToken();
//     if (!idToken) {
//         AppUi.openSnackbar("Error Generating ID Token");
//         return Store.dispatch({type: "USER_LOGOUT"});
//     }
//     user.idToken = idToken;

//     // Set up token refreshing
//     const refreshPeriod = 5 * 60 * 1000; // 5 minutes
//     refreshIntervalId = setInterval(refreshUser, refreshPeriod);

//     Store.dispatch({type: "USER_LOGIN", user: user});
//     await Api.updateUser(user);
//     return await user;
// };

// const _signIn = async () => {
//     /* Internal exception-throwing sign-in helper */
//     let {user} = await auth.signInWithPopup(githubProvider);
//     if (!user) throw new Error("User Sign-In Failed");
//     return await _prepUser(user);
// };

// export const signInWithProvider = async () => {
//     const state = Store.getState();
//     if (state.user) return state.user;

//     AppUi.update({isPerformingAuthAction: true});

//     let user = null;
//     try { 
//         user = await _signIn();
//         AppUi.closeDialogs();
//         AppUi.openSnackbar(`Signed in as ${user.displayName || user.email}`);
//     } catch (reason) {
//         Store.dispatch({type: "USER_LOGOUT"});
//         const code = reason.code;
//         const message = reason.message;

//         switch (code) {
//             case "auth/account-exists-with-different-credential":
//             case "auth/auth-domain-config-required":
//             case "auth/cancelled-popup-request":
//             case "auth/operation-not-allowed":
//             case "auth/operation-not-supported-in-this-environment":
//             case "auth/popup-blocked":
//             case "auth/popup-closed-by-user":
//             case "auth/unauthorized-domain":
//             default:
//                 AppUi.openSnackbar(message);
//         }
//     } finally {
//         AppUi.update({isPerformingAuthAction: false});
//     }
//     return user;
// };

// export const signOut = async () => {
//     const state = Store.getState();
//     if (!state.user) return null;

//     AppUi.update({isPerformingAuthAction: true});

//     try {
//         await auth.signOut();
//         Store.dispatch({type: "USER_LOGOUT"});
//         AppUi.openSnackbar("Signed out");
//         await AppUi.closeDialogs();

//     } catch (reason) {
//         const code = reason.code;
//         const message = reason.message;

//         switch (code) {
//             default:
//                 AppUi.openSnackbar(message);
//         }

//     } finally {
//         AppUi.update({isPerformingAuthAction: false});
//     }
//     return null;
// };

