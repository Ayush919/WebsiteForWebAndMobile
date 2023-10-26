import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {TextField} from "@mui/material";

const style = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 300,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const SignInSignUpModal = (params) => {
    const {showModal, setShowForm} = params
    const handleClose = () => setShowForm(false);
    console.log("registerModal :::: ")

    return (
        <div>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/*<div className={"textFieldSection"}>*/}
                        <TextField id="outlined-basic" label="Gmail" variant="outlined"/>
                    {/*</div>*/}
                    {/*<div className={"textFieldSection"}>*/}
                        <TextField id="outlined-basic" label="Password" variant="outlined"/>
                    {/*</div>*/}
                </Box>
            </Modal>
        </div>
    );
}