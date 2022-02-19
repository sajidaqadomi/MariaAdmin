import { Typography } from "@material-ui/core";
import { LineChart, Line, CartesianGrid, XAxis, ResponsiveContainer, Tooltip } from "recharts";
import React from "react";

import useStyles from './styles'
import { Paper } from "..";



const Chart = ({ title, data, dataKey, className = {} }) => {
    const classes = useStyles()
    return (
        <Paper className={`${classes.paper} ${className}`}>
            <Typography variant="h5" gutterBottom className={classes.title} >{title}</Typography>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
                    <XAxis dataKey="name" stroke="#5550bd" />
                    {/* <YAxis /> */}
                    <Tooltip />

                </LineChart>
            </ResponsiveContainer>
        </Paper>
    );
};

export default Chart;
