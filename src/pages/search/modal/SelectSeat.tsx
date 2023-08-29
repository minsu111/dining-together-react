import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import { FilterHeader, FilterFooter, ContentDiv } from './template/FilterModal';

import { SeatType, SearchModalType } from './enum/Enum';

/**
 * 좌석 필터 Modal
 */
function SelectSeat(props: {
    isOpen: boolean;
    onClose: (modalType: SearchModalType) => void;
}) {
    const handleReset = () => {
        alert('초기화 버튼 클릭시 로직 구현 필요');
    };

    const handleClose = () => {
        props.onClose(SearchModalType.Seat);
    };

    const handleConfirm = () => {
        alert('적용 버튼 클릭시 로직 구현 필요');
    };

    const checkedListData: Array<SeatType> = new Array<SeatType>();

    const enumTypes = Object.values(SeatType);

    const [checkedList, setCheckedList] =
        useState<Array<SeatType>>(checkedListData);

    // 체크 상태가 바뀐 것을 checkedList에 넣거나 뺀다
    const handleCheck = (checkItem: SeatType) => {
        if (checkedList.includes(checkItem)) {
            setCheckedList(checkedList.filter((item) => item !== checkItem));
        } else {
            setCheckedList([...checkedList, checkItem]);
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
            <FilterHeader onClickReset={handleReset} title="좌석" />
            <ContentDiv>
                <Div>
                    {enumTypes.map((type) => (
                        <CheckBoxLabel
                            checkState={checkedList.includes(type)}
                            seatType={type}
                            onChange={handleCheck}
                        />
                    ))}
                </Div>
            </ContentDiv>

            <FilterFooter onClose={handleClose} onConfirm={handleConfirm} />
        </Modal>
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
