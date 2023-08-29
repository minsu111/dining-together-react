import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { styled } from 'styled-components';
import { color } from 'framer-motion';

const closeHours = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
];

const closeMinutes = [
    '00',
    '30',
];


const CloseTimeSelect = () => {
    const [selectedCloseHour, setSelectedCloseHour] = useState('');
    const [selectedCloseMinute, setSelectedCloseMinute] = useState('');

    const handleSelectedCloseHour = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelectedCloseHour(selectedValue);
    };

    const handleSelectedCloseMinute = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelectedCloseMinute(selectedValue);
    };

    const updatedsignUpData = {
        hour: selectedCloseHour,
        minute: selectedCloseMinute,
    };
    console.log(
        updatedsignUpData,
    );

    return (
        <section>
            <Title>&lt; 마감 &gt;</Title>
            <OpenTimeSelector>
                <Select
                    ml="20px"
                    mr="20px"
                    w="100px"
                    placeholder="시"
                    value={selectedCloseHour}
                    onChange={handleSelectedCloseHour}
                >
                    {closeHours.map((hour) => (
                        <option key={hour} value={hour}>
                            {hour}
                        </option>
                    ))}
                </Select>
                <span> : </span>
                <Select
                    ml="20px"
                    mr="20px"
                    w="100px"
                    placeholder="분"
                    value={selectedCloseMinute}
                    onChange={handleSelectedCloseMinute}
                >
                    {closeMinutes.map((minute) => (
                        <option key={minute} value={minute}>
                            {minute}
                        </option>
                    ))}
                </Select>
            </OpenTimeSelector>
        </section>
    );
};
export default CloseTimeSelect;

const Title = styled.h4`
    font-weight: 500;
    margin-top: 10px;
`

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

`
