import styled from 'react-emotion'

const Modal = styled('div')`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: #555;
  z-index: 100;

  @media(min-width: 1200px) {
    flex-direction: row;
  }
`

export default Modal