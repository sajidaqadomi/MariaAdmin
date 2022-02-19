import { makeStyles } from "@material-ui/core";
import colors from "../../config/colors";

export default makeStyles(theme => ({
    btn: {
        fontSize: 16,
        backgroundColor: colors.approvedColor,
        color: colors.white

    },
    chart: {
        margin: 0,
    },
    paper: {
        flex: 1
    },
    productInfo: {
        display: 'flex',
        flexDirection: "column",
        width: 'fit-Content'
    },
    item: {
        display: 'flex',
        marginBottom: theme.spacing(1),
        justifyContent: 'space-between'
    },
    key: {
        fontWeight: '700'



    }
}))