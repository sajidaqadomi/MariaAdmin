import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductsById } from "../../actions/products";
import * as api from "../../api/orders";
import { Chart, Paper, SafeArea, UserProfile } from "../../components";
import { ProductForm } from "../../components/Forms";
import useStyles from './styles'

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

const Product = () => {
    const classes = useStyles()
    const [productStats, setProductStats] = useState([])
    const dispatch = useDispatch()
    const { product, isLoading, error } = useSelector(state => state.products)
    const { id } = useParams()
    // console.log(id)



    const getOrdersIcome = async (id) => {
        const { data } = await api.getOrdersIcome(id)
        // console.log(data, 'order')
        if (data) setProductStats(data.map((item) => ({ name: MONTHS[item._id], Sales: item.total })))

    }

    useEffect(() => {
        if (id) {
            dispatch(getProductsById(id))
            getOrdersIcome(id)
        }

    }, [id, dispatch])

    if (isLoading) return ('loading...')
    return (
        <SafeArea>
            <Container maxWidth="xl">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    margin="16px 0"
                >
                    <Typography variant="h3" className={classes.mainTitle}>
                        Product
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Chart
                            title="Sales Performance (last 2 months)"
                            data={productStats}
                            dataKey="Sales"
                            className={classes.chart}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display: 'flex' }}>
                        <Paper className={classes.paper}>
                            <div className={classes.productInfo}>
                                <UserProfile
                                    img={product.img
                                    }
                                    title={product.title}
                                />
                                <div >

                                    <div className={classes.item}>
                                        <Typography className={classes.key}>Id :</Typography>
                                        <Typography className={classes.value}>{product?.id}</Typography>

                                    </div>
                                    <div className={classes.item}>
                                        <Typography className={classes.key}>Sales  :</Typography>
                                        <Typography className={classes.value}>{productStats[1]?.Sales}</Typography>

                                    </div>

                                    <div className={classes.item}>
                                        <Typography className={classes.key}>In stock :</Typography>
                                        <Typography className={classes.value}>{product?.inStock ? 'Yes' : 'No'}</Typography>

                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} >
                        <Paper >
                            <ProductForm product={product} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </SafeArea>
    );
};

export default Product;
