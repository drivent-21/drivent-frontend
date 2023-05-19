/* eslint-disable indent */
import { Button } from './components/Button';
import { useContext } from 'react';
import { TicketContext } from './context';
import { finishButtonInfo } from './utils/buttonInfo';
import styled from 'styled-components';
import Cardform from './components/CardForm';
import { FinishMensage } from './FinishMensage';

export function FinishPayment() {
    const { totalPrice, paymentStage } = useContext(TicketContext);
    return (
        <ButtonStyle>
            <h1>Fechado! O total ficou em R$ {totalPrice}. Agora é só confirmar:</h1>
            <Button name={finishButtonInfo(totalPrice)} price={`R$ ${totalPrice}`} />
            {paymentStage === 1 ? <Cardform /> : <FinishMensage />
            }
        </ButtonStyle>
    );
}

const ButtonStyle = styled.div`
    button:first-child {
        background-color: #FEC63E !important;
    }
`;
