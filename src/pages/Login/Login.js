import React from "react";
import LoginForm from "../../components/Forms/LoginForm";
//import { useDispatch, useSelector } from "react-redux";

//import { Toast } from "../../components";
//import useStyles from "./styles";
// import { useNavigate } from "react-router";
// import { AUTH_ERROR_RESET } from "../../utility/actionTypes";
//import { signIn } from "../../actions/user";



const Login = () => {

    // const dispatch = useDispatch();
    // const { isLoading, error } = useSelector((state) => state.auth);
    // const navigate = useNavigate();
    // const classes = useStyles();



    // const handleClose = (event, reason) => {
    //     if (reason === "clickaway") {
    //         return;
    //     }

    //     dispatch({ type: AUTH_ERROR_RESET });
    // };

    return (
        <>
            <LoginForm />


        </>
    );
};

export default Login;
