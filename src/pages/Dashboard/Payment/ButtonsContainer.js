import { Button } from './components/Button';
import styled from 'styled-components';
import { useContext } from 'react';
import { TicketContext } from './context';

export function ButtonsContainer({ title, firstButton, secondButton }) {
  const { handleTicket } = useContext(TicketContext);

  return (
    <>
      <h2>{title}</h2>
      <ButtonsContainerStyle>

        <ButtonStyle onClick={() => handleTicket(firstButton.name)} >
          <Button name={firstButton.name} price={firstButton.price} />
        </ButtonStyle>

        <ButtonStyle onClick={() => handleTicket(secondButton.name)}>
          <Button name={secondButton.name} price={secondButton.price} />
        </ButtonStyle>

      </ButtonsContainerStyle>

    </>
  );
}

const ButtonStyle = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
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

const ButtonsContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
