import jwt_decode from "jwt-decode";

import {
    AUTH,
    AUTH_END_LOADING,
    AUTH_ERROR,
    AUTH_ERROR_RESET,
    AUTH_START_LOADING,
    SIGN_OUT,
} from "../utility/actionTypes";
import * as storage from "../utility/cache";

const token = storage.get("userToken");
const user = token ? jwt_decode(token) : null;

export const auth = (
    state = { isLoading: false, error: null, user },
    action
) => {
    switch (action.type) {
        case AUTH_START_LOADING:
            return { ...state, isLoading: true };

        case AUTH_END_LOADING:
            return { ...state, isLoading: false };

        case AUTH_ERROR:
            return { ...state, error: action.payload };

        case AUTH_ERROR_RESET:
            return { ...state, error: null };

        case AUTH:
            return { ...state, user: action.payload };
        case SIGN_OUT:
            return { ...state, user: null };
        default:
            return state;
    }
};
