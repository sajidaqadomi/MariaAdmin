import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import React from 'react'

import useStyles from './styles'

const FormRadio = ({ label, name, value, handleChange, options, ...rest }) => {
    const classes = useStyles()
    return (
        <FormControl component="fieldset" {...rest}>
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup
                // aria-label="gender"
                name={name}
                value={value}
                onChange={handleChange}
                className={classes.raioGroup}
            >
                {options.map((option) => <FormControlLabel
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                />)}


            </RadioGroup>
        </FormControl>
    )
}

export default FormRadio