/* eslint-disable indent */
/* eslint-disable default-case */
import { Header } from './Header';
import { TicketModal } from './TicketModal';
import { useState } from 'react';
import { TicketContext } from './context';
import { FinishPayment } from './FinishPayment';

export default function Payment() {
  const [paymentStage, setPaymentStage] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [ticketState, setTicketState] = useState({
    Presencial: false,
    Online: false,
    'Sem Hotel': false,
    'Com Hotel': false,
  });

  function handleTicketState(name) {
    switch (name) {
      case 'Presencial':
        setTicketState({
          ...ticketState,
          Presencial: true,
          Online: false
        });
        break;
      case 'Online':
        setTicketState({
          'Sem Hotel': false,
          'Com Hotel': false,
          Presencial: false,
          Online: true
        });
        break;
      case 'Sem Hotel':
        setTicketState({
          ...ticketState,
          'Sem Hotel': true,
          'Com Hotel': false
        });
        break;
      case 'Com Hotel':
        setTicketState({
          ...ticketState,
          'Sem Hotel': false,
          'Com Hotel': true
        });
    }
  }

  function handlePrice(name) {
    switch (name) {
      case 'Presencial':
        setTotalPrice(250);
        break;
      case 'Online':
        setTotalPrice(100);
        break;
      case 'Sem Hotel':
        if (totalPrice === 600) {
          setTotalPrice(totalPrice - 350);
          break;
        }
        setTotalPrice(totalPrice);
        break;
      case 'Com Hotel':
        if (totalPrice === 600) break;
        setTotalPrice(totalPrice + 350);
        break;
    }
  }

  function handleSelect(name) {
    handleTicketState(name);
    handlePrice(name);
  }

  return (
    <TicketContext.Provider
      value={{
        totalPrice,
        ticketState,
        handleSelect,
        setPaymentStage,
        paymentStage
      }} >
      <Header />

      {
        paymentStage === 0 &&
        <TicketModal />
      }

      {
        paymentStage === 1 | paymentStage === 2 &&
       <FinishPayment />
      }

    </TicketContext.Provider>
  );
}
