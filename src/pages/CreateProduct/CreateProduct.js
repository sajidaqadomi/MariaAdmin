import { Container } from '@material-ui/core'
import React from 'react'
import { Paper, SafeArea } from '../../components'
import { ProductForm } from '../../components/Forms'

const CreateProduct = () => {
    return (
        <SafeArea>
            <Container>
                {/* <CreateProductForm /> */}
                <Paper style={{ marginTop: 16, marginBottom: 16, }}>
                    <ProductForm />
                </Paper>

            </Container>

        </SafeArea>
    )
}

export default CreateProduct
