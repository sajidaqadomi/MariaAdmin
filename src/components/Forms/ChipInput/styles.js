import { makeStyles } from "@material-ui/core";
import colors from "../../../config/colors";

export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        // justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
    },
    root: {
        '&.MuiChip-deletable': {
            margin: theme.spacing(0.5),
            border: `2px solid ${colors.black}`,
            borderRadius: '50%',
            backgroundColor: ({ color }) => {

                return color
            }
        }
    },
    deleteIcon: {
        '&.MuiSvgIcon-root': {
            color: ({ color }) => color === '#ffffff' ? colors.black : colors.white,
            transition: 'all .3s ease-in-out',
            '&:hover': {
                color: ({ color }) => color === '#000000' ? colors.white : colors.medGray,

            }

        }


    }
}));