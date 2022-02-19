import * as api from "../api/categories";
import { ADD_CATEGORY, END_CREAT_CAT, END_LOADING_CAT, FETCH_CATEGORY, START_CREAT_CAT, START_LOADING_CAT } from "../utility/actionTypes";

export const getCategories = (query) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_CAT })
        const { data } = query ? await api.getCategories(query) : await api.getCategories()
        dispatch({ type: FETCH_CATEGORY, payload: data })
        dispatch({ type: END_LOADING_CAT })

    } catch (error) {
        console.log(error)
        dispatch({ type: END_LOADING_CAT })
    }
}

export const createCategory = (newCat, methods, setOpenModal) => async (dispatch) => {
    try {
        dispatch({ type: START_CREAT_CAT })
        const { data } = await api.createCategories(newCat)

        dispatch({ type: ADD_CATEGORY, payload: data })
        dispatch({ type: END_CREAT_CAT })

        methods.reset()
        setOpenModal(false)


    } catch (error) {
        console.log(error)
        dispatch({ type: END_CREAT_CAT })
    }
}