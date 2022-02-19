import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import FormInput from '../FormInput'
import useStyles from './styles'
import FormSubmit from "../FormSubmit";
import { createUser } from "../../../actions/users";
import ImageUploadForm from "../ImageUploadForm";
import { useFile } from "../../../hooks/useFile";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { START_CRUD_USER } from "../../../utility/actionTypes";

let schema = yup.object().shape({
    img: yup.string(),
    userName: yup.string().required(),
    //fullName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain At Least 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
    phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
    address: yup.string().required(),
});

const CreateUserForm = () => {
    const methods = useForm({ mode: 'onTouched', resolver: yupResolver(schema) })
    const classes = useStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isSubmit, setIsSubmit] = useState(false);
    const [file, setFile] = useState(null);
    const [ignoreImg, setIgnoreImg] = useState(false);
    const { downloadURL, setdownloadURL, saveImg } = useFile();

    const { isInCrud } = useSelector(state => state.users)

    useEffect(() => {
        if (methods) {
            methods.register("img");
        }
    }, [methods]);

    // useEffect(() => {
    //     //do this to save img after submit
    //     file &&
    //         methods.setValue("img", file, {
    //             shouldValidate: "true",
    //             shouldDirty: "true",
    //         });
    // }, [file, methods]);

    useEffect(() => {
        // console.log(downloadURL, isSubmit, "disptch upd");

        if ((downloadURL || ignoreImg) && isSubmit) {
            const data = methods.getValues();

            dispatch(
                createUser(
                    { ...data, img: downloadURL },
                    methods,
                    navigate
                )
            );
            setIsSubmit(false);
            setIgnoreImg(false);
        }
    }, [downloadURL, isSubmit]);

    const onChaneFile = (e) => {
        setFile(e.target.files[0]);
        setdownloadURL(null);//means change curr img
    };

    const onSubmit = (data) => {
        if (file) {
            dispatch({ type: START_CRUD_USER })
            saveImg(file);//store img to firebase
            setFile(null);
        } else {
            setIgnoreImg(true)
        }
        setIsSubmit(true);
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>

                <div className={classes.formInput} style={{ marginBottom: 16 }}>
                    <ImageUploadForm
                        src={downloadURL}
                        htmlFor={"create-user"}
                        file={file}
                        onChaneFile={onChaneFile}
                    />
                </div>
                <Grid container spacing={3}>


                    <Grid item xs={12} md={6}>
                        <FormInput name='userName' label='Username' />
                    </Grid>
                    {/* <Grid item xs={12} md={6}>
                        <FormInput name='fullName' label='FullName' />
                    </Grid> */}
                    <Grid item xs={12} md={6}>
                        <FormInput name='email' label='Email' type='email' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormInput name='password' label='Password' type='password' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormInput name='phone' label='Phone' type='tel' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormInput name='address' label='Address' />
                    </Grid>
                    {/* <Grid item xs={12} md={6}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup className={classes.radioGroup} aria-label="gender" name="gender1" value={'female'} onChange={() => { }}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Grid> */}
                    {/* <Grid item xs={12} md={6}>
                        <FormControl variant="filled" className={classes.formControl} fullWidth>
                            <InputLabel id="demo-simple-select-filled-label">Active</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={'yes'}
                                onChange={() => { }}

                            >
                                <MenuItem value="yes">Yes</MenuItem>
                                <MenuItem value="no">No</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid> */}
                    <Grid item>
                        <FormSubmit title='create' disabled={isInCrud} />
                    </Grid>


                </Grid>



            </form>
        </FormProvider>
    )
}

export default CreateUserForm
