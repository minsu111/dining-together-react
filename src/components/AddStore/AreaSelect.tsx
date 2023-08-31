import React from 'react';
import { Select } from '@chakra-ui/react';
import styled from 'styled-components';
import { ChevronDownIcon } from '@chakra-ui/icons';

type RegionProps = {
    location: string;
    handleChangeInfo: (k: string, v: string) => void;
}

const regionButtonNames = [
    '강남',
    '서초',
    '잠실/송파/강동',
    '영등포/여의도/강서',
    '건대/성수/왕십리',
    '종로/중구',
    '홍대/합정/마포',
    '용산/이태원/한남',
    '성북/노원/중랑',
    '구로/관악/동작',
];


const AreaSelect = ({location, handleChangeInfo}:RegionProps) => {

    const handleSelectedRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        handleChangeInfo('location', selectedValue)
    };


    return (
        <section>
            <SelectArea>
                <Select
                    ml="20px"
                    mr="20px"
                    w="350px"
                    placeholder="지역을 선택해 주세요"
                    value={location}
                    onChange={handleSelectedRegion}
                >
                    {regionButtonNames.map((region) => (
                        <option key={region} value={region}>
                            {region}
                        </option>
                    ))}
                </Select>
            </SelectArea>
        </section>
    );
};
export default AreaSelect;

const SelectArea = styled.div`
    Select {
        font-size: 14px;
        font-weight: 500;
        border-color: #ffb100;
    }
`

