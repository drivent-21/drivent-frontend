/* eslint-disable indent */
import { useContext } from 'react';
import { TicketContext } from './context';
import styled from 'styled-components';

export function FinishContainer() {
    const { totalPrice, setPaymentStage, ticketType, ticketState } = useContext(TicketContext);
    function handleTicketType(ticketState) {
        ticketType(ticketState.Online);
        setPaymentStage(1);
    }
    return (
        <CtnStyle>
            <h1>Fechado! O total ficou em <n>R$ {totalPrice}</n>. Agora é só confirmar:</h1>
            <button onClick={() => handleTicketType(ticketState)} type="button">RESERVAR INGRESSO</button>
        </CtnStyle>
    );
}

const CtnStyle = styled.div`
    button { 
        color: #000000;
        margin-top: 20px;
        height: 37px;
        border-radius: 5px;
        font-size: 16px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border: none;
        cursor: pointer;
    }
    h1 {
        font-size: 20px;
        weight: 400;
        line-height: 23px;
        color: #8E8E8E;
        font-family: 'Roboto', sans-serif;
    }
    n {
        font-weight: 700;
    }

`;
