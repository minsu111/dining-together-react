import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faUtensils,
    faWonSign,
    faChair,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FilterType, SearchModalType } from './enum/Enum';

/**
 * TotalFilter Modal에서만 쓰는 버튼
 */
function FilterButtonInModal({
    filterType,
    selectData,
    onToggleFilterDisplay,
}: {
    filterType: FilterType;
    selectData: string[];
    onToggleFilterDisplay: (modalType: SearchModalType) => void;
}) {
    let temp = '미선택';
    const [data, setData] = useState(temp);

    // 컴포넌트가 처음 렌더링될 때 한 번 실행되고, 그 이후에는 selectData를 감시하면서 변경이 있을 때마다 업데이트된다.
    useEffect(() => {
        if (selectData.length > 0) {
            let concatenatedString = selectData.join(', '); // 배열의 문자열들을 쉼표와 공백으로 연결

            if (concatenatedString.length > 20) {
                concatenatedString = `${concatenatedString.slice(0, 20)} ...`; // 20자 이상인 경우 자르고 ... 추가
            }

            temp = concatenatedString;
        }
        setData(temp);
    }, [selectData]);

    let icon: IconProp;
    let modalType: SearchModalType;
    switch (filterType) {
        case FilterType.Region:
            icon = faLocationDot;
            modalType = SearchModalType.Region;
            break;
        case FilterType.FoodType:
            icon = faUtensils;
            modalType = SearchModalType.FoodType;
            break;
        case FilterType.PricePerPerson:
            icon = faWonSign;
            modalType = SearchModalType.PricePerPerson;
            break;
        case FilterType.Atmosphere:
            icon = faFaceSmile;
            modalType = SearchModalType.Atmosphere;
            break;
        default: // FilterType.Seat:
            icon = faChair;
            modalType = SearchModalType.Seat;
            break;
    }

    return (
        <Div
            onClick={() => {
                onToggleFilterDisplay(modalType);
            }}
        >
            <LeftDiv>
                <FontAwesomeIcon icon={icon} />
            </LeftDiv>
            <CenterDiv>
                <span>{`${filterType}`}</span>
                <p style={{ color: data === '미선택' ? 'gray' : '#FFB100' }}>
                    {data}
                </p>
            </CenterDiv>
            <RightDiv>
                <FontAwesomeIcon icon={faChevronRight} />
            </RightDiv>
        </Div>
    );
}

export default FilterButtonInModal;

const Div = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    cursor: pointer;
`;

const LeftDiv = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 16px;
`;

const CenterDiv = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding-top: 13px;
`;

const RightDiv = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
