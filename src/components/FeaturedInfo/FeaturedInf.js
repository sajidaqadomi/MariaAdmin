import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import * as api from '../../api/orders'

import SingleFeatured from './SingleFeatured'

const FeaturedInf = () => {
    const [income, setIncome] = useState([]);
    const [rate, setRate] = useState(0);

    const getOrdersIncome = async () => {
        try {
            const { data } = await api.getOrdersIcome()
            setIncome(data)
            setRate(Math.floor(((data[0].total - data[1].total) / data[1].total * 100)))

        } catch (error) {
            console.log(error)

        }

    }
    useEffect(() => {
        getOrdersIncome()
    }, [])

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <SingleFeatured up={false} title='Revenue' amount={income[0]?.total} rate={rate} />
            </Grid>
            <Grid item xs={4}>
                <SingleFeatured up={false} title='Sales' amount='150' rate='11.1' />
            </Grid>
            <Grid item xs={4}>
                <SingleFeatured title='Coast' amount='150' rate='11.1' />
            </Grid>

        </Grid>
    )
}

export default FeaturedInf
