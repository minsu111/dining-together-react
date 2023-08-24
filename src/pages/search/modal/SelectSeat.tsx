import React, { useState } from 'react';
import styled from 'styled-components';

const SelectSeat: React.FC<{ data: string }> = ({ data }) => {
    enum SeatType {
        전체,
        홀,
        룸,
        테라스,
        대관,
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
                isChecked={checkedArray[SeatType.전체]}
            >
                <input type="checkbox" id="Korean" />
                전체
            </CheckBoxLabel>
            <CheckBoxLabel
                htmlFor="Chinese"
                isChecked={checkedArray[SeatType.홀]}
            >
                <input type="checkbox" id="Chinese" />홀
            </CheckBoxLabel>
            <CheckBoxLabel
                htmlFor="Japanese"
                isChecked={checkedArray[SeatType.룸]}
            >
                <input type="checkbox" id="Japanese" />룸
            </CheckBoxLabel>
            <CheckBoxLabel
                htmlFor="Fusion"
                isChecked={checkedArray[SeatType.테라스]}
            >
                <input type="checkbox" id="Fusion" />
                테라스
            </CheckBoxLabel>
            <CheckBoxLabel
                htmlFor="etc"
                isChecked={checkedArray[SeatType.대관]}
            >
                <input type="checkbox" id="etc" />
                대관
            </CheckBoxLabel>
        </Div>
    );
};

export default SelectSeat;

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
