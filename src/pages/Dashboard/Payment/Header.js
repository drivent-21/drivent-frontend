/* eslint-disable indent */
import styled from 'styled-components';

export function Header() {
    return <HeaderStyle>
        <h1>Ingresso e pagamento</h1>
    </HeaderStyle>;
}

const HeaderStyle = styled.div`
    font-size: 27px;
    font-weight: 500;
    color: #333;
    margin-bottom: 20px;
`;
