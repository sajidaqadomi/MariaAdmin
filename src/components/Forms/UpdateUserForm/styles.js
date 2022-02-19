import { makeStyles } from "@material-ui/core";
import colors from "../../../config/colors";

export default makeStyles((theme) => ({
    btn: {
        fontSize: 16,
        backgroundColor: colors.approvedColor,
        color: colors.white

    },
    input: {
        marginBottom: theme.spacing(2)

    },
    imgContainer: {
        width: 100,
        height: 100,
        objectFit: 'cover',
        borderRadius: 10,
        overflow: 'hidden'

    },
    img: {
        width: '100%',
        height: '100%'
    },




}))