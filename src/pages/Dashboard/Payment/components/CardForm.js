import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import { Button } from './Button';
import { TicketContext } from '../context';
import { finishButtonInfo } from '../utils/buttonInfo';

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
      <CtnStyles>
        <h1>Pagamento</h1>
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
        </PaymentFormStyle>
        <button class="hidden"/>
        <button  onClick={() => handlePayment(cardData, ticketId)}>
          FINALIZAR PAGAMENTO
        </button>
      </CtnStyles>
    );
  }
}

const CtnStyles = styled.div`
.hidden {
    display: none;
}
  display: flex;
  flex-direction: column;
  button {
    background-color:  #E0E0E0;
    margin-top: 20px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 182px;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #000;
    font-weight: 400;
    cursor: pointer;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border: none;
  }
`;

const PaymentFormStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px;
  height: 230px;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 700px;
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
    font-size: 14px;
  }
`;
