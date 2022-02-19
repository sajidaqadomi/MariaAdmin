import { Container, Typography } from '@material-ui/core'
import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, WorkOutline } from '@material-ui/icons'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import useStyles from './styles'

const SideBar = () => {
    const classes = useStyles()
    const { pathname } = useLocation()
    const currLocation = pathname.split('/')[1]
    return (
        <div className={classes.sideBar}>
            <div className={classes.offset} />
            <Container maxWidth='xl'>
                <div className={classes.sideGroup} >
                    <Typography className={classes.title}>Dashboard</Typography>
                    <Link to='/' className={`${classes.link} ${currLocation === 'home' ? classes.active : ''}`}>
                        <LineStyle className={classes.icon} />
                        Home
                    </Link>
                    <Link to='#' className={`${classes.link} ${currLocation === 'analytics' ? classes.active : ''}`} disabled >
                        <Timeline className={classes.icon} />
                        Analytics
                    </Link>
                    <Link to='#' className={`${classes.link} ${currLocation === 'sales' ? classes.active : ''}`}>
                        <Timeline className={classes.icon} />
                        Sales
                    </Link>
                </div>
                <div className={classes.sideGroup} >
                    <Typography className={classes.title}>Quick Menu</Typography>
                    <Link to='/userlist' className={`${classes.link} ${currLocation === 'userlist' ? classes.active : ''}`}>
                        <PermIdentity className={classes.icon} />
                        Users
                    </Link>
                    <Link to='/productlist' className={`${classes.link} ${currLocation === 'productlist' ? classes.active : ''}`}>
                        <Storefront className={classes.icon} />
                        Products
                    </Link>
                    <Link to='#' className={`${classes.link} ${currLocation === 'transactions' ? classes.active : ''}`}>
                        <AttachMoney className={classes.icon} />
                        Transactions
                    </Link>
                    <Link to='#' className={`${classes.link} ${currLocation === 'reports' ? classes.active : ''}`}>
                        <BarChart className={classes.icon} />
                        Reports
                    </Link>
                </div>
                <div className={classes.sideGroup} >
                    <Typography className={classes.title}>Notifications</Typography>
                    <Link to='#' className={`${classes.link} ${currLocation === 'mail' ? classes.active : ''}`}>
                        <MailOutline className={classes.icon} />
                        Mail
                    </Link>
                    <Link to='#' className={classes.link}>
                        <DynamicFeed className={classes.icon} />
                        Feedback
                    </Link>
                    <Link to='#' className={classes.link}>
                        <ChatBubbleOutline className={classes.icon} />
                        Messages
                    </Link>
                </div>
                <div className={classes.sideGroup} >
                    <Typography className={classes.title}>Staff</Typography>
                    <Link to='#' className={classes.link}>
                        <WorkOutline className={classes.icon} />
                        Manage
                    </Link>
                    <Link to='#' className={classes.link}>
                        <Timeline className={classes.icon} />
                        Analytics
                    </Link>
                    <Link to='#' className={classes.link}>
                        <Report className={classes.icon} />
                        Reports
                    </Link>
                </div>
            </Container>

        </div>
    )
}

export default SideBar
