import React from 'react'

import useStyles from './Styles'

const SafeArea = ({ children }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.offest} />
            <>
                {children}
            </>

        </div>
    )
}

export default SafeArea
