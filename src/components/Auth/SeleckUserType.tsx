import React from 'react';
import { styled } from 'styled-components';

type SeleckUserTypeProps = {
    userType: string;
    onOptionChange: (value: string) => void;
};

const SeleckUserType: React.FC<SeleckUserTypeProps> = ({
    userType,
    onOptionChange,
}) => {
    const setUserType1 = () => {
        localStorage.setItem('userType', '1');
        localStorage.removeItem('2');
    };
    const setUserType2 = () => {
        localStorage.setItem('userType', '2');
        localStorage.removeItem('1');
    };

    return (
        <CheckBoxContainer>
            <CheckBoxLabel
                htmlFor="option1"
                checked={userType === '1'}
                onClick={() => {
                    onOptionChange('1');
                    setUserType1();
                }}
            >
                <CheckBoxInput
                    type="radio"
                    id="option1"
                    value="option1"
                    checked={userType === '1'}
                    onChange={() => {
                        onOptionChange('1');
                        setUserType1();
                    }}
                />
                <CheckBoxSpan checked={userType === '1'}>
                    (일반회원) 회식장소 예약
                </CheckBoxSpan>
            </CheckBoxLabel>
            <CheckBoxLabel
                htmlFor="option2"
                checked={userType === '2'}
                onClick={() => {
                    onOptionChange('2');
                    setUserType2();
                }}
            >
                <CheckBoxInput
                    type="radio"
                    id="option2"
                    value="option2"
                    checked={userType === '2'}
                    onChange={() => {
                        onOptionChange('2');
                        setUserType2();
                    }}
                />
                <CheckBoxSpan checked={userType === '2'}>
                    (사장님) 회식장소 등록
                </CheckBoxSpan>
            </CheckBoxLabel>
        </CheckBoxContainer>
    );
};

export default SeleckUserType;

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
