import React from 'react'
import { DataGrid } from '@material-ui/data-grid';

import useStyles from './styles'
import { Box, Button, Container, IconButton } from '@material-ui/core';
import { SafeArea, UserProfile } from '../../components';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import colors from '../../config/colors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserById, getUsers } from '../../actions/users';
import { useEffect } from 'react';

const UserList = () => {

    const classes = useStyles()
    const { isLoading, users } = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())

    }, [])

    const deleteUser = (userId) => {
        dispatch(deleteUserById(userId))

    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        {
            field: 'user',
            headerName: 'User',
            width: 250,
            // editable: true,
            renderCell: (params) => <UserProfile img={params.row.img} name={params.row.userName} />
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            editable: true,
        },

        // {
        //     field: 'transaction',
        //     headerName: 'Transaction Volume"',
        //     sortable: false,
        //     width: 160,

        // },
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            width: 150,
            renderCell: (params) => <Box display='flex' alignItems='center'>
                <Button component={Link} to={`/user/${params.row.id}`} style={{ backgroundColor: colors.approvedColor, color: colors.white, marginRight: 20 }} variant='contained' size='small'>Edit</Button>
                <IconButton onClick={() => deleteUser(params.row.id)}>
                    <DeleteOutline color='secondary' />
                </IconButton>

            </Box>

        },
    ];

    if (isLoading) return <></>
    return (
        <SafeArea>
            <Container maxWidth='xl' style={{ height: '90vh' }}>
                <Button
                    component={Link}
                    to="/user/create"
                    className={classes.btn}
                    variant="contained"
                >
                    Create
                </Button>
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={8}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </Container>
        </SafeArea>
    )
}

export default UserList

