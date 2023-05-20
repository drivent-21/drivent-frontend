import styled from 'styled-components';

export default function ButtonDashboard({ children }) {
  return (
    <Button>
      {children}
    </Button>
  );
};

const Button = styled.button`    
 width: 182px;
 height: 37px;
 background: #E0E0E0;
 box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
 border-radius: 4px;
 border: none;

 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 16px;
 text-align: center;
 color: #000000;

 margin-top: 46px;

 :hover {
    background: #c9c9c9;
 }
`;
