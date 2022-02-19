import { Button } from "@material-ui/core";
import React from "react";

import useStyles from "./styles";

const FormSubmit = ({ title, ...rest }) => {
    const classes = useStyles();
    return (
        <Button
            type="submit"
            variant="contained"
            className={classes.subBtn}
            {...rest}
        >
            {title}
        </Button>
    );
};

export default FormSubmit;
