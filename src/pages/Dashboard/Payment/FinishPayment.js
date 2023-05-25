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
            <h1>Ingresso escolhido</h1>
            <Button name={finishButtonInfo(totalPrice)} price={`R$ ${totalPrice}`} />
            {paymentStage === 1 ? <Cardform /> : <FinishMensage />
            }
        </ButtonStyle>
    );
}

const ButtonStyle = styled.div`
    h1 {
        font-size: 20px;
        weight: 400;
        line-height: 23px;
        color: #8E8E8E;
        font-family: 'Roboto', sans-serif;
    }
    button:first-child {
        background-color: #FFEED2 !important;
        width: 290px;
        height: 108px;
        display: flex;
    }
    button:nth-child(2) {
        background-color: #FFEED2 !important;
        width: 290px;
        height: 108px;
    }
`;
