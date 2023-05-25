/* eslint-disable no-console */
/* eslint-disable default-case */
/* eslint-disable indent */
import { Header } from './Header';
import { NoEnrollment } from './NoEnrollment';
import { TicketModal } from './TicketModal';
import { useState, useEffect } from 'react';
import { TicketContext } from './context';
import { FinishPayment } from './FinishPayment';
import api from '../../../services/api';
import { useContext } from 'react';

const { token } = JSON.parse(localStorage.getItem('userData'));
const Auth = { headers: { Authorization: `Bearer ${token}` } };

export default function Payment() {
  const [paymentStage, setPaymentStage] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [ticketTypeId, setTicketTypeId] = useState(null);
  const [ticketId, setTicketId] = useState(null);
  const [ticketState, setTicketState] = useState({
    Presencial: false,
    Online: false,
    'Sem Hotel': false,
    'Com Hotel': false,
  });

  async function findEnrollment() {
    let res = await api.get('/enrollments', Auth);

    if (res.data.length === 0) setPaymentStage(-1);
  }
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

    const { data } = await api.post('/tickets', { ticketTypeId: res.data.id }, Auth);

    setTicketId(data.id);
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

  async function handlePayment(cardData, ticketId) {
    try {
      await api.post('/payments/process', {
        cardData,
        ticketId
      }, Auth);
      setPaymentStage(2);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    findEnrollment();
  }, []);

  return (
    <TicketContext.Provider
      value={{
        totalPrice,
        ticketState,
        handleSelect,
        setPaymentStage,
        paymentStage,
        ticketType,
        ticketId,
        handlePayment,
        Auth,
      }} >
      <Header />

      {
        paymentStage === -1 ?
        <NoEnrollment /> : ''
      }

      {
        paymentStage === 0 ?
        <TicketModal /> : ''
      }

      {
        paymentStage === 1 | paymentStage === 2 ?
        <FinishPayment /> : ''
      }

    </TicketContext.Provider>
  );
}
