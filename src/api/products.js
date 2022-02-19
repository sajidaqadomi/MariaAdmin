import { API } from "./api";

export const getProducts = (catId) => {
    return catId ? API.get(`/products?category=${catId}`) : API.get(`/products`);
};

export const getProductsByCategory = (category) => {
    return API.get(`/products?category=${category}`);
};

export const getProductById = (id) => {
    return API.get(`/products/${id}`);
};

export const deleteProductById = (id) => {
    return API.delete(`/products/${id}`);
};

export const getProductCount = () => {
    return API.get(`/products/get/count`);
};

export const CreateProduct = (newProduct) => {
    return API.post(`/products`, newProduct);
};

export const updateProductById = (id, updateProduct) => {
    return API.patch(`/products/${id}`, updateProduct);
};


