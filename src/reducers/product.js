import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    END_CRUD_PROD,
    END_LOADING_PROD,
    FETCH_PRODUCT,
    FETCH_PRODUCT_BY_ID,
    START_CRUD_PROD,
    START_LOADING_PROD,
    UPDATE_PRODUCT,
} from "../utility/actionTypes";

export const products = (
    state = { isLoading: true, isInCrude: false, products: [], product: {} },
    action
) => {
    switch (action.type) {
        case START_LOADING_PROD:
            return { ...state, isLoading: true };

        case END_LOADING_PROD:
            return { ...state, isLoading: false };

        case START_CRUD_PROD:
            return { ...state, isInCrud: true };

        case END_CRUD_PROD:
            return { ...state, isInCrud: false };

        case FETCH_PRODUCT:
            return { ...state, products: action.payload };

        case ADD_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };

        case FETCH_PRODUCT_BY_ID:
            return { ...state, product: action.payload };

        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
                product: action.payload
            };

        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((prod) => prod.id !== action.payload),
            };

        default:
            return state;
    }
};
