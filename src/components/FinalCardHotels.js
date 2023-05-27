import styled from 'styled-components';

export default function FinalCardHotel(props) {
  const { image, hotelName, reservedRoom, capacity, confirmBooking } = props;

  return (

    <Card confirmBooking={confirmBooking}>
      <img src={image} alt='hotel'/>
      <h1>{hotelName}</h1>
      <div>
        <h2>{'Quarto Reservado'}</h2>
        <h3>
          {reservedRoom}    
          {
            capacity === 1
              ?
              ' (Single)'
              : capacity === 2
                ?
                ' (Double)'
                : 
                ' (Triple)'
          }
        </h3>
      </div>
      <div>
        <h2>{'Pessoas no seu quarto'}</h2>
        <h3>{
          capacity === 1
            ?
            'Somente você'
            : capacity === 2 
              ?
              'Você e mais um'
              : 'Você e mais duas pessoas'
        }</h3>
      </div>
    </Card>
   
  );
};

const Card = styled.div`
    display: ${props => props.confirmBooking === true ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-between;
    width: 196px;
    height: 264px;
    background: #FFEED2;
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
