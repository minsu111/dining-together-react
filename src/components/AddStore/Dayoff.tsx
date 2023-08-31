import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { styled } from 'styled-components';

type DayOffProps = {
    dayoff1: string;
    dayoff2: string;
    handleChangeInfo: (k: string, v: string) => void;
};

const dayoffM = ['없음', '매주', '첫째주', '둘째주', '셋째주', '넷째주', '다섯번째주'];

const dayoffS = ['월', '화', '수', '목', '금', '토', '일'];

const DayoffSelect = ({ dayoff1, dayoff2, handleChangeInfo }: DayOffProps) => {
    const handleSelectedDayoffM = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        handleChangeInfo('dayoff1', selectedValue);
    };

    const handleSelectedDayoffS = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        handleChangeInfo('dayoff2', selectedValue);
    };

    return (
        <section>
            <OpenTimeSelector>
                <Select
                    ml="20px"
                    mr="20px"
                    w="100px"
                    placeholder="주기"
                    value={dayoff1}
                    onChange={handleSelectedDayoffM}
                >
                    {dayoffM.map((units) => (
                        <option key={units} value={units}>
                            {units}
                        </option>
                    ))}
                </Select>
                <Select
                    ml="20px"
                    mr="20px"
                    w="100px"
                    placeholder="요일"
                    value={dayoff2}
                    onChange={handleSelectedDayoffS}
                >
                    {dayoffS.map((days) => (
                        <option key={days} value={days}>
                            {days}
                        </option>
                    ))}
                </Select>
            </OpenTimeSelector>
        </section>
    );
};
export default DayoffSelect;

const OpenTimeSelector = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;

    Select {
        font-size: 14px;
        font-weight: 500;
        border-color: #ffb100;
    }

    .chakra-select__wrapper {
        margin: 0;
    }

    .chakra-select__wrapper:first-child {
        margin-right: 20px;
    }

    .chakra-select__wrapper:last-child {
        margin-left: 25px;
    }

    span {
        font-size: 15px;
        font-weight: 500;
    }
`;
