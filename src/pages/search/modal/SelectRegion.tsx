import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import { FilterHeader, FilterFooter, ContentDiv } from './template/FilterModal';
import CheckLabel from './CheckLabel';

import { RootState } from '../../../app/store';
import { setRegion } from '../store/FilterSlice';
import { RegionType, SearchModalType } from './enum/Enum';

/**
 * 지역 필터 Modal
 */
function SelectRegion(props: {
    isOpen: boolean;
    onClose: (modalType: SearchModalType) => void;
}) {
    enum City {
        서울,
        경기,
        인천,
    }
    const [nowCity, setNowCity] = useState(City.서울);

    const enumTypes = Object.values(RegionType);

    const dispatch = useDispatch();
    const region = useSelector((state: RootState) => {
        return state.filter.region;
    });

    const deepCopyArray: string[] = JSON.parse(JSON.stringify(region));
    const [checkedList, setCheckedList] = useState<string[]>(deepCopyArray);

    // 체크 상태가 바뀐 것을 checkedList에 넣거나 뺀다
    const handleCheck = (checkItem: RegionType) => {
        if (checkedList.includes(checkItem)) {
            setCheckedList(checkedList.filter((item) => item !== checkItem));
        } else {
            setCheckedList([...checkedList, checkItem]);
        }
    };

    const handleReset = () => {
        // TODO:
        alert('초기화 버튼 클릭시 로직 구현 필요');
    };

    const handleClose = () => {
        props.onClose(SearchModalType.Region);
    };

    const handleConfirm = () => {
        dispatch(setRegion(checkedList));

        handleClose();
    };

    return (
        <Modal
            isOpen={props.isOpen}
            onAfterClose={() => {
                // 유저가 수정은 했으나 적용하지 않은 내용을 버리고 화면을 리셋시킨다
                setCheckedList([...region]);
            }}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                content: {
                    width: '390px',
                    height: '100%',
                    padding: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    inset: 0,
                    margin: '0 auto',
                },
            }}
        >
            <FilterHeader onClickReset={handleReset} title="지역" />
            <ContentDiv>
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
            </ContentDiv>

            <FilterFooter onClose={handleClose} onConfirm={handleConfirm} />
        </Modal>
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
