import { Paper } from '@material-ui/core'
import React from 'react'

import useStyles from './styles'

const PaperCusom = ({ children, className, ...rest }) => {
    const classes = useStyles()
    return (
        <Paper className={`${classes.paper} ${className}`} elevation={6} {...rest} >
            {children}
        </Paper>
    )
}

export default PaperCusom
