import React, { useState } from 'react';
import styled from 'styled-components';
import {
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderTrack,
} from '@chakra-ui/react';

const MIN_PRICE = 0;
const MAX_PRICE = 40;

function SelectPricePerPerson(props: { selectMin: number; selectMax: number }) {
    const [min, setMin] = useState(props.selectMin);
    const [max, setMax] = useState(props.selectMax);
    const [onNotice, setNotice] = useState(false);

    const handleChangeSlider = (range: number[]) => {
        if (range[0] >= range[1]) {
            setNotice(true);

            setMin(range[1] - 1);
            setMax(range[1]);
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

    return (
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
