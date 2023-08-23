import React, { useState } from 'react';
import styled from 'styled-components';
import CheckLabel from './CheckLabel';

const SelectRegion: React.FC<{ data: string }> = ({ data }) => {
    enum City {
        서울,
        경기,
        인천,
    }
    const [nowCity, setNowCity] = useState(City.서울);

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
                <CityTab
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
                </CityTab>
            </CityDiv>
            <AreaDiv>
                <CheckLabel name="서울 전체" />
                <CheckLabel name="강남" />
                <CheckLabel name="서초" />
                <CheckLabel name="잠실/송파/강동" />
                <CheckLabel name="영등포/여의도/강서" />
                <CheckLabel name="건대/성수/왕십리" />
                <CheckLabel name="종로/중구" />
                <CheckLabel name="홍대/합정/마포" />
                <CheckLabel name="용산/이태원/한남" />
                <CheckLabel name="성북/노원/중랑" />
                <CheckLabel name="구로/관악/동작" />
            </AreaDiv>
        </Div>
    );
};

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
`;

const AreaDiv = styled.div`
    width: 290px;
    height: 100%;
    overflow-y: auto;
`;
