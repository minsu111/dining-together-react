import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const regionButtonNames = [
    '서울 전체',
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


const AreaSelect = () => {
    const [selectedRegion, setSelectedRegion] = useState('');

    const handleSelectedRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelectedRegion(selectedValue);
    };

    const updatedsignUpData = {
        location: selectedRegion,
    };
    console.log(
        '🚀 ~ file: ExtraInfo.tsx:72 ~ ExtraInfo ~ updatedsignUpData:',
        updatedsignUpData,
    );

    return (
        <section>
            <Select
                ml="20px"
                mr="20px"
                w="350px"
                placeholder="지역을 선택해 주세요"
                value={selectedRegion}
                onChange={handleSelectedRegion}
            >
                {regionButtonNames.map((region) => (
                    <option key={region} value={region}>
                        {region}
                    </option>
                ))}
            </Select>

        </section>
    );
};
export default AreaSelect;
