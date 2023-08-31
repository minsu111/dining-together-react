import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import { FilterHeader, FilterFooter, ContentDiv } from './template/FilterModal';

import { RootState } from '../../../app/store';
import { setSeat } from '../store/FilterSlice';
import { SeatType, SearchModalType } from './enum/Enum';

/**
 * 좌석 필터 Modal
 */
function SelectSeat(props: {
    isOpen: boolean;
    onClose: (modalType: SearchModalType) => void;
}) {
    const enumTypes = Object.values(SeatType);

    const dispatch = useDispatch();
    const seat = useSelector((state: RootState) => {
        return state.filter.seat;
    });

    const deepCopyArray: string[] = JSON.parse(JSON.stringify(seat));
    const [checkedList, setCheckedList] = useState<string[]>(deepCopyArray);

    // 체크 상태가 바뀐 것을 checkedList에 넣거나 뺀다
    const handleCheck = (checkItem: string) => {
        if (checkedList.includes(checkItem)) {
            setCheckedList(checkedList.filter((item) => item !== checkItem));
        } else {
            setCheckedList([...checkedList, checkItem]);
        }
    };

    useEffect(() => {
        setCheckedList(seat);
    }, [seat]);

    // checkedList가 업데이트될 때마다 실행
    // React.useEffect(() => {
    //     checkedList.forEach((item) => {
    //         console.log(`현재선택된타입 / ${item}`);
    //     });
    // }, [checkedList]);

    const handleReset = () => {
        setCheckedList([]);
    };

    const handleClose = () => {
        props.onClose(SearchModalType.Seat);
    };

    const handleConfirm = () => {
        dispatch(setSeat(checkedList));

        handleClose();
    };

    return (
        <Modal
            isOpen={props.isOpen}
            onAfterClose={() => {
                // 유저가 수정은 했으나 적용하지 않은 내용을 버리고 화면을 리셋시킨다
                setCheckedList([...seat]);
            }}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1000,
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
