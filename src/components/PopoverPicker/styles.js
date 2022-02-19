import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    picker: {
        position: 'relative'
    },

    swatch: {
        width: '28px',
        height: '28px',
        borderRadius: '8px',
        border: '3px solid #fff',
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer'
    },

    popover: {
        position: 'absolute',
        top: 'calc(100% + 2px)',
        left: '0',
        borderRadius: '9px',
        boxShadow: ' 0 6px 12px rgba(0, 0, 0, 0.15)',
        zIndex: '99'
    }


}))
