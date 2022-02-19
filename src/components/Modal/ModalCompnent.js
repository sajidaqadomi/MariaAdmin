import { Modal, Paper } from '@material-ui/core';
import React from 'react';

const ModalCompnent = ({ open, onClose, children }) => {
    return <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
        <Paper style={{ width: '70%', margin: 'auto', padding: 20, marginTop: '10vh' }}>
            {children}

        </Paper>
    </Modal>
};

export default ModalCompnent;
