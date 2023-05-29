/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable quotes */
import { ActivitiesContext } from "../context";
import { useContext } from "react";
import styled from "styled-components";

export default function ButtonDay() {
    const { activities } = useContext(ActivitiesContext);
    const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    function getDate(day) {
        let date = new Date(day);
        let dayName = date.getDay();
        dayName = daysOfWeek[dayName];
        let dayNumber = date.getDate();
        let month = date.getMonth();
        return `${dayName}, ${dayNumber}/${month}`;
    }

    function eventsByDate(date, activities) {
        return activities.filter((activity) => getDate(activity.startsAt) === date);
    }
    let startsAtDate = activities.map((activity) => activity.startsAt).sort().map((day) => getDate(day));
    let uniqueDays = [...new Set(startsAtDate)];
    return (
        <ButtonDayContainer>
            <h1>Escolha de Atividades</h1>
            <ButtonsCtnStyle>
                {uniqueDays.map((day) => (
                    <ButtonDayStyled key={day.id}>{day}</ButtonDayStyled>
                ))}
            </ButtonsCtnStyle>
        </ButtonDayContainer>
    );
}

const ButtonDayContainer = styled.div`
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 34px;
    }
`;

const ButtonDayStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 131px;
    height: 37px;
    background-color: #E0E0E0;
    border-radius: 4px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border: none;
`;

const ButtonsCtnStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 33%;
    margin-top: 20px;
`;
