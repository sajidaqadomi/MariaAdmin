import { Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";

import {
    Chart,
    FeaturedInfo,
    SafeArea,
    WidgetLg,
    WidgetSm,
} from "../../components";

//import useStyles from "./styles";
import * as api from "../../api/users";

const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];


const Home = () => {
    const [userStats, setUserStats] = useState([]);

    const getUserStats = async () => {
        try {
            const { data } = await api.getUserStats();
            const stats = data.map((item) => {
                return ({
                    name: MONTHS[item._id - 1],
                    activeUser: item.count,
                })
            });
            setUserStats(stats);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserStats();
    }, []);

    return (
        <SafeArea>
            <Container maxWidth="xl">
                <FeaturedInfo />
                <Chart
                    data={userStats}
                    dataKey="activeUser"
                    title="Active User Details"
                />
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <WidgetSm />
                    </Grid>
                    <Grid item xs={8}>
                        <WidgetLg />
                    </Grid>
                </Grid>
            </Container>
        </SafeArea>
    );
};

export default Home;
