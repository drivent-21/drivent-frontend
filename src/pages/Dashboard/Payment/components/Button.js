import styled from 'styled-components';
import { useContext } from 'react';
import { TicketContext } from '../context';

function changeColor(isSelected) {
  if (isSelected) {
    return '#FEC63E';
  }
  return '#FFF';
}

export function Button({ name, price }) {
  const { handleSelect, ticketState } = useContext(TicketContext);

  return (
    <ButtonStyle onClick={() => handleSelect(name)}
      name={name}
      price={price}
      ticketState={ticketState}
    >
      <p>{name}</p>
      <p>{price}</p>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => changeColor(props.ticketState[props.name])} !important;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  width: 200px;
  height: 150px;
  font-size: 20px;
  font-weight: 500;
  color: #333;
  text-align: center;
  cursor: pointer;
  > p {
    margin-bottom: 20px;
    font-size: 16px;
  }
`;
