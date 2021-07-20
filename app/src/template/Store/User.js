export function userReducer(state = null, action) {

    switch (action.type) {
        case "USER_LOGIN":
            const {user} = action;
            // Extract the white-list of fields we like
            const {uid, photoURL, displayName, email, idToken, metadata} = user;
            return {uid, photoURL, displayName, email, idToken, metadata};
        case "USER_LOGOUT":
            return null;
        default:
            return state;
    }
}
