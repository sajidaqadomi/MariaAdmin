import { Container, Typography } from "@material-ui/core";
import React from "react";

import { Paper, SafeArea } from "../../components";
import { CreateUserForm } from "../../components/Forms";
import useStyles from './styles'

const CreateUser = () => {
    const classes = useStyles()
    return (
        <SafeArea>
            <Container maxWidth="xl">
                <Paper style={{ marginTop: 16, marginBottom: 16 }}>
                    <Typography component='h3' className={classes.mainTitle} gutterBottom> New User</Typography>
                    <CreateUserForm />
                </Paper>
            </Container>
        </SafeArea>
    );
};

export default CreateUser;
