import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import { useContext } from 'react';
import { TicketContext } from '../context';
import api from '../../../../services/api';

export default class PaymentForm extends React.Component {
  static contextType = TicketContext;
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    const { handlePayment, ticketId } = this.context;
    const cardData = {
      issuer: this.state.name,
      number: this.state.number,
    };

    return (
      <PaymentFormStyle id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <InputContainer>
            <input
              type="tel"
              name="expiry"
              placeholder="Valid Thru"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </InputContainer>
        </form>
        <button onClick={() => handlePayment(cardData, ticketId)}>
          Finalizar pagamento
        </button>
      </PaymentFormStyle>
    );
  }
}

const PaymentFormStyle = styled.div`
  display: flex;
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    input {
      margin: 10px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      width: 300px;
      font-size: 16px;
      font-weight: 500;
      color: #333;
      
    }
  }
  `;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  input:first-child {
    width: 100%;
  }
  input:last-child {
    width: 50px;
  }
`;
