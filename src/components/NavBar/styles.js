import { makeStyles } from "@material-ui/core";
import colors from "../../config/colors";

export default makeStyles((theme) => ({
    badge: {
        marginRight: 10
    },
    icon: {
        color: colors.medGray
    },
    root: {
        backgroundColor: colors.white,
        boxShadow: 'none'

    },
    toolbar: {
        justifyContent: 'space-between'
    },
    logo: {
        fontSize: 30,
        color: colors.darkBlue,
        fontWeight: 'bold'

    },
    leftSide: {


    },
    rightSide: {
        display: 'flex',
        alignItems: 'center',
    }
}))