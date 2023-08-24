import React, { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CalendarMinus from '../../assets/calendar-minus.svg';
import CalendarHeart from '../../assets/calendar-heart.svg';
import CalendarCheck from '../../assets/calendar-check.svg';
import CalendarX from '../../assets/calendar-x.svg';

const simpleData = {
    dDay: 4,
    restaurant: '맛나 분식',
    category: '서울 · 한식',
    bookingInfo: '2023.08.15 (화) · 오후 7:00 · n명'
}

type TabProps = {
    img: string;
    tabName: string;
    currentTab: string;
    handleTabChange: (tab: string) => void;
};

const Tab : React.FC<TabProps> = ({ img, tabName, currentTab, handleTabChange }) => (
    
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li className={currentTab === tabName ? 'select_on' : ''}  onClick={() => handleTabChange(tabName)}>
        <span className="calendar_img">
            <img src={img} alt=''/>
        </span>
        <span>{tabName}</span>
    </li>
);

const StatusList = () => {
    const [currentTab, setCurrentTab] = useState('예약대기');

    const handleTabChange = (tab: string) => {
        if (tab !== currentTab) {
            setCurrentTab(tab);
        }
    };
    
    const tabs = [
        { img: CalendarMinus, tabName: '예약대기' },
        { img: CalendarHeart, tabName: '예약조회' },
        { img: CalendarCheck, tabName: '방문완료' },
        { img: CalendarX, tabName: '취소내역' },
    ];

    return (
        <StatusListSC>
            <ul className='list_status'>
                {tabs.map((tab) => (
                    <Tab
                        img={tab.img}
                        tabName={tab.tabName}
                        currentTab={currentTab}
                        handleTabChange={handleTabChange}
                    />
                ))}
            </ul>

            <ul className='list_booking'>
                <li>
                    <span className="d_day">D - {simpleData.dDay}</span>
                    <div className="booking_info">
                        <div className='img'/>
                        <ul>
                            <li className="restaurant_name">{simpleData.restaurant}</li>
                            <li className="restaurant_info">{simpleData.category}</li>
                            <li className="booking_date">{simpleData.bookingInfo}</li>
                        </ul>
                        
                        <span className="btn_arrow_right">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </div>
                </li>
            </ul>
        </StatusListSC>
    );
};

export default StatusList;

const StatusListSC = styled.div`
    margin: 20px 0;

    .list_status {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }

    .list_status li {
        width: 80px;
        height: 30px;
        background-color: #f2f2f2;
        font-size: 12px;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .list_status li.select_on {
        background-color: #ffb100;
        color: #fff;
        font-weight: 600;
    }

    .calendar_img {
        margin-right: 5px;
    }
    
    .calendar_img img {
        width: 12px;
        height: 12px;   
    }

    .list_booking {
        height: 160px;
        padding: 20px;
        border-radius: 20px;
        box-shadow: 4px 4px 10px rgba(0,0,0,0.4);
        box-sizing: border-box;
        margin-bottom: 20px;
    }
    
    .d_day {
        padding: 3px 12px;
        border: 2px solid #FFB100;
        border-radius: 15px;
        margin-bottom: 20px;
        display: inline-block;
        font-size: 13px;
        font-weight: 600;
    }
    
    .booking_info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .booking_info .img {
        background-color: #f2f2f2;
        width: 60px;
        height: 60px;
        border-radius: 7px;
        cursor: pointer;
    }
    
    .restaurant_name {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 3px;
        cursor: pointer;
    }
    
    .restaurant_info {
        font-size: 12px;
        color: #494747;
        margin-bottom: 4px;
    }
    
    .booking_date {
        font-size: 13px;
        color: #FFB100;
        font-weight: 600;
    }
    
    .btn_arrow_right {
        width: 24px;
        height: 24px;
        background-color: #FFB100;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 11px;
        cursor: pointer;
        color: #fff;
    }
`;
