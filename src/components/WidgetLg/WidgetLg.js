import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import moment from "moment"

import { Paper, UserProfile } from "..";
import StatusButton from "./StatusButton";
import useStyles from './styles'
import * as api from '../../api/orders'

// function createData(name, calories, fat, status) {
//     return { customer: { img: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", name: 'Susan Carol' }, date: '2 Jun 2021', amount: '$ 250', status };
// }

// const rows = [
//     createData("Frozen yoghurt", 159, 6.0, 'pending'),
//     createData("Ice cream sandwich", 237, 9.0, 'approved'),
//     createData("Eclair", 262, 16.0, 'rejected'),
//     createData("Cupcake", 305, 3.7, 'pending'),
//     createData("Gingerbread", 356, 16.0, 'rejected'),

// ];

const WidgetLg = () => {
    const classes = useStyles()
    const [orders, setOrders] = useState([])

    const getOrders = async () => {
        const { data } = await api.getOrders()
        setOrders(data)
    }

    useEffect(() => {
        getOrders()

    }, [])
    return (
        <Paper>
            <Typography variant='h3' className={classes.title}>Latest Transaction</Typography>
            <TableContainer >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={`${classes.cellTh} ${classes.cell}`} >Customer</TableCell>
                            <TableCell className={`${classes.cellTh} ${classes.cell}`}>Date</TableCell>
                            <TableCell className={`${classes.cellTh} ${classes.cell}`}>Amount</TableCell>
                            <TableCell className={`${classes.cellTh} ${classes.cell}`}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell className={classes.cell} >
                                    <UserProfile img={"https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} name={row.userId} />
                                </TableCell>
                                <TableCell className={`${classes.cellItem} ${classes.cell}`} >{moment(row.createdAt).fromNow()}</TableCell>
                                <TableCell className={`${classes.cellItem} ${classes.cell}`} >{row.amount}</TableCell>
                                <TableCell className={classes.cell} >
                                    <StatusButton type={row.status} />
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default WidgetLg;
