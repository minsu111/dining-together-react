import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import DimmedLayer from '../common/DimmedLayer';
import Button from '../common/Button';

type SimpleDataType = {
    dDay: number;
    restaurant: string;
    category: string;
    status: string;
    bookingInfo: string;
};

type DetailInfoProps = {
    detailOpen: boolean;
    setDetailOpen: (value: boolean) => void;
    dataDetail: SimpleDataType;
};

const DetailInfo = ({
    detailOpen,
    setDetailOpen,
    dataDetail,
}: DetailInfoProps) => {
    return (
        <DetailInfoSC style={{ display: detailOpen ? '' : 'none' }}>
            <DimmedLayer />
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
                            <span>예약번호 : 1234567</span>
                            {/* <span>{dataDetail.status}</span> */}
                        </div>
                        <table>
                            <tr>
                                <td>예약신청일</td>
                                <td>2023.00.00 (월)</td>
                            </tr>
                            <tr>
                                <td>예약식당</td>
                                <td>식당 상호명</td>
                            </tr>
                            <tr>
                                <td>예약일자</td>
                                <td>2023.00.00 (화) 오후 7:00</td>
                            </tr>
                            <tr>
                                <td>예약인원</td>
                                <td>n명</td>
                            </tr>
                            <tr>
                                <td>예약옵션</td>
                                <td>[홀] A 테이블</td>
                            </tr>
                            <tr>
                                <td>예약상태</td>
                                <td>예약대기</td>
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
                                <td>예약자 이름</td>
                            </tr>
                            <tr>
                                <td>연락처</td>
                                <td>01012345678</td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td>elice@gmail.com</td>
                            </tr>
                        </table>
                    </UserInfoSC>
                    <ButtonSC>
                        <Button text="예약취소" onClick={() => {}} />
                    </ButtonSC>
                </div>
            </InfoSC>
        </DetailInfoSC>
    );
};

export default DetailInfo;

const DetailInfoSC = styled.div`
    width: 100%;
    // display: none;
`;

const InfoSC = styled.div`
    width: 100%;
    padding: 25px 0;
    background-color: #fff;
    border-radius: 20px 20px 0 0;
    position: fixed;
    left: 0;
    bottom: 0;

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
    justify-content: center;
`;
