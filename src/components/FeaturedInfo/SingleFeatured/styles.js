import { colors, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        // padding: theme.spacing(2),
        cursor: 'pointer'
    },
    title: {
        fontSize: '20px',
    },
    moneyDetails: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10px 0'
    },
    money: {
        fontSize: 30,
        fontWeight: '600'
    },
    moneyRate: {
        display: 'flex',
        alignItems: 'center'

    },
    sub: {

        fontSize: 15,
        color: colors.grey,

    }

}))