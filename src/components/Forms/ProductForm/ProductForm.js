import {
    FormControl,
    FormControlLabel,
    FormLabel,
    IconButton,
    Radio,
    RadioGroup,
    Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { HexColorInput } from "react-colorful";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import FormInput from "../FormInput";
import FormSubmit from "../FormSubmit";
import useStyles from "./styles";
import FormSelect from "../FormSelect";
import ChipInput from "../ChipInput";
import { Add } from "@material-ui/icons";
import { Modal, PopoverPicker } from "../..";
import ImageUploadForm from "../ImageUploadForm";
import CreateCategoryForm from "../CreateCategoryForm";
import { useFile } from "../../../hooks/useFile";
import { createProduct, updateProductsById } from "../../../actions/products";
import { getCategories } from "../../../actions/categories";
import { ColorsOption } from "../../../utility/colors";
import { START_CRUD_PROD } from "../../../utility/actionTypes";
import FormRadio from "../FormRadio";

const Size = [" XS", "S", "M", "L", "XL", "XXL", "XXXL"];
const mainCategories = ["Clothing", "Shoes", "SportsWear", "Accessories"];

let schema = yup.object().shape({
    title: yup.string().required(),
    desc: yup.string().required(),
    img: yup.string().required(),
    price: yup.number().required(),
    targetGender: yup.string().required(),
    inStock: yup.boolean(),
});

const ProductForm = ({ product }) => {
    const methods = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched",
        defaultValues: {
            title: "",
            desc: "",
            img: "",
            price: "",
            inStock: true,
        },
    });

    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.categories);
    const { isInCrud } = useSelector((state) => state.products);

    const [productProps, setProductProps] = useState({
        categories: [],
        color: [],
        size: [],
        targetGender: "women",
        inStock: true,
    });
    const [mainCat, setMainCat] = useState("Clothing");

    const [isSubmit, setIsSubmit] = useState(false);
    const [file, setFile] = useState(null);
    const { downloadURL, setdownloadURL, saveImg } = useFile();

    useEffect(() => {
        console.log(categories, 'categories')
    }, [categories]);

    useEffect(() => {
        console.log("targetGender", productProps.targetGender);
        if (productProps.targetGender && mainCat) dispatch(getCategories({ targetGender: productProps.targetGender, cat: mainCat }));
    }, [productProps.targetGender, mainCat]);

    useEffect(() => {
        if (methods) {
            methods.register("img");
            methods.register("inStock");
            methods.register("targetGender");
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
        methods.setValue("inStock", productProps.inStock, {
            shouldValidate: "true",
            shouldDirty: "true",
        });
    }, [productProps.inStock, methods]);

    useEffect(() => {
        methods.setValue("targetGender", productProps.targetGender, {
            shouldValidate: "true",
            shouldDirty: "true",
        });
    }, [productProps.targetGender, methods]);

    useEffect(() => {
        // console.log(downloadURL, isSubmit, "disptch upd");
        if (downloadURL && isSubmit) {
            const data = methods.getValues();

            product
                ? dispatch(
                    updateProductsById(product.id, {
                        ...data,
                        ...productProps,
                        img: downloadURL,
                    })
                )
                : dispatch(
                    createProduct(
                        { ...data, ...productProps, img: downloadURL },
                        methods,
                        navigate
                    )
                );
            setIsSubmit(false);
        }
    }, [downloadURL, isSubmit]);

    useEffect(() => {
        //applay this on update only
        if (product) {
            let {
                color,
                categories: selectedCat,
                size,
                targetGender,
                inStock,
                img,
            } = product;
            // console.log(product, 'product')

            for (let [k, v] of Object.entries(product)) {
                methods.setValue(k, v, { shouldValidate: true, shouldDirty: true });
            }

            setProductProps(() => ({
                categories: selectedCat.map((cat) => cat?.id || cat),
                color,
                size,
                targetGender,
                inStock,
            }));

            setdownloadURL(img);
        }
    }, [product]);

    const onChaneFile = (e) => {
        setFile(e.target.files[0]);
        setdownloadURL(null); //means change curr img
    };

    const handleChangeProps = (e) => {
        setProductProps((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // const addColor = () => {
    //     const index = productProps.color.findIndex(
    //         (currColor) => currColor === color
    //     );
    //     if (index === -1)
    //         setProductProps((prevProps) => ({
    //             ...prevProps,
    //             color: [...prevProps.color, color],
    //         }));
    // };

    const deleteColor = (colorToDelete) => () => {
        setProductProps((prev) => ({
            ...prev,
            color: prev.color.filter((currColor) => currColor !== colorToDelete),
        }));
    };

    const onSubmit = () => {
        if (file) {
            saveImg(file); //store img to firebase
            setFile(null);
            dispatch({ type: START_CRUD_PROD });
        }
        setIsSubmit(true);
    };

    return (
        <>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <CreateCategoryForm setOpenModal={setOpenModal} />
            </Modal>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Typography variant="h3" gutterBottom>
                        {product ? "Update Product" : "New Product"}
                    </Typography>
                    <div
                        className={classes.formContainer}
                        style={
                            product
                                ? { display: "flex", justifyContent: "space-between" }
                                : {}
                        }
                    >
                        <div style={product ? { flex: 2, marginRight: "24px" } : {}}>
                            {!product && (
                                <div className={classes.formInput}>
                                    <ImageUploadForm
                                        src={downloadURL}
                                        htmlFor={"upload-Product"}
                                        file={file}
                                        onChaneFile={onChaneFile}
                                    />
                                </div>
                            )}
                            <div className={classes.formInput}>
                                <FormInput name="title" label="Product Name" />
                            </div>
                            <div className={classes.formInput}>
                                <FormInput
                                    name="desc"
                                    label="Product Desc"
                                    multiline
                                    rows={4}
                                />
                            </div>
                            <div className={classes.formInput}>
                                <FormInput name="price" label="price" type="number" />
                            </div>

                            <div className={classes.formInput}>
                                <FormRadio
                                    className={classes.selectTarget}
                                    label={"For"}
                                    name={"targetGender"}
                                    value={productProps.targetGender}
                                    onChange={handleChangeProps}
                                    options={[
                                        { label: "Women's", value: "women" },
                                        { label: "Men", value: "men" },
                                    ]}
                                />
                            </div>

                            <div className={classes.formInput} style={{ display: "flex" }}>
                                <FormSelect
                                    label="SelectMainCategory"
                                    style={{ flex: 2 }}
                                    name="mainCat"
                                    value={mainCat}
                                    onChange={(e) => setMainCat(e.target.value)}
                                    options={mainCategories.map((item) => ({
                                        value: item,
                                        label: item,
                                    }))}
                                />
                                <div style={{ flex: 2, marginLeft: "16px" }}>
                                    {categories?.length > 0 && productProps.categories && (

                                        <FormSelect
                                            label="SelectCategories"
                                            name="categories"
                                            multiple
                                            value={productProps.categories}
                                            onChange={handleChangeProps}
                                            options={categories.map((cat) => ({
                                                value: cat.id,
                                                label: cat.title,
                                            }))}
                                        />
                                    )}
                                </div>
                                <IconButton
                                    style={{ marginLeft: 16 }}
                                    onClick={() => setOpenModal(true)}
                                >
                                    <Add color="primary" fontSize="large" />
                                </IconButton>
                            </div>

                            <div className={classes.formInput}>
                                <FormSelect
                                    label="SelectSize"
                                    name="size"
                                    multiple
                                    value={productProps.size}
                                    onChange={handleChangeProps}
                                    options={Size.map((item) => ({
                                        value: item,
                                        label: item,
                                    }))}
                                />
                            </div>

                            <div className={classes.formInput}>
                                {/* <HexColorPicker color={color} onChange={setColor} /> */}
                                <label className={classes.label}>Produc Colors</label>
                                <div className={classes.colorsComponents}>
                                    {/* <PopoverPicker color={color} onChange={setColor} />
                                    <HexColorInput
                                        color={color}
                                        onChange={setColor}
                                        prefixed
                                        className={classes.colorInput}
                                    /> */}
                                    <FormSelect
                                        label={"Produc Colors"}
                                        name={"color"}
                                        multiple
                                        style={{ flex: 2 }}
                                        value={productProps.color}
                                        onChange={handleChangeProps}
                                        options={ColorsOption.map((item) => ({
                                            value: item[0],
                                            label: item[1],
                                        })).sort((a, b) => (a.label < b.label ? -1 : 1))}
                                    />
                                    {/* <IconButton onClick={addColor}>
                                        <Add />
                                    </IconButton> */}
                                    <div style={{ flex: 1, marginLeft: "10px" }}>
                                        <ChipInput
                                            data={productProps.color}
                                            handleDelete={deleteColor}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={`${classes.formInput} ${classes.row}`}>
                                <FormSelect
                                    className={classes.selectStock}
                                    label="In Stock"
                                    name="inStock"
                                    value={productProps.inStock}
                                    onChange={handleChangeProps}
                                    options={[
                                        { value: true, label: "Yes" },
                                        { value: false, label: "No" },
                                    ]}
                                />
                            </div>
                        </div>
                        {product ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-around",
                                    flex: 1,
                                    alignItems: "center",
                                }}
                            >
                                <div className={classes.formInput}>
                                    <ImageUploadForm
                                        src={downloadURL}
                                        htmlFor={"update-Product"}
                                        file={file}
                                        onChaneFile={onChaneFile}
                                    />
                                </div>
                                <FormSubmit title={"update"} fullWidth disabled={isInCrud} />
                            </div>
                        ) : (
                            <FormSubmit
                                title={"create"}
                                style={{ marginBottom: 16 }}
                                disabled={isInCrud}
                            />
                        )}
                    </div>
                </form>
            </FormProvider>
        </>
    );
};

export default ProductForm;
