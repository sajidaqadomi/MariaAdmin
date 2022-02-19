import { AppBar, Avatar, Badge, IconButton, Toolbar, Tooltip, Typography } from '@material-ui/core'
import { LanguageRounded, Notifications, Settings, ExitToApp } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import { useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux';

import { signOut } from '../../actions/auth'
import * as storage from '../../utility/cache'
import useStyles from './styles'




const NavBar = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const location = useLocation()


    useEffect(() => {
        let token = storage.get("userToken");
        if (token) {
            let decodeToken = jwt_decode(token);

            if (decodeToken.exp < new Date().getTime() / 1000) handleSignOut();
        }
    }, [location]);

    const handleSignOut = () => {
        dispatch(signOut())

    }

    return (
        <AppBar position='fixed' className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.leftSide}>
                    <Typography component={Link} to='/' variant='h5' className={classes.logo}>Mariaadmin</Typography>
                </div>
                <div className={classes.rightSide}>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Notifications className={classes.icon} />
                    </Badge>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <LanguageRounded className={classes.icon} />
                    </Badge>
                    {/* <Settings className={`${classes.badge} ${classes.icon}`} /> */}
                    <Tooltip title="Sign out" placement="left-end">
                        <IconButton className={classes.badge} onClick={handleSignOut}>
                            <ExitToApp />
                        </IconButton>
                    </Tooltip>



                    <Avatar alt="AdminImage" src="https://v4.mui.com/static/images/avatar/3.jpg" />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
