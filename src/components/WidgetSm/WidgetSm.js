import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import { Paper } from "..";
import useStyles from "./styles";
import WidgetItem from "./WidgetItem";
import * as api from "../../api/users";

const WidgetSm = () => {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    const getNewUsers = async () => {
        const { data } = await api.getNewUsers();
        setUsers(data);
    };

    useEffect(() => {
        getNewUsers();
    }, []);
    return (
        <Paper>
            <Typography variant="h5" gutterBottom className={classes.title}>
                New Join Members
            </Typography>
            {users.map((item) => (
                <WidgetItem user={item} key={item._id} />
            ))}
        </Paper>
    );
};

export default WidgetSm;
