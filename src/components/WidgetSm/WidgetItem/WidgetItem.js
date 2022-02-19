import React from "react";
import { Box } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";

import useStyle from "./styles";
import { UserProfile } from "../..";
import { Link } from "react-router-dom";

const WidgetItem = ({ user }) => {
    const classes = useStyle();
    return (
        <Box
            component="div"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            margin="20px 0"
        >
            <UserProfile
                img={
                    user.img ||
                    "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                }
                name={user.userName}
            />

            <Link to={`/user/${user._id}`} className={classes.link}>
                <Visibility className={classes.icon} />
                Display
            </Link>
        </Box>
    );
};

export default WidgetItem;
