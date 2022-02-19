import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar, SideBar } from "./components";
import { useSelector } from "react-redux";

import {
  CreateProduct,
  CreateUser,
  Home,
  Login,
  Product,
  ProductList,
  User,
  UserList,
} from "./pages";

function App() {
  const { user } = useSelector((state) => state.auth);


  return (
    <BrowserRouter>
      <>
        {user?.isAdmin && (
          <>
            <NavBar />
            <SideBar />
          </>
        )}
        <Routes>
          <>
            {user?.isAdmin ? (
              <>
                <Route exact path="/" element={<Navigate to="/home" />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/productlist" element={<ProductList />} />
                <Route
                  exact
                  path="/product/create"
                  element={<CreateProduct />}
                />
                <Route exact path="/product/:id" element={<Product />} />
                <Route exact path="/userlist" element={<UserList />} />
                <Route exact path="/user/create" element={<CreateUser />} />
                <Route exact path="/user/:id" element={<User />} />
              </>
            ) : (
              <Route
                exact
                path="/signin"
                element={<Login />}
              />
            )}
            <Route
              exact
              path="*"
              element={
                user?.isAdmin ? (
                  <Navigate to="/home" />
                ) : (
                  <Navigate to="/signin" />
                )
              }
            />
          </>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
