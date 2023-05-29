/* eslint-disable indent */
import { ActivitiesContext } from './context';
import { useContext } from 'react';
import disponible_icon from '../../../assets/images/disponible.svg';
import styled from 'styled-components';

export default function ActivitiesCtn({ title, startsAt, endsAt, capacity }) {
    const initTime = new Date(startsAt);
    const endTime = new Date(endsAt);
    startsAt = `0${initTime.getHours()}:0${initTime.getMinutes()}`;
    endsAt = `0${endTime.getHours()}:0${endTime.getMinutes()}`;
    return (
        <ActivitiesCtnStyle>
            <ColumnStyle>
                <h1>{title}</h1>
                <p>{startsAt} - {endsAt} </p>
            </ColumnStyle >
            <CapacityCtn>
                {capacity > 0 ? <img src={disponible_icon} alt="Pagamento confirmado" /> : <p>Indisponível</p>}

                <p>{capacity} vagas</p>
            </CapacityCtn>
        </ActivitiesCtnStyle>
    );
}

const ActivitiesCtnStyle = styled.div`
    display: flex;
    margin-top: 10px;
    padding: 10px;
    justify-content: space-between;
    background-color: #F1F1F1;
    height: 79px;
`;

const ColumnStyle = styled.div`
    display: flex;
    flex-direction: column;
    p {
        font-size: 12px;
        weight: 400;
        text-decoration: none;
    }
`;

const CapacityCtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #CFCFCF;
    padding-left: 7px;
p{
    font-size: 9px;
    color: green;
}
`;
