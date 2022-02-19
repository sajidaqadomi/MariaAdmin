import { API } from "./api";

export const signIn = (user) => {
    return API.post(`/auth/signin`, user)
}

// export const signIn = (user) => {
//     return API.post(`/auth/signin`, user)
// }