import styled from 'styled-components';
import { useState } from 'react';

export default function Ticket({ id, name, price, handleTicketData, ticketType, disabledTicketButton }) {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }
  return (
    <TicketBox
      disabled={ticketType != '' ? true : false}
      backColor={click ? '#FFEED2' : 'white'}
      borderColor={click ? '#FFEED2' : '#CECECE'}
      onClick={() => {
        handleClick();
        handleTicketData(id);
        disabledTicketButton(name);
      }}
    >
      <TicketType>{name}</TicketType>
      <TicketPrice>R$ {price}</TicketPrice>
    </TicketBox>
  );
}

const TicketBox = styled.button`
  height: 145px;
  width: 145px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.backColor};
  :hover{
    cursor:pointer;
  }
`;

const TicketType = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #454545;
`;

const TicketPrice = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #898989;
`;
