import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";

import FormInput from "../FormInput";
import FormSubmit from "../FormSubmit";
import useStyles from "./styles";
import { createCategory } from "../../../actions/categories";
import { useFile } from "../../../hooks/useFile";
import { START_CREAT_CAT } from "../../../utility/actionTypes";
import ImageUploadForm from "../ImageUploadForm";
import FormSelect from "../FormSelect";
import FormRadio from "../FormRadio";

let schema = yup.object().shape({
    mainCat: yup.array().required(),
    catTitle: yup.string().required(),
    catImg: yup.string().required(),
    cat: yup.string().required(),
    targetGender: yup.string(),
});

const mainCategories = ["Clothing", "Shoes", "SportsWear", "Accessories"]

const CreateCategoryForm = ({ setOpenModal }) => {
    const methods = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched",
        defaultValues: {
            mainCat: [],
            catTitle: "",
            catImg: "",
            cat: "",
            targetGender: 'both'
        },
    });
    const classes = useStyles();
    const [catFile, setCatFile] = useState(null);
    const { downloadURL, setdownloadURL, saveImg } = useFile();
    const [mainCats, setMainCats] = useState([]);
    const [targetGender, setTargetGender] = useState('both');
    const dispatch = useDispatch();

    const { isInCreating } = useSelector((state) => state.categories);

    useEffect(() => {
        if (methods) {
            methods.register("catImg");
            methods.register("mainCat");
            methods.register("targetGender");
        }
    }, [methods]);

    useEffect(() => {
        catFile &&
            methods.setValue("catImg", catFile, {
                shouldValidate: "true",
                shouldDirty: "true",
            });
    }, [catFile, methods]);

    useEffect(() => {
        mainCats &&
            methods.setValue("mainCat", mainCats, {
                shouldValidate: "true",
                shouldDirty: "true",
            });
    }, [mainCats, methods]);

    useEffect(() => {
        targetGender &&
            methods.setValue("targetGender", targetGender, {
                shouldValidate: "true",
                shouldDirty: "true",
            });
    }, [targetGender, methods]);

    useEffect(() => {
        if (downloadURL) {
            const { catTitle: title, mainCat, cat, targetGender } = methods.getValues();
            dispatch(
                createCategory(
                    { title, cat, mainCat, targetGender, img: downloadURL },
                    methods,
                    setOpenModal
                )
            );

        }
    }, [downloadURL]);

    const onChaneCatFile = (e) => {
        setCatFile(e.target.files[0]);
    };

    const handleChangeMainCat = (e) => {
        setMainCats(e.target.value)
    }

    const handleChangeTarget = (e) => {
        setTargetGender(e.target.value)
    }



    const onSubmit = (data) => {
        // console.log(data, "datacat");
        dispatch({ type: START_CREAT_CAT });
        //store img to firebase
        saveImg(catFile);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className={classes.formContainer}>
                    <div>
                        <Typography variant="h3" gutterBottom>
                            New Category
                        </Typography>
                        <div className={classes.formInput}>
                            <ImageUploadForm
                                src={downloadURL}
                                htmlFor={"upload-cat"}
                                file={catFile}
                                onChaneFile={onChaneCatFile}
                            />
                        </div>

                        <div className={classes.formInput}>
                            <FormSelect
                                label="SelectMainCategory"
                                name="mainCat"
                                multiple
                                value={mainCats}
                                onChange={handleChangeMainCat}
                                options={mainCategories.map((item) => ({
                                    value: item,
                                    label: item,
                                }))}
                            />
                        </div>

                        <div className={classes.formInput}>
                            <FormInput name={"catTitle"} label="Title" />
                        </div>
                        <div className={classes.formInput}>
                            <FormInput name={"cat"} label="Cat" multiline rows={2} />
                        </div>
                        <div className={classes.formInput}>
                            <FormRadio
                                // className={classes.selectTarget}
                                label={"For"}
                                name={"targetGender"}
                                value={targetGender}
                                onChange={handleChangeTarget}
                                options={[
                                    { label: "Woman's", value: "women" },
                                    { label: "Men", value: "men" },
                                    { label: "Both", value: "both" },
                                ]}
                            />

                        </div>
                        <FormSubmit title={"create"} disabled={isInCreating} />
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default CreateCategoryForm;
