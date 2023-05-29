/* eslint-disable indent */
import { ActivitiesContext } from './context';
import { useContext } from 'react';
import styled from 'styled-components';
import LocalCtn from './LocalCtn';

export default function TableCtn() {
    const { activities, locals } = useContext(ActivitiesContext);
    return (
        <LocalCtnStyle>
            {locals.map((local) => (
                <LocalCtn key={local.id} title={local.name} id={local.id}/>
            ))}
        </LocalCtnStyle>
    );
}

const LocalCtnStyle = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 20px 0 0 20px;
`;
