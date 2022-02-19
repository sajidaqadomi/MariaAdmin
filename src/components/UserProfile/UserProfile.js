import { Avatar, Box, Typography } from '@material-ui/core'
import React from 'react'

import useStyles from './styles'

const UserProfile = ({ img, name, title }) => {
    const classes = useStyles()
    return (
        <Box display='flex' alignItems='center' >
            <Avatar src={img} alt='userImg' className={classes.userImg} />
            <div className={classes.userInfo}>
                <Typography className={classes.userName}>{name}</Typography>
                {title && <Typography className={classes.userTitle}>{title}</Typography>}
            </div>
        </Box>
    )
}

export default UserProfile
