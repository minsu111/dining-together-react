import React, { useState } from 'react';
import styled from 'styled-components';
import CheckButton from './CheckButton';
import { AtmosphereType } from './enum/Enum';

function SelectAtmosphere() {
    const checkedListData: Array<AtmosphereType> = new Array<AtmosphereType>(); // 원래 이 컴포넌트의 props로 받아와야하는 데이터
    checkedListData.push(AtmosphereType.Type1); // 테스트용

    const atmoTypes = Object.values(AtmosphereType);

    const [checkedList, setCheckedList] =
        useState<Array<AtmosphereType>>(checkedListData);

    // 체크 상태가 바뀐 것을 checkedList에 넣거나 뺀다
    const handleCheck = (checkItem: AtmosphereType) => {
        if (checkedList.includes(checkItem)) {
            setCheckedList(checkedList.filter((item) => item !== checkItem));
        } else {
            setCheckedList([...checkedList, checkItem]);
        }
    };

    return (
        <Div>
            {atmoTypes.map((type) => (
                <CheckButton
                    checkState={checkedList.includes(type)}
                    type={type}
                    onClick={handleCheck}
                />
            ))}
        </Div>
    );
}

export default SelectAtmosphere;

const Div = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 20px;
    padding-left: 10px;
    box-sizing: border-box;
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    align-content: flex-start;
`;
