import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faMagnifyingGlass,
    faCalendar,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const GNBArea: React.FC = () => {
    const location = useLocation();
    const homeActive = location.pathname.includes('/home');
    const searchActive = location.pathname.includes('/search');
    const myListActive = location.pathname.includes('/reservationList');
    const myPageActive = location.pathname.includes('/my');

    return (
        <GNBAreaSC>
            <ul>
                <li className={`${homeActive ? 'select_on' : ''}`}>
                    <Link to="/home">
                        <FontAwesomeIcon icon={faHouse} />
                    </Link>
                </li>
                <li className={`${searchActive ? 'select_on' : ''}`}>
                    <Link to="/search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                </li>
                <li className={`${myListActive ? 'select_on' : ''}`}>
                    <Link to="/reservationList">
                        <FontAwesomeIcon icon={faCalendar} />
                    </Link>
                </li>
                <li className={`${myPageActive ? 'select_on' : ''}`}>
                    <Link to="/my">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </li>
            </ul>
        </GNBAreaSC>
    );
};

export default GNBArea;

const GNBAreaSC = styled.div`
    width: 390px;
    height: 65px;
    position: fixed;
    bottom: 0;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #fff;

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        border-top: 2px solid #d9d9d9;
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
        color: #ffb100;
    }
`;
