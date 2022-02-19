import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

import useClickOutside from "../../hooks/useClickOutside";
import useStyles from "./styles"

const PopoverPicker = ({ color, onChange }) => {
    const popover = useRef();
    const [isOpen, toggle] = useState(false);

    const classes = useStyles()

    const close = useCallback(() => toggle(false), []);
    useClickOutside(popover, close);

    return (
        <div className={classes.picker}>
            <div
                className={classes.swatch}
                style={{ backgroundColor: color }}
                onClick={() => toggle(true)}
            />

            {isOpen && (
                <div className={classes.popover} ref={popover}>
                    <HexColorPicker color={color} onChange={onChange} />
                </div>
            )}
        </div>
    );
};

export default PopoverPicker
