import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
import { Slide, Snackbar } from '@material-ui/core'

const Toast = ({ open, onClose, type, title, message }) => {
    return (
        <Snackbar
            open={open}
            onClose={onClose}
            autoHideDuration={4000}
            anchorOrigin={{ horizontal: "left", vertical: "top" }}
            TransitionComponent={(props) => <Slide direction='down'{...props} />}
        >
            <Alert severity={type}>
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default Toast
