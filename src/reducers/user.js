import { ADD_USER, DELETE_USER, END_CRUD_USER, END_LOADING_USERS, FETCH_USERS, FETCH_USER_BY_ID, START_CRUD_USER, START_LOADING_USERS, UPDATE_USER } from "../utility/actionTypes";


export const users = (
    state = { isLoading: true, isInCrud: false, users: [], user: {} },
    action
) => {
    switch (action.type) {
        case START_LOADING_USERS:
            return { ...state, isLoading: true };

        case END_LOADING_USERS:
            return { ...state, isLoading: false };

        case START_CRUD_USER:
            return { ...state, isInCrud: true };

        case END_CRUD_USER:
            return { ...state, isInCrud: false };

        case FETCH_USERS:
            return { ...state, users: action.payload };

        case ADD_USER:
            return { ...state, users: [...state.users, action.payload] };

        case FETCH_USER_BY_ID:
            return { ...state, user: action.payload };

        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
                user: action.payload
            };

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
            };

        default:
            return state;
    }
};
