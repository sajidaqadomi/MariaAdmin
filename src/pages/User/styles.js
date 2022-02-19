import { makeStyles } from "@material-ui/core";
import colors from "../../config/colors";

export default makeStyles((theme) => ({
    btn: {
        fontSize: 16,
        backgroundColor: colors.approvedColor,
        color: colors.white

    },
    mainTitle: {
        fontWeight: 600

    },
    infoTitle: {
        fontSize: 14,
        fontWeight: 600,
        color: 'rgb(175, 170, 170)',
        margin: '20px 0',
    },
    item: {
        color: '#444',
        margin: '20px 0'
    },
    icon: {
        fontSize: 16,
        marginRight: 10

    },

    paper: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
    },
    editTitle: {
        marginBottom: 20
    }


}))