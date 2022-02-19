import * as api from "../api/products";
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

export const getProducts = (catId) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_PROD });

        const { data } = await api.getProducts(catId);
        dispatch({ type: FETCH_PRODUCT, payload: data });

        dispatch({ type: END_LOADING_PROD });
    } catch (error) {
        console.log(error);
        dispatch({ type: END_LOADING_PROD });
    }
};

export const getProductsById = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_PROD });

        const { data } = await api.getProductById(id);
        //console.log(data, "product")
        dispatch({ type: FETCH_PRODUCT_BY_ID, payload: data });

        dispatch({ type: END_LOADING_PROD });
    } catch (error) {
        console.log(error);
        dispatch({ type: END_LOADING_PROD });
    }
};

export const createProduct = (newProduct, methods, navigate) => async (dispatch) => {
    try {
        dispatch({ type: START_CRUD_PROD });
        const { data } = await api.CreateProduct(newProduct)
        dispatch({ type: ADD_PRODUCT, payload: data })
        methods.reset()
        dispatch({ type: END_CRUD_PROD });
        navigate('/productlist')


    } catch (error) {
        console.log(error)
        dispatch({ type: END_CRUD_PROD });
    }
}

export const deleteProductsById = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteProductById(id)
        dispatch({ type: DELETE_PRODUCT, payload: data.id })

    } catch (error) {
        console.log(error)
    }
}

export const updateProductsById = (id, updateProduct) => async (dispatch) => {
    try {
        dispatch({ type: START_CRUD_PROD });

        const { data } = await api.updateProductById(id, updateProduct);
        // console.log(data, "updateproduct")
        dispatch({ type: UPDATE_PRODUCT, payload: data });
        dispatch({ type: END_CRUD_PROD });


        //  dispatch({ type: END_LOADING_PROD });
    } catch (error) {
        console.log(error);
        dispatch({ type: END_CRUD_PROD });
    }
};
