import styled from 'styled-components';

export default function MainTitle({ children }) {
  return (
    <Title>
      {children}
    </Title>
  );
}

const Title = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #000000;
`;
