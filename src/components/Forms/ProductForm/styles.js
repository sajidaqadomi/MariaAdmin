

import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    formContainer: {
        //  display: 'flex',
        // justifyContent: 'space-around'

    },
    formInput: {
        marginBottom: theme.spacing(2)

    },
    row: {
        display: 'flex',
        // justifyContent: 'space-between',

    },
    selectStock: {
        flexBasis: 'fit-content'

    },
    selectTarget: {
        display: 'flex',
        flex: 1,
        // marginLeft: '16px',


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
    colorsComponents: {
        display: 'flex',
        alignItems: 'center'
    },
    colorInput: {
        margin: `0 ${theme.spacing(1)}px`
    },
    label: {
        marginBottom: theme.spacing(1),
        display: 'block'
    }


}))