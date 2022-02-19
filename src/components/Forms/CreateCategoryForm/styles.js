import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    formContainer: {

    },
    formInput: {
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
    fileContent: {
        display: 'flex',
        alignItems: 'center'

    },
    uploadBtn: {
        padding: '10px',
        height: 'fit-content',
        marginLeft: '16px',
        marginRight: '16px'
    }

}))