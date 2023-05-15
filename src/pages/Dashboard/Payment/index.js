import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Ticket from './TicketBox';
import { useState } from 'react';
import Hotel from './HotelBox';

export default function Payment() {
  //mock de dados
  const tickets = [
    { id: 1, name: 'Presencial', price: 200, isRemote: false, includesHotel: true },
    { id: 2, name: 'Online', price: 100, isRemote: true, includesHotel: false },
  ];
  //mock de dados dos hotels
  const hotels = [
    { id: 3, name: 'Sem Hotel', withHotel: false, hotelPrice: 0 },
    { id: 4, name: 'Com Hotel', withHotel: true, hotelPrice: 350 },
  ];
  const { enrollment } = useEnrollment();
  const [isPresencial, setIsPresencial] = useState(false);
  const [withHotel, setWithHotel] = useState(false);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [ticketType, setTicketType] = useState('');
  const [hotelType, setHotelType] = useState('');

  function handleTicketData(id) {
    const verifyIsRemote = tickets.find((el) => el.id === id);
    console.log(verifyIsRemote);
    if (!verifyIsRemote.isRemote) {
      setIsPresencial(!isPresencial);
      setTicketPrice(verifyIsRemote.price);
    }
  }
  function handleHotelData(id) {
    const { hotelPrice } = hotels.find((el) => el.id === id);
    setWithHotel(true);
    setFinalPrice(ticketPrice + hotelPrice);
  }

  function disabledTicketButton(name) {
    setTicketType(name);
  }

  function disabledHotelButton(name) {
    setHotelType(name);
  }
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {enrollment && enrollment !== null ? (
        <>
          <TicketsTitle>Primeiro, escolha sua modalidade de ingresso</TicketsTitle>
          <TicketsContainer>
            {tickets.map((el) => (
              <Ticket key={el.id} id={el.id} name={el.name} price={el.price} handleTicketData={handleTicketData} ticketType={ticketType} disabledTicketButton={disabledTicketButton} />
            ))}
          </TicketsContainer>
          {isPresencial ? (
            <>
              <TicketsTitle>Ótimo! Agora escolha sua modalidade de hospedagem</TicketsTitle>
              <TicketsContainer>
                {hotels.map((el) => (
                  <Hotel
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    price={el.hotelPrice}
                    handleHotelData={handleHotelData}
                    hotelType={hotelType}
                    disabledHotelButton={disabledHotelButton}
                  />
                ))}
              </TicketsContainer>
              {withHotel ? (
                <>
                  <FinalizeTitle>
                    Fechado! O total ficou em <span>R${finalPrice}</span>. Agora é só confirmar:
                  </FinalizeTitle>
                  <FinalizeButton>RESERVER INGRESSO</FinalizeButton>
                </>
              ) : (
                ''
              )}
            </>
          ) : (
            ''
          )}
        </>
      ) : (
        <>
          <NoEnrollment>
            Você precisa completar sua inscrição antes <br></br>
            de prosseguir pra escolha de ingresso
          </NoEnrollment>
        </>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const NoEnrollment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8e8e8e;
`;

const TicketsTitle = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 17px;
  color: #8e8e8e;
`;

const TicketsContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 20px;
  margin-bottom: 40px;
`;

const FinalizeTitle = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 17px;
  color: #8e8e8e;
  span {
    font-weight: 700;
  }
`;

const FinalizeButton = styled.button`
  height: 37px;
  width: 162px;
  left: 335px;
  top: 749px;
  border-radius: 4px;
  border: none;
  background-color: #e0e0e0;
  box-shadow: 0px 2px 10px 0px #00000040;

  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #111;
  cursor: pointer;
`;
