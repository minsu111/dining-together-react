import React, { useState } from 'react';
import styled from 'styled-components';

const SelectFoodType: React.FC<{ data: string }> = ({ data }) => {
    enum FoodType {
        한식,
        중식,
        일식,
        퓨전음식,
        기타,
    }

    const [checkedArray, setCheckArray] = useState([
        false,
        false,
        false,
        false,
        false,
    ]);

    return (
        <Div>
            <CheckBoxLabel
                htmlFor="Korean"
                isChecked={checkedArray[FoodType.한식]}
            >
                <input type="checkbox" id="Korean" />
                한식
            </CheckBoxLabel>
            <CheckBoxLabel
                htmlFor="Chinese"
                isChecked={checkedArray[FoodType.중식]}
            >
                <input type="checkbox" id="Chinese" />
                중식
            </CheckBoxLabel>
            <CheckBoxLabel
                htmlFor="Japanese"
                isChecked={checkedArray[FoodType.일식]}
            >
                <input type="checkbox" id="Japanese" />
                일식
            </CheckBoxLabel>
            <CheckBoxLabel
                htmlFor="Fusion"
                isChecked={checkedArray[FoodType.퓨전음식]}
            >
                <input type="checkbox" id="Fusion" />
                퓨전 음식
            </CheckBoxLabel>
            <CheckBoxLabel
                htmlFor="etc"
                isChecked={checkedArray[FoodType.기타]}
            >
                <input type="checkbox" id="etc" />
                기타
            </CheckBoxLabel>
        </Div>
    );
};

export default SelectFoodType;

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    box-sizing: border-box;
    gap: 40px;
`;

type InputProps = {
    isChecked: boolean;
};
const CheckBoxLabel = styled.label<InputProps>`
    font-size: 18px;
    display: inline-flex;
    gap: 10px;

    input[type='checkbox'] {
        width: 18px;
        height: 18px;
        accent-color: ${(props) => (props.isChecked ? 'yellow' : '#ffb100')};
        cursor: pointer;
    }
`;
