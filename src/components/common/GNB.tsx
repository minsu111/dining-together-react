import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const GNBArea: React.FC = () => {
    return (
        <GNBAreaSC>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faHouse} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faCalendar} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faUser} />
                </li>
            </ul>
        </GNBAreaSC>
    );
};

export default GNBArea;

const GNBAreaSC = styled.div`
    width: 100%;
    height: 65px;
    position: fixed;
    left: 0;
    bottom: 0;

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        border-top: 2px solid #D9D9D9;
    }

    li {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        cursor: pointer;
        color: #000;
    }

    li.select_on {
        color: #FFB100;
    }
`;
