import { TextField } from "@material-ui/core";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const FormInput = ({ name, label, ...rest }) => {
    const methods = useFormContext();
    return (
        <Controller
            name={name}
            control={methods.control}
            render={({ field }) => (
                <TextField
                    label={label}
                    fullWidth
                    variant='filled'
                    error={!!methods.formState.errors[name]}
                    helperText={methods.formState.errors[name]?.message}
                    {...field}
                    {...rest}
                />
            )}
        />
    );
};

export default FormInput;
