import React from 'react';
import Chip from '@material-ui/core/Chip';

import useStyles from './styles'

const ChipItem = ({ handleDelete, item }) => {
    //console.log(item)
    const classes = useStyles({ color: item })

    return <Chip
        // icon={icon}
        // label={item.label}
        onDelete={handleDelete(item)}
        // style={{root: backgroundColor: item.key,.MuiChip-icon }}
        classes={{ root: classes.root, deleteIcon: classes.deleteIcon }}
    />;
};

export default ChipItem;
