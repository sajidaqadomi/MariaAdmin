import { API } from "./api";

export const getUserStats = () => {
    return API.get(`/users/stats`)
}

export const getNewUsers = () => {
    return API.get(`/users?new=true`)
}

export const getUsers = () => {
    return API.get(`/users`)

}

export const getUserById = (id) => {
    return API.get(`/users/${id}`)
}

export const createUser = (newUser) => {
    return API.post(`/auth/signup`, newUser)
}

export const updateUserById = (id, user) => {
    return API.patch(`/users/${id}`, user)
}

export const deleteUserById = (id) => {
    return API.delete(`/users/${id}`)
}