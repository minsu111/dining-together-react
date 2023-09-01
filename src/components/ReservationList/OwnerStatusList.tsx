import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../app/store';
import axiosRequest from '../../api/api';
import HandleError from '../../api/Error';

import CalendarMinus from '../../assets/calendar-minus.svg';
import CalendarHeart from '../../assets/calendar-heart.svg';
import CalendarCheck from '../../assets/calendar-check.svg';
import CalendarX from '../../assets/calendar-x.svg';

import DetailInfo from './OwnerDetailInfo';
import DimmedLayer from '../common/DimmedLayer';

type SimpleDataType = {
    reservedId: number;
    foodCategory: string;
    imageUrl: string;
    location: string;
    people: number;
    placeId: number;
    placeName: string;
    placeType: string;
    reservedDate: string;
    status: string;
    storeId: number;
    storeName: string;
    userId: number;
    visitTime: string;
};

type TabProps = {
    img: string;
    tabName: string;
    currentTab: string;
    handleTabChange: (tab: string) => void;
};

const Tab: React.FC<TabProps> = ({
    img,
    tabName,
    currentTab,
    handleTabChange,
}) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li
        className={currentTab === tabName ? 'select_on' : ''}
        onClick={() => handleTabChange(tabName)}
    >
        <span className="calendar_img">
            <img src={img} alt="" />
        </span>
        <span>{tabName}</span>
    </li>
);

const OwnerStatusList = () => {
    const user = useSelector((state: RootState) => state.user);
    const [ownerInfo, setOwnerInfo] = useState<
        Record<string, SimpleDataType[]>
    >({});
    const [isChange, setIsChange] = useState<boolean>(false);
    const getOwnerReservation = async () => {
        try {
            const ownerReservationInfo = await axiosRequest(
                'GET',
                `/stores/reserve`,
                {},
                HandleError,
            );
            setOwnerInfo(ownerReservationInfo);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getOwnerReservation();
    }, [isChange]);

    const [currentTab, setCurrentTab] = useState('예약대기');

    /* 전체 데이터 리스트 저장 */
    const [dataList, setDataList] = useState<SimpleDataType[]>([]);
    /* 팝업 데이터 저장 */
    const [dataDetail, setDataDetail] = useState<SimpleDataType>();
    /* 팝업 open - true/ false */
    const [detailOpen, setDetailOpen] = useState<boolean>(false);

    const handleTabChange = (tab: string) => {
        if (tab !== currentTab) {
            setCurrentTab(tab);
            setDataList([]);
        }
    };

    const tabs = [
        { img: CalendarMinus, tabName: '예약대기' },
        { img: CalendarHeart, tabName: '방문예정' },
        { img: CalendarCheck, tabName: '방문완료' },
        { img: CalendarX, tabName: '예약취소' },
    ];

    const handleOpenDetail = (item: SimpleDataType) => {
        setDataDetail(item);
        setDetailOpen(true);
    };

    useEffect(() => {
        // 탭에 맞는 예약 데이터를 선택하여 데이터 상태를 업데이트
        if (ownerInfo[currentTab]) {
            const tempDataList = ownerInfo[currentTab];
            setDataList(tempDataList);
        }
    }, [currentTab, ownerInfo]);

    const handleDday = (date:string) => {
        const reservationDate = `20${date}`;
        const givenDate = new Date(reservationDate);
        const today = new Date();
        const timeDifference = Number(givenDate) - Number(today);

        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24) + 1);

        return daysDifference > 0 ? `D - ${daysDifference}` : `D - 0`
    }

    return (
        <>
        <StatusListSC>
            <ul className="list_status">
                {tabs.map((tab) => (
                    <Tab
                        img={tab.img}
                        tabName={tab.tabName}
                        currentTab={currentTab}
                        handleTabChange={handleTabChange}
                        key={tab.tabName}
                    />
                ))}
            </ul>

            {dataList.length === 0 ? (
                <div className="no-exist">🙅‍♀️ 내역이 존재하지 않습니다</div>
            ) : (
                dataList.map((item) => (
                    <ul
                        className="list_booking"
                        key={`${item.reservedDate}-${item.visitTime}`}
                    >
                        <li>
                            <span className="d_day">
                                {handleDday(item.reservedDate)}
                            </span>

                            <div className="booking_info">
                                <Link
                                    to={`/store/${item.storeId}`}
                                    className="restaurant_name"
                                >
                                    <div
                                        className="img"
                                        style={{
                                            backgroundImage: `url(${item.imageUrl})`,
                                        }}
                                    />
                                </Link>
                                <ul>
                                    <li className="restaurant_name">
                                        <Link
                                            to={`/store/${item.storeId}`}
                                            className="restaurant_name"
                                        >
                                            {item.storeName}
                                        </Link>
                                    </li>
                                    <li className="restaurant_info">
                                        {item.location} · {item.foodCategory}
                                    </li>
                                    <li className="booking_date">
                                        20{item.reservedDate} · {item.visitTime}{' '}
                                        · {item.people}명
                                    </li>
                                </ul>

                                <button
                                    type="button"
                                    className="btn_arrow_right"
                                    onClick={() => handleOpenDetail(item)}
                                >
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </li>
                    </ul>
                ))
            )}
            </StatusListSC>
            <BottomSC>
                {dataDetail ? (
                    <DetailInfo
                        detailOpen={detailOpen}
                        setDetailOpen={setDetailOpen}
                        dataDetail={dataDetail}
                        setIsChange={setIsChange}
                        isChange={isChange}
                    />
                ) : (
                    ''
                )}
            </BottomSC>
        </>
    );
};

export default OwnerStatusList;


const StatusListSC = styled.div`
    margin: 20px 0;
    overflow-y: hidden;
    padding: 0 7px;

    .no-exist {
        margin-top: 100px;
        text-align: center;
    }

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
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
        margin-bottom: 20px;
    }

    .d_day {
        padding: 3px 12px;
        border: 2px solid #ffb100;
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

    .booking_info ul {
        width: 60%;
    }

    .booking_info .img {
        width: 60px;
        height: 60px;
        border-radius: 7px;
        cursor: pointer;
        background-size: cover;
        background-position: 50% 50%;
    }

    .restaurant_name {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 5px;
        cursor: pointer;
    }

    .restaurant_info {
        font-size: 12px;
        color: #494747;
        margin-bottom: 5px;
    }

    .booking_date {
        font-size: 13px;
        color: #ffb100;
        font-weight: 600;
    }

    .btn_arrow_right {
        width: 24px;
        height: 24px;
        background-color: #ffb100;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 11px;
        cursor: pointer;
        color: #fff;
    }

`;

const BottomSC = styled.div`
    position: sticky;
    bottom: 30px;
`;
