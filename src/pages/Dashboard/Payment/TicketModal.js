/* eslint-disable default-case */
/* eslint-disable indent */
import { ButtonsContainer } from './ButtonsContainer';
import { ticketButtonInfo, hotelButtonInfo } from './utils/buttonInfo';
import { FinishContainer } from './FinishContainer';
import { useState } from 'react';
import { TicketContext } from './context';

export function TicketModal() {
    const [ticket, setTicket] = useState('');

    function handleTicket(type) {
        setTicket(type);
    }

    return (
        <TicketContext.Provider value={{ handleTicket }} >
            <ButtonsContainer
                title={ticketButtonInfo.title}
                firstButton={ticketButtonInfo.firstButton}
                secondButton={ticketButtonInfo.secondButton}
            />
            {
                ticket === 'Presencial' | ticket === 'Sem Hotel' | ticket === 'Com Hotel' &&
                <ButtonsContainer
                    title={hotelButtonInfo.title}
                    firstButton={hotelButtonInfo.firstButton}
                    secondButton={hotelButtonInfo.secondButton}
                />
            }
            {
                ticket === 'Online' | ticket === 'Sem Hotel' | ticket === 'Com Hotel' &&
                <FinishContainer />
            }

        </TicketContext.Provider>
    );
}
