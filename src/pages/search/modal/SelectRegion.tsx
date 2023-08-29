import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import CheckLabel from './CheckLabel';

import { RootState } from '../../../app/store';
import { setRegion } from '../store/FilterSlice';
import { RegionType } from './enum/Enum';

/**
 * 지역 필터 Modal
 */
function SelectRegion() {
    // props: { onConfirm: () => void }
    enum City {
        서울,
        경기,
        인천,
    }
    const [nowCity, setNowCity] = useState(City.서울);

    const dispatch = useDispatch();
    const region = useSelector((state: RootState) => {
        return state.filter.region;
    });

    const checkedListData: Array<RegionType> = new Array<RegionType>();

    const enumTypes = Object.values(RegionType);

    const [checkedList, setCheckedList] =
        useState<Array<RegionType>>(checkedListData);

    // 체크 상태가 바뀐 것을 checkedList에 넣거나 뺀다
    const handleCheck = (checkItem: RegionType) => {
        if (checkedList.includes(checkItem)) {
            setCheckedList(checkedList.filter((item) => item !== checkItem));
        } else {
            setCheckedList([...checkedList, checkItem]);
        }
    };

    return (
        <Div>
            <CityDiv>
                <CityTab
                    onClick={() => {
                        setNowCity(City.서울);
                    }}
                    className={nowCity === City.서울 ? 'selected' : ''}
                >
                    <CityName>서울</CityName>
                </CityTab>
                {/* <CityTab
                onClick={() => {
                    setNowCity(City.경기);
                }}
                className={nowCity === City.경기 ? 'selected' : ''}
            >
                <CityName>경기</CityName>
            </CityTab>
            <CityTab
                onClick={() => {
                    setNowCity(City.인천);
                }}
                className={nowCity === City.인천 ? 'selected' : ''}
            >
                <CityName>인천</CityName>
            </CityTab> */}
            </CityDiv>
            <AreaDiv>
                {enumTypes.map((type) => (
                    <CheckLabel
                        checkState={checkedList.includes(type)}
                        type={type}
                        onChange={handleCheck}
                    />
                ))}
            </AreaDiv>
        </Div>
    );
}

export default SelectRegion;

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const CityDiv = styled.div`
    width: 100px;
    height: 100%;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
`;

const CityTab = styled.div`
    width: 100%;
    cursor: pointer;
    transition: background-color 0.1s;

    &.selected {
        background-color: darkgray;
    }
`;

const CityName = styled.p`
    margin: 20px;
    font-size: 17px;
    font-weight: bold;
`;

const AreaDiv = styled.div`
    width: 290px;
    height: 100%;
    overflow-y: auto;
`;
