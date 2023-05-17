import styled from 'styled-components';

export default function CardHotel() {
  return (
    <CardContainer>
      <Card/>
    </CardContainer>
  );
};

const CardContainer = styled.div`
    width: 100%;
    height: auto;
`;

const Card = styled.div`
    width: 196px;
    height: 264px;
    background: #EBEBEB;
    border-radius: 10px;
`;
