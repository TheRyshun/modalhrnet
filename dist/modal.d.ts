import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
    desc: string;
    close: string;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
