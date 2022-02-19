// import {
//     ADD_PRODUCT,
//     DELETE_PRODUCT,
//     END_LOADING_PROD,
//     FETCH_PRODUCT,
//     FETCH_PRODUCT_BY_ID,
//     START_LOADING_PROD,
// } from "../utility/actionTypes";

import { ADD_CATEGORY, END_CREAT_CAT, END_LOADING_CAT, FETCH_CATEGORY, START_CREAT_CAT, START_LOADING_CAT } from "../utility/actionTypes";

export const categories = (
    state = { isLoading: true, isInCreating: false, categories: [] },
    action
) => {
    switch (action.type) {
        case START_LOADING_CAT:
            return { ...state, isLoading: true };

        case END_LOADING_CAT:
            return { ...state, isLoading: false };

        case START_CREAT_CAT:
            return { ...state, isInCreating: true };

        case END_CREAT_CAT:
            return { ...state, isInCreating: false };

        case FETCH_CATEGORY:
            return { ...state, categories: action.payload };

        case ADD_CATEGORY:
            return { ...state, categories: [...state.categories, action.payload] };


        default:
            return state;
    }
};
