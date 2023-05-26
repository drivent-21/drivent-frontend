import styled from 'styled-components';
import { useContext } from 'react';
import { TicketContext } from '../context';

function changeColor(isSelected) {
  if (isSelected) {
    return '#FFEED2';
  }
  return '#FFF';
}

function changeBorder(isSelected) {
  if (isSelected) {
    return 'none';
  }
  return '1px solid #000';
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
  background-color: ${(props) => changeColor(props.ticketState[props.name])};
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  width: 200px;
  height: 150px;
  font-size: 20px;
  font-weight: 500;
  color: #333;
  text-align: center;
  border: ${(props) => changeBorder(props.ticketState[props.name])};
  cursor: pointer;
  > p {
    margin-bottom: 10px;
    font-size: 16px;
  }
  p:nth-child(2) {
            color: #898989;
        }
`;
