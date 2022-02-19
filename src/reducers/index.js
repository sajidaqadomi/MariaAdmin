import { combineReducers } from "redux";

import { categories } from "./category";
import { products } from "./product";
import { users } from "./user";
import { auth } from "./auth";

export default combineReducers({
    categories,
    products,
    // cart,
    auth,
    users,
});
