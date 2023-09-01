import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { parseDateString } from '../../utils/utils';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

type StoreInfoProps = {
    isKeywordSearch?: boolean;
    storeId: number;
    imgUrl: string;
    name: string;
    description: string;
    subInfo?: string;
    price?: number;
};

/**
 * 검색결과 화면에서 하나하나의 가게 아이템
 */
function StoreItem(props: StoreInfoProps) {
    const navigate = useNavigate();

    const expectedDate = useSelector((state: RootState) => {
        return state.filter.expectedDate;
    });

    let initialDate;
    try {
        if (!expectedDate) {
            initialDate = new Date();
        } else initialDate = parseDateString(expectedDate);
    } catch (error) {
        initialDate = new Date();
        console.error('Error occurred:', error);
    }

    const formattedDate = format(initialDate, 'yyyy-MM-dd', { locale: ko });

    return (
        <Div
            onClick={() =>
                navigate(
                    `/store/${props.storeId}?selectedDate=${formattedDate}`,
                )
            }
        >
            <div>
                <ImgDiv imgUrl={`http://13.209.102.55/${props.imgUrl}`} />
            </div>

            <InfoDiv>
                <InfoSubDiv
                    className={props.isKeywordSearch ? 'isKeyword' : ''}
                >
                    <StoreName>{props.name}</StoreName>
                    <StoreDesc>{props.description}</StoreDesc>
                </InfoSubDiv>
                <InfoSubDiv className={props.isKeywordSearch ? 'isHide' : ''}>
                    <StoreEtcInfo>{props.subInfo}</StoreEtcInfo>
                    <StoreEtcInfo>{`${props.price}원`}</StoreEtcInfo>
                </InfoSubDiv>
            </InfoDiv>
        </Div>
    );
}

export default StoreItem;

const Div = styled.div`
    width: 350px;
    height: 110px;
    // border: 1px solid;
    display: flex;
    margin: 20px 0px 20px 10px;
`;

type ImgProps = {
    imgUrl: string;
};
const ImgDiv = styled.div<ImgProps>`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-image: url(${(props) => props.imgUrl});
    background-size: cover;
    background-position: 50% 50%;
`;

const InfoDiv = styled.div`
    width: 250px;
    height: 100%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

const InfoSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    &.isKeyword {
        gap: 10px;
    }
    &.isHide {
        display: none;
    }
`;

const StoreName = styled.h1`
    font-size: 18px;
    font-weight: bold;
    cursor: default;
`;

const StoreDesc = styled.p`
    margin-top: 5px;
    font-size: 12px;
    cursor: default;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const StoreEtcInfo = styled.p`
    font-size: 12px;
    color: gray;
    cursor: default;
`;
