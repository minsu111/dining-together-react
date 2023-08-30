import React from 'react';
import { Select } from '@chakra-ui/react';
import styled from 'styled-components';
import { ChevronDownIcon } from '@chakra-ui/icons';

type TableInfoProps = {
    placeType: string;
    handleChangeInfo: (k: string, v: string) => void;
};

const regionButtonNames = ['룸', '홀', '테라스'];

const TableTypeSelect = ({placeType, handleChangeInfo}:TableInfoProps) => {

    const handleSelectedRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        handleChangeInfo('placeType', selectedValue);
    };

    return (
        <section>
            
            <SelectArea>
                <Select
                    ml="20px"
                    mr="20px"
                    w="120px"
                    placeholder="자리 분류"
                    value={placeType}
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
export default TableTypeSelect;

const SelectArea = styled.div`
    .chakra-select__wrapper {
        margin: 0;
    }
    Select {
        font-size: 14px;
        font-weight: 500;
        border-color: #ffb100;
        margin: 0;
    }
`;
