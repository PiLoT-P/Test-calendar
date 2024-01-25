import CloseIcon from '@mui/icons-material/Close';
import s from './ModalBox.module.scss'
import { Box, IconButton, Modal } from "@mui/material";


const stylesBox = {
    position: 'absolute', 
    top: '50%', left: '50%', 
    transform: 'translate(-50%, -50%)', 
    bgcolor: 'background.paper', 
    p: 2, 
    boxShadow: 24,
};

const ModalBox = ({isModalOpen, setIsModalOpen, children}) => {
    return (
        <>
            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{zIndex: 1}}
            >
                <Box sx={stylesBox} className={s.modal_container}>
                    <IconButton className={s.buttonExit} aria-label="close" size="small" onClick={() => setIsModalOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                {children}
                </Box>
            </Modal>
        </>
    )
}

export default ModalBox;