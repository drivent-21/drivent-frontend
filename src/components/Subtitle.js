import styled from 'styled-components';

export default function MainSubtitle({ children }) {
  return (
    <Subtitle>
      {children}
    </Subtitle>
  );
}

const Subtitle = styled.div`
width: 100%;
height: 23px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;

margin-top: 36px;
margin-bottom: 18px;

color: #8E8E8E;
`;
