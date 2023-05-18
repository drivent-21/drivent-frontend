/* eslint-disable indent */
import { useContext } from 'react';
import { TicketContext } from './context';

export function FinishContainer() {
    const { totalPrice, setPaymentStage } = useContext(TicketContext);

    return (
        <>
            <h1>Fechado! O total ficou em R$ {totalPrice}. Agora é só confirmar:</h1>
            <button onClick={() => setPaymentStage(1)} type="button">RESERVAR INGRESSO</button>
        </>
    );
}
