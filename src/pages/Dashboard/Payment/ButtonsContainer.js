import { Button } from './components/Button';
import styled from 'styled-components';

export function ButtonsContainer({ title, firstButton, secondButton }) {
  return (
    <>
      <h2>{title}</h2>
      <ButtonsContainerStyle>
        <Button
          name={firstButton.name}
          price={firstButton.price}
        />
        {
          secondButton &&
          <Button
            name={secondButton.name}
            price={secondButton.price}
          />
        }
      </ButtonsContainerStyle>

    </>
  );
}

const ButtonsContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
