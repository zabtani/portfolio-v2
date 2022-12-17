import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styled from 'styled-components';

const WhatsAppButton = () => {
  return (
    <Link href="https://wa.me/525206108">
      <Fab style={{ backgroundColor: '#25D366' }} color="primary" aria-label="WhatsApp">
        <WhatsAppIcon />
      </Fab>
    </Link>
  );
};

export default WhatsAppButton;

const Link = styled.a`
  position: fixed;
  bottom: 0;
  margin: 0 2vw 3.5vw 0;
  z-index: 400;
  right: 0;
  width: fit-content;
`;
