import { makeStyles } from "@material-ui/core";
import colors from "../../../config/colors";


export default makeStyles((theme) => ({
    container: {
        height: '100vh',
        background: `linear-gradient(to bottom,
            ${colors.darkBlue} 50%,
            rgba(255, 255, 255, 0.5) 50%
          )`,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    logo: {
        fontWeight: 'bold',
        fontSize: 56,
        marginBottom: theme.spacing(3),
        color: colors.white

    },
    paper: {
        width: '40%',

        padding: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        }
        // marginTop: '60px'
    },
    formTitle: {
        fontSize: '24px',
        fontWeight: 300,
        textTransform: 'uppercase'
    },
    link: {
        display: 'block',
        margin: '5px 0',
        cursor: 'pointer',
        fontSize: '12px',
        textDecoration: 'underline'
    }



}))