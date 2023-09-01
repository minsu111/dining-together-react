import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import axiosRequest from '../../api/api';
import HandleError from '../../api/Error';
import Button from '../common/Button';

type SimpleDataType = {
    reservedId: number,
    foodCategory: string,
    imageUrl: string,
    location: string,
    people: number,
    placeId: number,
    placeName: string,
    placeType: string,
    reservedDate: string,    
    status: string,
    storeId: number,
    storeName: string,
    userId: number,
    visitTime: string,
};

type DetailInfoProps = {
    detailOpen: boolean;
    setDetailOpen: (value: boolean) => void;
    dataDetail: SimpleDataType;
    setIsChange: (value: boolean) => void;
    isChange: boolean;
};

const DetailInfo = ({
    detailOpen,
    setDetailOpen,
    dataDetail,
    setIsChange,
    isChange,
}: DetailInfoProps) => {

    const user = useSelector((state: RootState) => state.user);
    const formattedReservedDate = (rawDate: string): string => {
        const parts = rawDate.split('-');
        if (parts.length === 3) {
            const [year, month, day] = parts;
            const formattedDate = `20${year}-${month}-${day}`;
            const dateObj = new Date(formattedDate);
            
            const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
            const dayOfWeek = weekdays[dateObj.getDay()];
            
            return `${formattedDate} (${dayOfWeek})`;
        }
        return rawDate;
    };

    const reservationCancel = async () => {
        try {
            const cancelStatus = await axiosRequest(
                'PUT',
                `/reserve/${dataDetail.reservedId}`,
                {
                    status: '예약취소',
                },
                setDetailOpen(false),
                HandleError,
            );
            if(cancelStatus && cancelStatus.message === 'Reservation updated successfully')  
                setIsChange(!isChange)
        } catch (error) {
            console.error(error);
        }
    };

    const reservationConfirm = async () => {
        try {
            const approveStatus = await axiosRequest(
                'PUT',
                `/reserve/${dataDetail.reservedId}`,
                {
                    status: '예약확정',
                },
                setDetailOpen(false),
                HandleError,
            );
            if(approveStatus && approveStatus.message === 'Reservation updated successfully')  
                setIsChange(!isChange)

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <DetailInfoSC style={{ display: detailOpen ? '' : 'none' }}>
            <InfoSC>
                <button
                    type="button"
                    className="btn_close"
                    onClick={() => setDetailOpen(false)}
                >
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>

                <div className="booking_detail_info">
                    <h3>예약 상세조회</h3>
                    <BookingInfoSC>
                        <div className="title_detail_info">
                            <h4>예약 내용</h4>
                            <span>예약번호 : {dataDetail.reservedId}</span>
                        </div>
                        <table>
                            <tr>
                                <td>예약식당</td>
                                <td>{dataDetail.storeName}</td>
                            </tr>
                            <tr>
                                <td>예약일자</td>
                                <td>{formattedReservedDate(dataDetail.reservedDate)} {dataDetail.visitTime}</td>
                            </tr>
                            <tr>
                                <td>예약인원</td>
                                <td>{dataDetail.people}명</td>
                            </tr>
                            <tr>
                                <td>예약옵션</td>
                                <td>[{dataDetail.placeType}] {dataDetail.placeName}</td>
                            </tr>
                            <tr>
                                <td>예약상태</td>
                                <td>{dataDetail.status}</td>
                            </tr>
                        </table>
                    </BookingInfoSC>

                    <UserInfoSC>
                        <div className="title_detail_info">
                            <h4>예약자 정보</h4>
                        </div>

                        <table>
                            <tr>
                                <td>예약자명</td>
                                <td>{user.userName}</td>
                            </tr>
                            <tr>
                                <td>연락처</td>
                                <td>{user.userPhoneNum}</td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td>{user.userEmail}</td>
                            </tr>
                        </table>
                    </UserInfoSC>
                    {dataDetail.status === '예약대기' && (
                        <ButtonSC>
                            <Button text="예약취소" width='150px' backgroundColor='#E2E2E3' textColor='#000' onClick={reservationCancel} />
                            <Button text="예약승인" width='150px' onClick={reservationConfirm} />
                        </ButtonSC>
                    )}
                </div>
            </InfoSC>
        </DetailInfoSC>
    );
};

export default DetailInfo;

const DetailInfoSC = styled.div`
    width: 100%;
`;

const InfoSC = styled.div`
width: 100%;
padding: 25px 0;
background-color: #fff;
border-radius: 20px 20px 0 0;

z-index: 100;
position: sticky;
left: 0;
bottom: 60px;

    .btn_close {
        position: absolute;
        left: 50%;
        top: -50px;
        transform: translateX(-50%);
        font-size: 32px;
        color: #ffb100;
        cursor: pointer;
    }

    h3 {
        font-size: 18px;
        font-weight: 600;
        padding: 0 25px;
        margin-bottom: 25px;
    }

    .title_detail_info {
        height: 50px;
        box-sizing: border-box;
        padding: 10px 25px;
        display: flex;
        border-bottom: 1.5px solid #afb1b6;
        background-color: #fafafa;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        margin-bottom: 10px;
    }

    .title_detail_info > span {
        padding: 5px 8px;
        background-color: #fff;
        border-radius: 15px;
        border: 1px solid #ffb100;
    }

    .title_detail_info h4 {
        font-weight: 500;
    }

    .reservation_info span {
        background-color: #fff;
        border-radius: 15px;
        padding: 5px 10px;
    }

    table {
        width: 100%;
    }

    table tr {
        padding: 10px 20px;
        display: flex;
        border-bottom: 1px solid #afb1b6;
        font-size: 14px;
    }

    table tr td:first-child {
        width: 25%;
        color: #626161;
    }
`;

const BookingInfoSC = styled.div`
    margin-bottom: 25px;
`;

const UserInfoSC = styled.div`
    margin-bottom: 25px;
`;

const ButtonSC = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;
