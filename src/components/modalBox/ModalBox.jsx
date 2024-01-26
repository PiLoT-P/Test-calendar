import CloseIcon from '@mui/icons-material/Close';
import s from './ModalBox.module.scss'
import { Box, IconButton, Modal } from "@mui/material";

const stylesBox = {
    position: 'absolute', 
    top: '50%', left: '50%', 
    transform: 'translate(-50%, -50%)',  
    p: 2, 
    boxShadow: 24,
};

const ModalBox = ({isModalOpen, setIsModalOpen, children, title}) => {

    const bgColor = title ? '#ecf1f5': '#ffffff'

    return (
        <>
            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{zIndex: 1}}
            >
                <Box sx={{...stylesBox, bgcolor: bgColor,}} className={s.modal_container}>
                    {title ? <h2 className={s.title}>{title}</h2>: null}
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