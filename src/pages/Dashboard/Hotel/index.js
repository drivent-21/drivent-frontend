import MainTitle from '../../../components/MainTitle';
import MainSubtitle from '../../../components/Subtitle';
import useGetHotels from '../../../hooks/api/useHotel';
import CardHotel from '../../../components/CardHotel';

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
      <CardHotel image={'https://www.kayak.com.br/rimg/himg/44/fe/90/leonardo-61545-147068318-531165.jpg?width=1366&height=768&crop=true'} name={'Driven Hotel'} acomodationType={'single'} vacancies={'108'}/>
    </>
  );
}
