import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { getCategories } from "../../actions/categories";
import { useFile } from "../../hooks/useFile";
import { useForm } from "react-hook-form";

// let schema = yup.object().shape({
//     title: yup.string().required(),
//     desc: yup.string().required(),
//     img: yup.string().required(),
//     price: yup.number().required(),
//     inStock: yup.boolean(),
// });

export const withProduct = (OrgComp, methods) => {
    return (props) => {
        // const methods = useForm({
        //     resolver: yupResolver(schema),
        //     mode: "onTouched",
        //     defaultValues: {
        //         title: "",
        //         desc: "",
        //         img: "",
        //         price: "",
        //         inStock: true,
        //     },
        // });
        // const navigate = useNavigate();
        // const dispatch = useDispatch();
        //const { categories, isLoading } = useSelector((state) => state.categories);

        // const [file, setFile] = useState(null);
        // const { downloadURL, saveImg } = useFile();

        // const [productProps, setProductProps] = useState({
        //     categories: [],
        //     color: [],
        //     size: [],
        // });
        // const [color, setColor] = useState("#000000");

        // useEffect(() => {
        //     dispatch(getCategories());
        // }, []);

        // useEffect(() => {
        //     if (methods) {
        //         methods.register("img");
        //         methods.register("inStock");
        //     }
        // }, [methods]);

        // const handleChangeProps = (e) => {
        //     setProductProps((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        // };
        // const addColor = () => {
        //     const index = productProps.color.findIndex(
        //         (currColor) => currColor === color
        //     );
        //     console.log(index);
        //     if (index === -1)
        //         setProductProps((prevProps) => ({
        //             ...prevProps,
        //             color: [...prevProps.color, color],
        //         }));
        // };

        // const deleteColor = (colorToDelete) => () => {
        //     // setColors((colors) => colors.filter((currColor) => currColor !== colorToDelete));
        //     setProductProps((prev) => ({
        //         ...prev,
        //         color: prev.color.filter((currColor) => currColor !== colorToDelete),
        //     }));
        // };

        const onSubmit = (data) => {
            //store img to firebase
            saveImg(file);
        };

        return (
            <>
                <OrgComp
                    productProps={productProps}
                    setProductProps={setProductProps}
                    handleChangeProps={handleChangeProps}
                    deleteColor={deleteColor}
                    addColor={addColor}
                    color={color}
                    setColor={setColor}
                    categories={categories}
                    methods={methods}
                    {...props}
                />
            </>
        );
    };
};
