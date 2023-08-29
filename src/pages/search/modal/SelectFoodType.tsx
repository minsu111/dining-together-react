import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import { FilterHeader, FilterFooter, ContentDiv } from './template/FilterModal';
import { FoodType, SearchModalType } from './enum/Enum';

/**
 * 음식 유형 필터 Modal
 */
function SelectFoodType(props: {
    isOpen: boolean;
    onClose: (modalType: SearchModalType) => void;
}) {
    const handleReset = () => {
        alert('초기화 버튼 클릭시 로직 구현 필요');
    };

    const handleClose = () => {
        props.onClose(SearchModalType.FoodType);
    };

    const handleConfirm = () => {
        alert('적용 버튼 클릭시 로직 구현 필요');
    };

    const checkedListData: Array<FoodType> = new Array<FoodType>();

    const foodTypes = Object.values(FoodType);

    const [checkedList, setCheckedList] =
        useState<Array<FoodType>>(checkedListData);

    // 체크 상태가 바뀐 음식유형을 checkedList에 넣거나 뺀다
    const handleCheck = (checkFoodType: FoodType) => {
        if (checkedList.includes(checkFoodType)) {
            setCheckedList(
                checkedList.filter((item) => item !== checkFoodType),
            );
        } else {
            setCheckedList([...checkedList, checkFoodType]);
        }
    };

    // checkedList가 업데이트될 때마다 실행
    // React.useEffect(() => {
    //     checkedList.forEach((item) => {
    //         console.log(`현재선택된타입 / ${item}`);
    //     });
    // }, [checkedList]);

    return (
        <Modal
            isOpen={props.isOpen}
            // onRequestClose={handleClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                content: {
                    width: '390px',
                    height: '100%',
                    padding: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    inset: 0,
                    margin: '0 auto',
                },
            }}
        >
            <FilterHeader onClickReset={handleReset} title="음식 유형" />
            <ContentDiv>
                <Div>
                    {foodTypes.map((type) => (
                        <CheckBoxLabel
                            checkState={checkedList.includes(type)}
                            foodType={type}
                            onChange={handleCheck}
                        />
                    ))}
                </Div>
            </ContentDiv>
            <FilterFooter onClose={handleClose} onConfirm={handleConfirm} />
        </Modal>
    );
}

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

type CheckBoxProps = {
    checkState: boolean;
    foodType: FoodType;
    onChange: (foodType: FoodType) => void;
};
function CheckBoxLabel({ checkState, foodType, onChange }: CheckBoxProps) {
    return (
        <CheckBoxLabelSC htmlFor={foodType}>
            <input
                type="checkbox"
                id={foodType}
                checked={checkState}
                onChange={() => {
                    onChange(foodType);
                }}
                // onClick={(e) => {
                //     console.log(
                //         `${checkState} ${foodType} ${e.currentTarget.checked}`,
                //     );
                // }}
            />
            {foodType}
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
