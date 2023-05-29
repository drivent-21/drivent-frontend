/* eslint-disable indent */
import { ActivitiesContext } from './context';
import { useContext } from 'react';
import styled from 'styled-components';
import ActivitiesCtn from './ActivitiesCtn';

export default function LocalCtn({ title, id }) {
    const { activities } = useContext(ActivitiesContext);
    const filteredActivities = activities.filter((activity) => activity.localId === id);

    return (
        <TableStyle>
            <h1>{title}</h1>
            <LocalCtnStyle>
                {filteredActivities.map((event) => (
                    <ActivitiesCtn
                        key={event.id}
                        title={event.title}
                        startsAt={event.startsAt}
                        endsAt={event.endsAt}
                        capacity={event.capacity}
                    />
                )
                )}
            </LocalCtnStyle>
        </TableStyle>
    );
}

const LocalCtnStyle = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #EFEFEF;
    margin: 10px 0 0 0;
    padding: 0 10px 10px 10px;
    width: 290px;
    height: 300px;
`;

const TableStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
