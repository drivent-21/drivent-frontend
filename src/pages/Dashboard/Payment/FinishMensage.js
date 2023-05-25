/* eslint-disable indent */
import styled from 'styled-components';
import payment_confirmed from '../../../assets/images/payment_confirm.svg';

export function FinishMensage() {
    return (
        <FinishMensageStyle>
            <h1>Pagamento</h1>
            <CtnStyle>
                <img src={payment_confirmed} alt="Pagamento confirmado" />
                <p>Pagamento confirmado!<br />
                    <n>Prossiga para escolha de hospedagem e atividades</n></p>
            </CtnStyle>
        </FinishMensageStyle>
    );
}

const FinishMensageStyle = styled.div`
    font-size: 27px;
`;

const CtnStyle = styled.div`
    display: flex;
    width: 55%;
    height: 100%;
    margin-top: 20px;
    justify-content: space-evenly;
    align-items: center;
    p {
        font-size: 16px;
        font-weight: 700;
    }
    n {
        font-weight: 400;
    }
`;
