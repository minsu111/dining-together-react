import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import { FilterHeader, FilterFooter, ContentDiv } from './template/FilterModal';
import {
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderTrack,
} from '@chakra-ui/react';

import { RootState } from '../../../app/store';
import { setPriceMin, setPriceMax } from '../store/FilterSlice';
import { SearchModalType } from './enum/Enum';

export const MIN_PRICE = 0;
export const MAX_PRICE = 40;

/**
 * 인당 가격 필터 Modal
 */
function SelectPricePerPerson(props: {
    isOpen: boolean;
    onClose: (modalType: SearchModalType) => void;
}) {
    const dispatch = useDispatch();
    const priceMin = useSelector((state: RootState) => {
        return state.filter.priceMin;
    });

    const priceMax = useSelector((state: RootState) => {
        return state.filter.priceMax;
    });

    const [min, setMin] = useState(priceMin);
    const [max, setMax] = useState(priceMax);
    const [onNotice, setNotice] = useState(false);

    const handleChangeSlider = (range: number[]) => {
        if (range[0] >= range[1]) {
            setNotice(true);
        } else {
            setNotice(false);

            setMin(range[0]);
            setMax(range[1]);
        }
    };

    const handleChangeInputMin = (value: string) => {
        let inputMin = parseInt(value, 10);
        inputMin = clamp(inputMin, MIN_PRICE, MAX_PRICE);
        setMin(inputMin);
    };

    const handleChangeInputMax = (value: string) => {
        let inputMax = parseInt(value, 10);
        inputMax = clamp(inputMax, MIN_PRICE, MAX_PRICE);
        setMax(inputMax);
    };

    const handleFocusOutInputMin = () => {
        if (min >= max) {
            setNotice(true);

            setMin(max - 1);
        } else {
            setNotice(false);
        }
    };

    const handleFocusOutInputMax = () => {
        if (min >= max) {
            setNotice(true);

            setMax(min + 1);
        } else {
            setNotice(false);
        }
    };

    function clamp(value: number, minNum: number, maxNum: number) {
        return Math.min(Math.max(value, minNum), maxNum);
    }

    useEffect(() => {
        setMin(priceMin);
        setMax(priceMax);
    }, [priceMin, priceMax]);

    const handleReset = () => {
        setMin(MIN_PRICE);
        setMax(MAX_PRICE);
    };

    const handleClose = () => {
        props.onClose(SearchModalType.PricePerPerson);
    };

    const handleConfirm = () => {
        dispatch(setPriceMin(min));
        dispatch(setPriceMax(max));

        handleClose();
    };

    return (
        <Modal
            isOpen={props.isOpen}
            onAfterClose={() => {
                // 유저가 수정은 했으나 적용하지 않은 내용을 버리고 화면을 리셋시킨다
                setMin(priceMin);
                setMax(priceMax);
            }}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1000,
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
            <FilterHeader
                onClickReset={handleReset}
                title="인당 가격"
                showResetBtn
            />
            <ContentDiv>
                <Div>
                    <SubTitle>가격 범위</SubTitle>

                    <div
                        style={{
                            marginTop: 30,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <RangeSlider
                            value={[min, max]}
                            min={0}
                            max={40}
                            step={1}
                            onChange={(val) => handleChangeSlider(val)}
                            width={300}
                        >
                            <RangeSliderTrack
                                bg="lightgray
"
                            >
                                <RangeSliderFilledTrack
                                    bg="#ffb100
"
                                />
                            </RangeSliderTrack>
                            <RangeSliderThumb
                                boxSize={6}
                                index={0}
                                border="1px"
                                borderColor="gray.500"
                            />
                            <RangeSliderThumb
                                boxSize={6}
                                index={1}
                                border="1px"
                                borderColor="gray.500"
                            />
                        </RangeSlider>
                        <RangeTextListDiv>
                            <RangeTextDiv>
                                <RangeText>0원</RangeText>
                            </RangeTextDiv>
                            <RangeTextDiv>
                                <RangeText>20만원</RangeText>
                            </RangeTextDiv>
                            <RangeTextDiv>
                                <RangeText>40만원</RangeText>
                            </RangeTextDiv>
                        </RangeTextListDiv>
                    </div>

                    <InputDiv>
                        <InputSubDiv>
                            <Input
                                type="number"
                                value={min}
                                onChange={(e) => {
                                    handleChangeInputMin(e.currentTarget.value);
                                }}
                                onBlur={handleFocusOutInputMin}
                            />
                            <span style={{ fontWeight: 'bold' }}>만원</span>
                        </InputSubDiv>
                        <Tilde>~</Tilde>
                        <InputSubDiv>
                            <Input
                                type="number"
                                value={max}
                                onChange={(e) => {
                                    handleChangeInputMax(e.currentTarget.value);
                                }}
                                onBlur={handleFocusOutInputMax}
                            />
                            <span style={{ fontWeight: 'bold' }}>만원</span>
                        </InputSubDiv>
                    </InputDiv>
                    {onNotice && (
                        <NotiMessageDiv>
                            <NotiMessage>
                                최소 가격을 최대 가격보다 낮게 설정해주세요
                            </NotiMessage>
                        </NotiMessageDiv>
                    )}
                </Div>
            </ContentDiv>

            <FilterFooter onClose={handleClose} onConfirm={handleConfirm} />
        </Modal>
    );
}

export default SelectPricePerPerson;

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

const SubTitle = styled.h3`
    margin: 10px 0 0 20px;
    font-size: 16px;
    font-weight: bold;
`;

const InputDiv = styled.div`
    margin-top: 40px;
    display: flex;
    gap: 20px;
    justify-content: center;
`;

const InputSubDiv = styled.div`
    width: 100px;
    height: 30px;
    display: flex;
    border-bottom: 2px solid black;
    justify-content: space-evenly;
    align-items: center;
`;

const Input = styled.input`
    width: 50px;
    border: none;
    text-align: center;
    font-size: 16px;
    font-weight: bold;

    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &:focus {
        outline: none; /* 기본 포커스 효과 제거 */
        border-color: transparent; /* 커서 활성화 상태에서는 border를 투명하게 설정 */
    }
`;

const Tilde = styled.strong`
    font-size: 20px;
    font-weight: 1000;
`;

const RangeTextListDiv = styled.div`
    width: 350px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`;

const RangeTextDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 50px;
`;

const RangeText = styled.span`
    font-size: 14px;
    color: lightgray;
`;

const NotiMessageDiv = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: center;
`;

const NotiMessage = styled.span`
    font-size: 13px;
    color: red;
`;
