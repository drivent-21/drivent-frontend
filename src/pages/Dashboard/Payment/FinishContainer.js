/* eslint-disable indent */
import { useContext } from 'react';
import { TicketContext } from './context';

export function FinishContainer() {
    const { totalPrice, setPaymentStage, ticketType, ticketState } = useContext(TicketContext);
    function handleTicketType(ticketState) {
        ticketType(ticketState.Online);
        setPaymentStage(1);
    }
    return (
        <>
            <h1>Fechado! O total ficou em R$ {totalPrice}. Agora é só confirmar:</h1>
            <button onClick={() => handleTicketType(ticketState)} type="button">RESERVAR INGRESSO</button>
        </>
    );
}
