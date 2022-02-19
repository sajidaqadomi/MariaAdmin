import * as api from "../api/users";
import { DELETE_USER, END_LOADING_USERS, FETCH_USERS, FETCH_USER_BY_ID, UPDATE_USER, START_LOADING_USERS, ADD_USER, START_CRUD_USER, END_CRUD_USER } from "../utility/actionTypes";



export const getUsers = (Id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_USERS });

        const { data } = await api.getUsers();
        // console.log(data, 'users')
        dispatch({ type: FETCH_USERS, payload: data });

        dispatch({ type: END_LOADING_USERS });
    } catch (error) {
        console.log(error);
        dispatch({ type: END_LOADING_USERS });
    }
};


export const getUserById = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_USERS });

        const { data } = await api.getUserById(id);
        // console.log(data, "user")
        dispatch({ type: FETCH_USER_BY_ID, payload: data });

        dispatch({ type: END_LOADING_USERS });
    } catch (error) {
        console.log(error);
        dispatch({ type: END_LOADING_USERS });
    }
};

export const createUser = (newUser, methods, navigate) => async (dispatch) => {
    try {
        dispatch({ type: START_CRUD_USER })
        const { data } = await api.createUser(newUser)
        dispatch({ type: ADD_USER, payload: data })
        dispatch({ type: END_CRUD_USER })
        methods.reset()
        navigate('/userlist')

    } catch (error) {
        console.log(error)
        dispatch({ type: END_CRUD_USER })
    }
}

export const deleteUserById = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteUserById(id)
        dispatch({ type: DELETE_USER, payload: data.id })

    } catch (error) {
        console.log(error)
    }
}

export const updateUserById = (id, user) => async (dispatch) => {
    try {
        dispatch({ type: START_CRUD_USER })

        const { data } = await api.updateUserById(id, user);

        dispatch({ type: UPDATE_USER, payload: data });
        dispatch({ type: END_CRUD_USER })


    } catch (error) {
        console.log(error);
        dispatch({ type: END_CRUD_USER })
    }
};
