/* eslint-disable indent */
import styled from 'styled-components';
import payment_confirmed from '../../../assets/images/payment_confirm.svg';

export function FinishMensage() {
    return (
        <FinishMensageStyle>
            <img src={payment_confirmed} alt="Pagamento confirmado" />
            <h2>Seu ingresso foi comprado com sucesso!</h2>
            <p>Pagamento confirmado!
                Prossiga para escolha de hospedagem e atividades</p>
        </FinishMensageStyle>
    );
}

const FinishMensageStyle = styled.div`
    font-size: 27px;
`;

