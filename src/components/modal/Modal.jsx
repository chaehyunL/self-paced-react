import styled from "styled-components";

const ModalWrapper = styled.div`
    display: block;
`;

const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

const ModalTitle = style.div`
  margin-bottom: 36px;
`;

function Modal({ onClose, children }) {
    return (
        <ModalWrapper>
            <ModalBackDrop onClick={onClose}></ModalBackDrop>
            <ModalContainer>
                {children}
            </ModalContainer>
        </ModalWrapper>
    );
}

export default Modal;
