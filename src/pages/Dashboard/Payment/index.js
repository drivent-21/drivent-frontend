/* eslint-disable no-console */
/* eslint-disable default-case */
/* eslint-disable indent */
import { Header } from './Header';
import { TicketModal } from './TicketModal';
import { useState } from 'react';
import { TicketContext } from './context';
import { FinishPayment } from './FinishPayment';
import api from '../../../services/api';

export default function Payment() {
  const [paymentStage, setPaymentStage] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [ticketTypeId, setTicketTypeId] = useState(null);
  const [ticketState, setTicketState] = useState({
    Presencial: false,
    Online: false,
    'Sem Hotel': false,
    'Com Hotel': false,
  });

  function handlePrice(name) {
    let localPrice = totalPrice;
    switch (name) {
      case 'Presencial':
        setTotalPrice(250);
        break;
      case 'Online':
        setTotalPrice(100);
        break;
      case 'Sem Hotel':
        if (localPrice === 600) {
          setTotalPrice(localPrice - 350);
          break;
        }
        setTotalPrice(localPrice);
        break;
      case 'Com Hotel':
        if (localPrice === 600) break;
        setTotalPrice(localPrice + 350);
        break;
    }
  }

  async function ticketType(isOnLine) {
    const { token } = await JSON.parse(localStorage.getItem('userData'));
    const Auth = { headers: { Authorization: `Bearer ${token}` } };

    let name = isOnLine ? 'Online' : 'Presencial';

    let res = await api.put('/tickets/types', {
      name: name,
      price: totalPrice,
      isRemote: ticketState.Online,
      includesHotel: ticketState['Com Hotel'],
      ticketTypeId
    }, Auth);
    console.log(ticketTypeId, ticketState);
    setTicketTypeId({ id: res.data.id });

    await api.post('/tickets', { ticketTypeId: res.data.id }, Auth);
  }

  function handleTicketState(name) {
    handlePrice(name);
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

  function handleSelect(name) {
    handleTicketState(name);
  }

  return (
    <TicketContext.Provider
      value={{
        totalPrice,
        ticketState,
        handleSelect,
        setPaymentStage,
        paymentStage,
        ticketType,
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
