import { API } from "./api";

export const getOrders = () => {
    return API.get(`/orders`)
}

export const getOrdersIcome = (pid) => {
    return pid ? API.get(`/orders/income?pid=${pid}`) : API.get(`/orders/income`)
}

