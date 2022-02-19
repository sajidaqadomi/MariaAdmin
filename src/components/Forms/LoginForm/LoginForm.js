import { Grid, Typography } from "@material-ui/core";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"


import { Paper, Toast } from "../..";
import FormInput from "../FormInput";
import FormSubmit from "../FormSubmit";
import useStyles from "./styles"
import { signIn } from "../../../actions/auth";
import { AUTH_ERROR_RESET } from "../../../utility/actionTypes";

let schema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required(),
});

const LoginForm = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { error, isLoading } = useSelector(state => state.auth)

    const methods = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched",
        defaultValues: {
            userName: "",
            password: "",
        },
    });

    const onSubmit = (data) => {
        //console.log(data)
        dispatch(signIn(data, navigate));
        methods.reset();
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        dispatch({ type: AUTH_ERROR_RESET });
    };

    return (
        <div>
            <Toast
                open={error}
                onClose={handleClose}
                title="Sign In Failed"
                type="error"
                message={error}
            />

            <FormProvider {...methods}>
                <div className={classes.container}>
                    <Typography variant="h2" component='h1' className={classes.logo} >MariaAdmin</Typography>
                    <Paper className={classes.paper}>
                        <Typography variant="h2" className={classes.formTitle} gutterBottom>
                            SIGN IN
                        </Typography>
                        <form
                            onSubmit={methods.handleSubmit(onSubmit)}
                            className={classes.form}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormInput name="userName" label="User Name" type="text" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormInput name="password" label="Password" />
                                </Grid>
                            </Grid>
                            <FormSubmit
                                title="login"
                                disabled={isLoading}
                                style={{ marginTop: "10px" }}
                            />


                        </form>
                    </Paper>
                </div>
            </FormProvider>
        </div>
    );
};

export default LoginForm;
