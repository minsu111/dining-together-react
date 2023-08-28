import React, { useState } from 'react';
import styled from 'styled-components';
import { SeatType } from './enum/Enum';

/**
 * 좌석 필터 Modal
 */
function SelectSeat() {
    const checkedListData: Array<SeatType> = new Array<SeatType>(); // 원래 이 컴포넌트의 props로 받아와야하는 데이터
    checkedListData.push(SeatType.Hall); // 테스트용

    const seatTypes = Object.values(SeatType);

    const [checkedList, setCheckedList] =
        useState<Array<SeatType>>(checkedListData);

    // 체크 상태가 바뀐 것을 checkedList에 넣거나 뺀다
    const handleCheck = (checkSeat: SeatType) => {
        if (checkedList.includes(checkSeat)) {
            setCheckedList(checkedList.filter((item) => item !== checkSeat));
        } else {
            setCheckedList([...checkedList, checkSeat]);
        }
    };

    // checkedList가 업데이트될 때마다 실행
    // React.useEffect(() => {
    //     checkedList.forEach((item) => {
    //         console.log(`현재선택된타입 / ${item}`);
    //     });
    // }, [checkedList]);

    return (
        <Div>
            {seatTypes.map((type) => (
                <CheckBoxLabel
                    checkState={checkedList.includes(type)}
                    seatType={type}
                    onChange={handleCheck}
                />
            ))}
        </Div>
    );
}

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

type CheckBoxProps = {
    checkState: boolean;
    seatType: SeatType;
    onChange: (seatType: SeatType) => void;
};
function CheckBoxLabel({ checkState, seatType, onChange }: CheckBoxProps) {
    return (
        <CheckBoxLabelSC htmlFor={seatType}>
            <input
                type="checkbox"
                id={seatType}
                checked={checkState}
                onChange={() => {
                    onChange(seatType);
                }}
                // onClick={(e) => {
                //     console.log(
                //         `${checkState} ${foodType} ${e.currentTarget.checked}`,
                //     );
                // }}
            />
            {seatType}
        </CheckBoxLabelSC>
    );
}

const CheckBoxLabelSC = styled.label`
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    gap: 10px;

    input[type='checkbox'] {
        width: 18px;
        height: 18px;
        accent-color: #ffb100;
        cursor: pointer;
    }
`;
