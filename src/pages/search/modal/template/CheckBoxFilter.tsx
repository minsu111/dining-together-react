import React, { useState } from 'react';
import styled from 'styled-components';
import { EnumType } from '../enum/Enum';

type CheckBoxFilterProps = {
    enumType: EnumType;
};

/**
 * 체크박스만으로 이뤄진 필터 Modal용 템플릿
 */
function CheckBoxFilter(props: CheckBoxFilterProps) {
    const checkedListData: Array<EnumType> = new Array<EnumType>(); // 원래 이 컴포넌트의 props로 받아와야하는 데이터
    // checkedListData.push(FoodType.Asian); // 테스트용

    const enumTypes = Object.values(props.enumType);

    const [checkedList, setCheckedList] =
        useState<Array<EnumType>>(checkedListData);

    // 체크 상태가 바뀐 타입을 checkedList에 넣거나 뺀다
    const handleCheck = (checkedType: EnumType) => {
        if (checkedList.includes(checkedType)) {
            setCheckedList(checkedList.filter((item) => item !== checkedType));
        } else {
            setCheckedList([...checkedList, checkedType]);
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
            {enumTypes.map((type) => (
                <CheckBoxLabel
                    isChecked={checkedList.includes(type as EnumType)}
                    enumType={type as EnumType}
                    onChange={handleCheck}
                />
            ))}
        </Div>
    );
}

export default CheckBoxFilter;

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
    isChecked: boolean;
    enumType: EnumType;
    onChange: (enumType: EnumType) => void;
};
function CheckBoxLabel({ isChecked, enumType, onChange }: CheckBoxProps) {
    return (
        <CheckBoxLabelSC htmlFor={enumType}>
            <input
                type="checkbox"
                id={enumType}
                checked={isChecked}
                onChange={() => {
                    onChange(enumType);
                }}
                // onClick={(e) => {
                //     console.log(
                //         `${checkState} ${foodType} ${e.currentTarget.checked}`,
                //     );
                // }}
            />
            {enumType}
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
