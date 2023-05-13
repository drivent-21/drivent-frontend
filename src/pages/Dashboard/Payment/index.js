import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function Payment() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <NoEnrollment>
        Você precisa completar sua inscrição antes <br></br>
        de prosseguir pra escolha de ingresso
      </NoEnrollment>
    </>
  );
}

const StyledTypography = styled(Typography)`
margin-bottom: 20px!important;
`;

const NoEnrollment = styled.div`
position:absolute;
top:50%;
left:450px;
font-weight: 400;
font-size: 20px;
line-height: 23px;
text-align: center;
color: #8E8E8E
`;
