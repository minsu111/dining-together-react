import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { styled } from 'styled-components';

type OpenHoursProps = {
    openingHour: string;
    openingMinute: string;
    handleChangeInfo: (k: string, v: string) => void;
}

const openHours = [
    '00',
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

const openMinutes = [
    '00',
    '30',
];


const OpenTimeSelect = ({openingHour,openingMinute, handleChangeInfo}:OpenHoursProps) => {

    const handleSelectedOpenHour = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        handleChangeInfo('openingHour', selectedValue)
    };

    const handleSelectedOpenMinute = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        handleChangeInfo('openingMinute', selectedValue)
    };


    return (
        <section>
            <Title>&lt; 오픈 &gt;</Title>
            <OpenTimeSelector>
                <Select
                    ml="20px"
                    mr="20px"
                    w="100px"
                    placeholder="시"
                    value={openingHour}
                    onChange={handleSelectedOpenHour}
                >
                    {openHours.map((hour) => (
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
                    value={openingMinute}
                    onChange={handleSelectedOpenMinute}
                >
                    {openMinutes.map((minute) => (
                        <option key={minute} value={minute}>
                            {minute}
                        </option>
                    ))}
                </Select>
            </OpenTimeSelector>
        </section>
    );
};
export default OpenTimeSelect;

const Title = styled.h4`
    font-weight: 500;
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
