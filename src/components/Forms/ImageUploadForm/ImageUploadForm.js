import { IconButton, InputLabel, Typography } from "@material-ui/core";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import React from "react";

import useStyles from "./styles"

const ImageUploadForm = ({ src, htmlFor, file, onChaneFile }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.fileContent}>
                <div className={classes.imgContainer}>
                    <img
                        src={src || "https://via.placeholder.com/150"}
                        alt="pic"
                        className={classes.img}
                    />
                </div>
                <IconButton
                    // variant="contained"
                    htmlFor={htmlFor}
                    component={InputLabel}
                    className={classes.uploadBtn}
                >
                    <ArrowUpward />
                </IconButton>
                {file && <Typography variant="subtitle2">{file.name}</Typography>}
            </div>

            <input
                accept="image/*"
                //  className={classes.input}
                style={{ display: "none" }}
                id={htmlFor}
                multiple
                type="file"
                onChange={onChaneFile}
            />
        </>
    );
};

export default ImageUploadForm;
