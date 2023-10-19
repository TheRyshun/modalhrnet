import React from 'react';
import styled from 'styled-components'; // Import styled from 'styled-components'

// Définissez les styles pour le composant Modal
const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 300px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 4px;
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const CloseButton = styled.img`
  position: absolute;
  top: -5%;
  right: -3%;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  desc: string;
  close: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, desc, close }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalWrapper>
        <CloseButton src={close} alt="close" onClick={onClose} />
        <h2>{title}</h2>
        <p>{desc}</p>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
