import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
} from "@material-ui/icons";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { Paper, SafeArea, UserProfile } from "../../components";
import useStyles from "./styles";
import { UpdateUserForm } from "../../components/Forms";
import { getUserById } from "../../actions/users";

const User = () => {
    const classes = useStyles();
    const { id: userId } = useParams();
    const dispatch = useDispatch();
    const { isLoading, user } = useSelector(state => state.users)


    useEffect(() => {
        if (userId) dispatch(getUserById(userId))
    }, [userId]);
    if (isLoading) return ('loading...')
    return (
        <SafeArea>
            <Container maxWidth="xl">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    margin="20px 0"
                >
                    <Typography variant="h3" className={classes.mainTitle}>
                        User
                    </Typography>
                    {/* <Button
                        component={Link}
                        to="/user/create"
                        className={classes.btn}
                        variant="contained"
                    >
                        Create
                    </Button> */}
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Paper>
                            <UserProfile
                                img={user?.img}
                                name={user?.userName}
                            // title="software Engineer"
                            />
                            <div>
                                <Typography className={`${classes.infoTitle}`}>
                                    Account Details
                                </Typography>
                                <Typography className={classes.item}>
                                    <PermIdentity className={classes.icon} />{user?.userName}
                                </Typography>
                                {/* <Typography className={classes.item}>
                                    <CalendarToday className={classes.icon} /> 10.12.1999
                                </Typography> */}
                            </div>
                            <div>
                                <Typography className={classes.infoTitle}>Contact</Typography>
                                {/* <Typography className={classes.item}>
                                    <PhoneAndroid className={classes.icon} />{'+1 123 456 67'}
                                </Typography> */}
                                <Typography className={classes.item}>
                                    <MailOutline className={classes.icon} /> {user?.email}
                                </Typography>
                                {user?.address && <Typography className={classes.item}>
                                    <LocationSearching className={classes.icon} /> {user.address}
                                </Typography>}
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={8} style={{ display: "flex" }}>
                        <Paper className={classes.paper}>
                            <Typography component="h5" className={classes.editTitle}>
                                Edit
                            </Typography>
                            <UpdateUserForm user={user} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </SafeArea>
    );
};

export default User;
