import MainTitle from '../../../components/MainTitle';
import MainSubtitle from '../../../components/Subtitle';
import useHotels from '../../../hooks/api/useHotel';
import CardHotel from '../../../components/CardHotel';

import styled from 'styled-components';
import { useState } from 'react';
import RoomsButton from '../../../components/RoomsHotel';
import ButtonDashboard from '../../../components/ButtonDashboard';
import FinalCardHotel from '../../../components/FinalCardHotels';

export default function Hotel() {
  const hotels = useHotels.useGetHotels();
  const [selected, setSelected] = useState([]);
  const [Rooms, setRooms] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [confirmBooking, setConfirmBooking] = useState(false);

  const handleClickHotels = (elm) => {
    const newArr = [elm];
    setSelected(newArr);
    setRooms(elm.Rooms);
  };

  const handleClickRooms = (elm) => {
    const newArr = [elm];
    setSelectedRooms(newArr);
  };

  const handleClickConfirmBooking = (elm) => {
    setConfirmBooking(true);
  };

  return (
    <>
      <MainTitle>
        {'Escolha de hotel e quarto'}
      </MainTitle>
      <MainSubtitle>
        {
          confirmBooking ? 'Você já escolheu seu quarto: ' : 'Primeiro, escolha seu hotel'
        }
      </MainSubtitle>
      <CardContainer confirmBooking={confirmBooking}>
        {
          hotels?.map((elm) => (
            <div key={elm.id} onClick={() => handleClickHotels(elm)}>
              <CardHotel 
                key={elm.id} 
                image={elm.image} 
                name={elm.name} 
                acomodationType={'Single, Triple or Double'} 
                vacancies={elm.Rooms.length} 
                selected={selected.includes(elm) ? 'selected' : 'unselected' 
                }/>
            </div>
          ))
        }
      </CardContainer>
      <Subtitle confirmBooking={confirmBooking}>
        {
          selected.length !== 0 
            ?  
            <MainSubtitle>
              {'Ótima pedida! Agora escolha seu quarto:'}
            </MainSubtitle>
            : 
            <MainSubtitle>
              {''}
            </MainSubtitle>
        }
      </Subtitle>
      <RoomsContainer confirmBooking={confirmBooking}>
        {
          Rooms?.map(elm => (
            <div key={elm.id} onClick={() => handleClickRooms(elm)}>
              <RoomsButton 
                key={elm.id} 
                name={elm.name} 
                capacity={elm.capacity} 
                selected={selectedRooms.includes(elm) ? 'selected' : 'unselected' }
              />
            </div>
          ))
        }
      </RoomsContainer>
      <FinalCardHotel 
        confirmBooking={confirmBooking} 
        image={selected[0]?.image} 
        hotelName={selected[0]?.name} 
        reservedRoom={selectedRooms[0]?.name}
        capacity={selectedRooms[0]?.capacity}
      />
      {
        selectedRooms.length !== 0
          ?
          <div onClick={handleClickConfirmBooking}>
            <ButtonDashboard >
              {
                confirmBooking ? 'TROCAR DE QUARTO' : 'RESERVAR QUARTO'
              }
            </ButtonDashboard>
          </div>
          :
          ''
      }
      
    </>
  );
}

const CardContainer = styled.main`
  display: ${props => props.confirmBooking === true ? 'none' : 'flex'};
  width: 95%;
  height: auto;
  gap: 19px;
  justify-content: space-between;
`;

const RoomsContainer = styled.div`
  display: ${props => props.confirmBooking === true ? 'none' : 'grid'};
  grid-template-columns: 190px 190px 190px 190px;
  width: 95%;
  height: auto;
  gap: 17px;
  margin-top: 33px;
`;

const Subtitle = styled.div`
 display: ${props => props.confirmBooking === true ? 'none' : 'flex'};
 width: auto;
 height: auto;
`;
