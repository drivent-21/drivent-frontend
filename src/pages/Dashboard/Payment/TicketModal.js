/* eslint-disable default-case */
/* eslint-disable indent */
import { ButtonsContainer } from './ButtonsContainer';
import { ticketButtonInfo, hotelButtonInfo } from './utils/buttonInfo';
import { FinishContainer } from './FinishContainer';
import { useContext } from 'react';
import { TicketContext } from './context';

export function TicketModal() {
    const { ticketState } = useContext(TicketContext);
    
    return (
        <>
            <ButtonsContainer
                title={ticketButtonInfo.title}
                firstButton={ticketButtonInfo.firstButton}
                secondButton={ticketButtonInfo.secondButton}
            />
            {
                ticketState.Presencial | ticketState['Sem Hotel'] | ticketState['Com Hotel'] ?
                <ButtonsContainer
                    title={hotelButtonInfo.title}
                    firstButton={hotelButtonInfo.firstButton}
                    secondButton={hotelButtonInfo.secondButton}
                /> : null
            }
            {
                ticketState.Online | ticketState['Sem Hotel'] | ticketState['Com Hotel'] ?
                <FinishContainer /> : null
            }

        </>
    );
}
