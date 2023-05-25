import { Button } from './components/Button';
import styled from 'styled-components';

export function ButtonsContainer({ title, firstButton, secondButton }) {
  return (
    <CtnStyle>
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

    </CtnStyle>
  );
}

const ButtonsContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CtnStyle = styled.div`  
    h2{
        font-size: 20px;
        weight: 400;
        line-height: 23px;
        color: #8E8E8E;
        font-family: 'Roboto', sans-serif;  
    }
  `;
