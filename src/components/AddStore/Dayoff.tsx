import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { styled } from 'styled-components';
import { color } from 'framer-motion';

const dayoffM = ['없음', '매 주', '매 월', '매 년'];

const dayoffS = ['-', '월', '화', '수', '목', '금', '토', '일'];

const DayoffSelect = () => {
    const [selectedDayoffM, setSelectedDayoffM] = useState('');
    const [selectedDayoffS, setSelectedDayoffS] = useState('');

    const handleSelectedDayoffM = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelectedDayoffM(selectedValue);
    };

    const handleSelectedDayoffS = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelectedDayoffS(selectedValue);
    };

    const updatedsignUpData = {
        units: selectedDayoffM,
        days: selectedDayoffS,
    };
    console.log(updatedsignUpData);

    return (
        <section>
            <OpenTimeSelector>
                <Select
                    ml="20px"
                    mr="20px"
                    w="100px"
                    placeholder="단위"
                    value={selectedDayoffM}
                    onChange={handleSelectedDayoffM}
                >
                    {dayoffM.map((units) => (
                        <option key={units} value={units}>
                            {units}
                        </option>
                    ))}
                </Select>
                <span> : </span>
                <Select
                    ml="20px"
                    mr="20px"
                    w="100px"
                    placeholder="요일"
                    value={selectedDayoffS}
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
        margin-left: 20px;
    }

    span {
        font-size: 15px;
        font-weight: 500;
    }
`;
