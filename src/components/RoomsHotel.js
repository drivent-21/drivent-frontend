import styled from 'styled-components';
import { HiOutlineUser } from 'react-icons/hi';

export default function RoomsButton(props) {
  const { name, capacity, selected } = props;

  return (
    <RoomCards selected={selected}>
      <div>
        <p>{name}</p>
      </div>
      <div>
        {
          capacity === 1
            ?
            <UserUnfilled/>
            : capacity === 2
              ?
              <>
                <UserUnfilled/>
                <UserUnfilled/>
              </>
              : capacity === 3 
                ?
                <>
                  <UserUnfilled/>
                  <UserUnfilled/>
                  <UserUnfilled/>
                </>
                : ''
        }
      </div>
    </RoomCards>
  );         
}

const RoomCards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 45px;
    border: 1px solid #CECECE;
    width: 190px;
    border-radius: 10px;
    padding: 11px 16px;
    background: ${props => props.selected === 'unselected' ? '#FFFFFF' : '#FFEED2'};

    p {
        height: 23px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #454545;
        width: 35px;
    }

    :hover {
        box-shadow: 0.5px 1px 1px #CECECE;
    }
`;

const UserUnfilled = styled(HiOutlineUser)`
    width: 20.25px;
    height: 20.25px;
`;
