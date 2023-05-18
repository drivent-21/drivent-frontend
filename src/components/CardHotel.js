import styled from 'styled-components';

export default function CardHotel(props) {
  const { image, name, acomodationType, vacancies } = props;

  return (
    <CardContainer>
      <Card>
        <img src={image} alt='hotel'/>
        <h1>{name}</h1>
        <div>
          <h2>{'Tipos de acomodação:'}</h2>
          <h3>{acomodationType}</h3>
        </div>
        <div>
          <h2>{'Vagas disponíveis:'}</h2>
          <h3>{vacancies}</h3>
        </div>
      </Card>
    </CardContainer>
  );
};

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 196px;
    height: 264px;
    background: #EBEBEB;
    border-radius: 10px;

    box-sizing: border-box;
    padding: 16px 14px;

    img {
      width: 168px;
      height: 109px;
      border-radius: 5px;
    }

    h1 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #343434;
    }

    h2 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: #3C3C3C;
      margin-bottom: 5px;
    }

    h3 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #3C3C3C;
    }
`;
