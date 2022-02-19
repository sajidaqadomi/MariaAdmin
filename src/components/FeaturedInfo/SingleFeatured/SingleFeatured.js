import { Typography } from '@material-ui/core'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import { Paper } from '../..'

import useStyles from './styles'

const SingleFeatured = ({ up = true, title, amount, rate }) => {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <div>
                <Typography className={classes.title}>{title}</Typography>
                <div className={classes.moneyDetails}>
                    <Typography className={classes.money} >$ {amount}</Typography>
                    <Typography className={classes.moneyRate}>% {rate} {+rate > 0 ? <ArrowUpward className={classes.up} color='primary' /> : <ArrowDownward className={classes.down} color='secondary' />}</Typography>
                </div>
                <Typography className={classes.sub}>Compared to last month</Typography>
            </div>

        </Paper>
    )
}

export default SingleFeatured
