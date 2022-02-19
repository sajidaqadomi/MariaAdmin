import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";

const FormSelect = ({ label, value, onChange, options, ...rest }) => {
    return (
        <FormControl variant="filled" fullWidth {...rest}>
            <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={value}
                onChange={onChange}
                {...rest}
            >
                {options.map(({ value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>)}

            </Select>
        </FormControl>
    );
};

export default FormSelect;
