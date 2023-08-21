/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { styled } from 'styled-components';

type CheckBoxProps = {
    disabled?: boolean;
    checked?: boolean;
};

const CheckBox: React.FC<CheckBoxProps> = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
    };

    return (
        <CheckBoxContainer>
            <CheckBoxLabel checked={selectedOption === 'option1'}>
                <CheckBoxInput
                    type="radio"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={handleOptionChange}
                />
                <CheckBoxSpan checked={selectedOption === 'option1'}>
                    (일반회원) 회식장소 예약
                </CheckBoxSpan>
            </CheckBoxLabel>
            <CheckBoxLabel checked={selectedOption === 'option2'}>
                <CheckBoxInput
                    type="radio"
                    value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={handleOptionChange}
                />
                <CheckBoxSpan checked={selectedOption === 'option2'}>
                    (사장님) 회식장소 등록
                </CheckBoxSpan>
            </CheckBoxLabel>
        </CheckBoxContainer>
    );
};

export default CheckBox;

const CheckBoxContainer = styled.div`
    width: 350px;
    line-height: 60px;
    margin: 50px 0 30px 0;
    display: flex;
    flex-direction: column;
`;

const CheckBoxLabel = styled.label<{ checked: boolean }>`
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    border: ${({ checked }) =>
        checked ? '1px solid #ffb100' : '1px solid #d3d7db'};
    border-radius: 7px;
    cursor: pointer;
`;

const CheckBoxInput = styled.input`
    appearance: none;
    margin: 0 10px 2px 20px;
    vertical-align: middle;
    border: max(2px, 0.1em) solid gray;
    border-radius: 4px;
    width: 1.2em;
    height: 1.2em;
    transition: border 0.3s ease-in-out;
    cursor: pointer;

    &:checked {
        border: 0.4em solid #ffb100;
    }
`;

const CheckBoxSpan = styled.span<{ checked: boolean }>`
    color: ${({ checked }) => (checked ? '#ffb100' : 'black')};
    transition: color 0.3s;
};
`;
