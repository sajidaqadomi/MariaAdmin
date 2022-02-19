import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import FormInput from "../FormInput";
import useStyles from "./styles";
import FormSubmit from "../FormSubmit";
import { useFile } from "../../../hooks/useFile";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ImageUploadForm from "../ImageUploadForm";
import { updateUserById } from "../../../actions/users";
import { START_CRUD_USER } from "../../../utility/actionTypes";

let schema = yup.object().shape({
    img: yup.string(),
    userName: yup.string().required(),
    // fullName: yup.string().required(),
    email: yup.string().email().required(),
    // phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
    address: yup.string(),
});

const UpdateUserForm = ({ user }) => {
    const methods = useForm({
        mode: "onTouched", resolver: yupResolver(schema), defaultValues: {
            img: "",
            userName: "",
            email: "",
            address: '',
        },
    });
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSubmit, setIsSubmit] = useState(false);
    const { saveImg, downloadURL, setdownloadURL } = useFile();
    const [file, setFile] = useState(null);

    const { isInCrud } = useSelector(state => state.users)

    useEffect(() => {
        if (methods) {
            methods.register("img");
        }
    }, [methods]);

    useEffect(() => {
        //do this to save img after submit
        file &&
            methods.setValue("img", file, {
                shouldValidate: "true",
                shouldDirty: "true",
            });
    }, [file, methods]);

    useEffect(() => {
        // console.log(downloadURL, isSubmit, "disptch upd");
        if (downloadURL && isSubmit) {
            const data = methods.getValues();
            user
                && dispatch(
                    updateUserById(user.id, {
                        ...data,
                        img: downloadURL,
                    })
                )
                ;
            setIsSubmit(false);
        }
    }, [downloadURL, isSubmit]);

    const onChaneFile = (e) => {

        setFile(e.target.files[0]);
        setdownloadURL(null); //means change curr img
    };

    useEffect(() => {
        //applay this on update only

        if (user) {

            const { img } = user;
            // console.log(user, img, 'usercurr')
            for (let [k, v] of Object.entries(user)) {
                methods.setValue(k, v, { shouldValidate: true, shouldDirty: true });
            }
            img && setdownloadURL(img);
        }
    }, [user]);

    const onSubmit = () => {
        if (file) {
            dispatch({ type: START_CRUD_USER })
            saveImg(file); //store img to firebase
            setFile(null);
        }
        setIsSubmit(true);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Grid container style={{ flex: 1 }}>
                    <Grid item xs={6}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            height="100%"
                        >
                            <FormInput
                                name="userName"
                                label="User Name"
                                className={classes.input}
                            />
                            {/* <FormInput name="fullName" label="Full Name" /> */}
                            <FormInput
                                name="email"
                                label="Email"
                                type="email"
                                className={classes.input}
                            />
                            {/* <FormInput name="phone" label="Phone" type="tel" /> */}
                            <FormInput
                                name="address"
                                label="Address"
                                className={classes.input}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={2} />

                    <Grid item xs={4} style={{ display: "flex" }}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            alignItems="center"
                            height="100%"
                        >
                            <div className={classes.formInput}>
                                <ImageUploadForm
                                    src={downloadURL}
                                    htmlFor={"update-user"}
                                    file={file}
                                    onChaneFile={onChaneFile}
                                />
                            </div>
                            <FormSubmit title="update" fullWidth disabled={isInCrud} />
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    );
};

export default UpdateUserForm;
