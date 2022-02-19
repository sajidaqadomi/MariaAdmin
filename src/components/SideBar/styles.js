import { makeStyles } from "@material-ui/core";
import colors from "../../config/colors";

export default makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    sideBar: {
        height: '100vh',
        backgroundColor: colors.lightBlue,
        width: '20%',
        padding: '20px 0',
        position: 'fixed',
        top: 0,
        left: 0


    },
    sideGroup: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 10,


    },
    title: {
        fontSize: 13,
        color: colors.lightGray

    },
    active: {},
    link: {
        padding: 5,
        marginBottom: 5,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10,
        color: colors.medGray,
        textDecoration: 'none',
        '&:hover, &$active': {
            textDecoration: 'none',
            backgroundColor: colors.midBlue
        }
    },
    icon: {
        fontSize: 20,
        marginRight: 5

    }

}))