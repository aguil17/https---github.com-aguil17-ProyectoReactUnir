import React from 'react';
import Modal from 'react-modal';

export const ModalExitoso = ({ isOpen, message, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            ariaHideApp={false}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50%',
                    padding: '20px',
                },
            }}
        >
            <div className='col text-center'>
                <h3>{message}</h3>
            </div>
        </Modal>
    );
};

