import MainTitle from '../../../components/MainTitle';
import MainSubtitle from '../../../components/Subtitle';
import useGetHotels from '../../../hooks/api/useHotel';
import CardHotel from '../../../components/CardHotel';

import styled from 'styled-components';
import { useState } from 'react';
import RoomsButton from '../../../components/RoomsHotel';
import ButtonDashboard from '../../../components/ButtonDashboard';

export default function Hotel() {
  const hotels = useGetHotels();
  const [selected, setSelected] = useState([]);
  const [Rooms, setRooms] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);

  const handleClickHotels = (elm) => {
    const newArr = [elm];
    setSelected(newArr);
    setRooms(elm.Rooms);
  };

  const handleClickRooms = (elm) => {
    const newArr = [elm];
    setSelectedRooms(newArr);
  };

  return (
    <>
      <MainTitle>
        {'Escolha de hotel e quarto'}
      </MainTitle>
      <MainSubtitle>
        {'Primeiro, escolha seu hotel'}
      </MainSubtitle>
      <CardContainer>
        {
          hotels?.map((elm) => (
            <div key={elm.id} onClick={() => handleClickHotels(elm)}>
              <CardHotel 
                key={elm.id} 
                image={elm.image} 
                name={elm.name} 
                acomodationType={'Verificar'} 
                vacancies={elm.Rooms.length} 
                selected={selected.includes(elm) ? 'selected' : 'unselected' 
                }/>
            </div>
          ))
        }
      </CardContainer>
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
      <RoomsContainer>
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
      {
        selectedRooms.length !== 0
          ?
          <ButtonDashboard>
            {'RESERVAR QUARTO'}
          </ButtonDashboard>
          :
          ''
      }
    </>
  );
}

const CardContainer = styled.main`
  display: flex;
  width: 95%;
  height: auto;
  gap: 19px;
  justify-content: space-between;
`;

const RoomsContainer = styled.div`
  display: grid;
  grid-template-columns: 190px 190px 190px 190px;
  width: 95%;
  height: auto;
  gap: 17px;
  margin-top: 33px;
`;
