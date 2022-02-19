import { API } from "./api";

export const getCategories = (query) => {
    return query ? API.get(`/categories?cat=${query.cat}&targetGender=${query.targetGender}`) : API.get(`/categories`)
}

export const createCategories = (newCat) => {
    return API.post(`/categories`, newCat)
}