import { makeStyles } from "@material-ui/core";

import colors from '../../../config/colors'

export default makeStyles((theme) => ({

    img: {
        width: 40,
        height: 40,
        marginRight: theme.spacing(2)
    },
    link: {
        backgroundColor: '#eeeef7',
        borderRadius: theme.spacing(1),
        padding: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
        color: colors.medGray,
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'none'
        }

    },

    icon: {
        fontSize: 16,
        marginRight: 5,
    }


}))