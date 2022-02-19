import { Box, Button, Container, IconButton } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';

import { SafeArea, UserProfile } from '../../components';
import colors from '../../config/colors';
import { deleteProductsById, getProducts } from '../../actions/products';
import useStyles from './styles'





const ProductList = () => {
    const dispatch = useDispatch()
    const { isLoading, products } = useSelector(state => state.products)
    const classes = useStyles()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const deleteProduct = (id) => {
        dispatch(deleteProductsById(id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        {
            field: 'product',
            headerName: 'Product',
            width: 200,
            // editable: true,
            renderCell: (params) => <UserProfile img={params.row.img} name={params.row.title} />
        },
        {
            field: 'inStock',
            headerName: 'Stock',
            width: 120,
            editable: true,
        },


        {
            field: 'price',
            headerName: 'Price',
            sortable: false,
            width: 160,

        },
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            width: 150,
            renderCell: (params) => <Box display='flex' alignItems='center'>
                <Button component={Link} to={`/product/${params.row.id}`} style={{ backgroundColor: colors.approvedColor, color: colors.white, marginRight: 20 }} variant='contained' size='small'>Edit</Button>
                <IconButton onClick={() => deleteProduct(params.row.id)}>
                    <DeleteOutline color='secondary' />
                </IconButton>
            </Box>

        },
    ];

    if (isLoading) return <></>
    return (
        <SafeArea>
            <Container maxWidth='xl' style={{ height: '90vh' }}>
                <div>
                    <Button
                        component={Link}
                        to="/product/create"
                        className={classes.btn}
                        variant="contained"
                    >
                        Create
                    </Button>
                </div>
                <DataGrid
                    rows={products}
                    columns={columns}
                    pageSize={8}
                    checkboxSelection
                    disableSelectionOnClick
                />

            </Container>
        </SafeArea>
    )
}

export default ProductList
