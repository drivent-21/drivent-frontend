import MainTitle from '../../../components/MainTitle';
import MainSubtitle from '../../../components/Subtitle';
import useGetHotels from '../../../hooks/api/useHotel';

export default function Hotel() {
  const hotels = useGetHotels();
  
  return (
    <>
      <MainTitle>
        {'Escolha de hotel e quarto'}
      </MainTitle>
      <MainSubtitle>
        {'Primeiro, escolha seu hotel'}
      </MainSubtitle>
    </>
  );
}
