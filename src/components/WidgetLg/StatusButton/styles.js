import { makeStyles } from "@material-ui/core";

import colors from "../../../config/colors";

export default makeStyles((theme) => ({
    btn: {
        backgroundColor: ({ type }) => {
            return type === "pending"
                ? colors.pendingBgColor
                : type === "approved"
                    ? colors.approvedBgColor
                    : colors.rejectedBgColor;
        },
        color: ({ type }) => {
            return type === "pending"
                ? colors.pendingColor
                : type === "approved"
                    ? colors.approvedColor
                    : colors.rejectedColor;
        },
    },
}));
