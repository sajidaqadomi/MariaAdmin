import React, { useState } from 'react';


import useStyles from './styles'
import { Paper } from '@material-ui/core';
import ChipItem from './ChipItem';


const ChipInput = ({ data, handleDelete, ...rest }) => {
    const classes = useStyles();
    // console.log(data, 'colors')

    if (!data.length) return "";
    return <Paper component="ul" className={classes.container} elevation={0} {...rest}>
        {data.map((item) => {

            return (
                <li key={item} >
                    <ChipItem handleDelete={handleDelete} item={item} />
                </li>
            );
        })}
    </Paper>
};

export default ChipInput;
