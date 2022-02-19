import jwt_decode from "jwt-decode";

import * as api from "../api/auth"
// import * as cartApi from "../api/cart";
import * as storage from "../utility/cache";

import {
    AUTH,
    AUTH_END_LOADING,
    AUTH_ERROR,
    AUTH_START_LOADING,
    SIGN_OUT

} from "../utility/actionTypes";

// export const signUp = (user, navigate) => async (dispatch) => {
//     try {
//         dispatch({ type: AUTH_START_LOADING });
//         const {
//             data: { _id },
//         } = await api.signUp(user);
//         await cartApi.createCart(_id);

//         dispatch({ type: AUTH_END_LOADING });
//         if (_id) navigate("/login");
//     } catch (error) {
//         dispatch({ type: AUTH_END_LOADING });
//         dispatch({ type: AUTH_ERROR, payload: error.response.data.error });
//     }
// };

export const signIn = (user, navigate) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_START_LOADING });

        const { data } = await api.signIn(user);

        if (data.userToken) {
            let user = jwt_decode(data.userToken);
            storage.store("userToken", data.userToken);
            dispatch({
                type: AUTH,
                payload: { id: user.id, isAdmin: user.isAdmin, userName: user.userName },
            });
            navigate("/");
        }

        dispatch({ type: AUTH_END_LOADING });
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error.response.data.error });
        dispatch({ type: AUTH_END_LOADING });
    }
};

export const signOut = () => (dispatch) => {

    storage.clear();
    dispatch({ type: SIGN_OUT });
};
