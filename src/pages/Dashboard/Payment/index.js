import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const { enrollment } = useEnrollment();
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {enrollment && enrollment !== null ? (
        <>
          <TicketsTitle>Primeiro, escolha sua modalidade de ingresso</TicketsTitle>
          <TicketsContainer>
            <TicketBox>
              <TicketType>Presencial</TicketType>
              <TicketPrice>R$ 250</TicketPrice>
            </TicketBox>
            <TicketBox>
              <TicketType>Online</TicketType>
              <TicketPrice>R$ 100</TicketPrice>
            </TicketBox>
          </TicketsContainer>
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
`;

const TicketBox = styled.section`
  height: 145px;
  width: 145px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  border: 1px solid #cecece;
`;

const TicketType = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #454545;
`;

const TicketPrice = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #898989;
`;
