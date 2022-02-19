import { makeStyles } from "@material-ui/core";

import colors from "../../config/colors";

export default makeStyles((theme) => ({
    title: {
        fontSize: 22,
        fontWeight: 600,
    },

    link: {
        backgroundColor: "#eeeef7",
        borderRadius: theme.spacing(1),
        padding: theme.spacing(1),
        display: "flex",
        alignItems: "center",
        color: colors.medGray,
        cursor: "pointer",
        "&:hover": {
            textDecoration: "none",
        },
    },

}));
