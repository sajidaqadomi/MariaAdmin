import { Button } from '@material-ui/core'
import React from 'react'

import useStyles from './styles'

const StatusButton = ({ type }) => {
    const classes = useStyles({ type })
    return (
        <Button variant='contained' className={classes.btn}>
            {type}
        </Button>
    )
}

export default StatusButton

