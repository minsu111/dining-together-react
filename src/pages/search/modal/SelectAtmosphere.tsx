import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import { FilterHeader, FilterFooter, ContentDiv } from './template/FilterModal';
import CheckButton from './CheckButton';

import { RootState } from '../../../app/store';
import { setAtmosphere } from '../store/FilterSlice';
import { AtmosphereType, SearchModalType } from './enum/Enum';

/**
 * 분위기 필터 Modal
 */
function SelectAtmosphere(props: {
    isOpen: boolean;
    onClose: (modalType: SearchModalType) => void;
}) {
    const enumTypes = Object.values(AtmosphereType);

    const dispatch = useDispatch();
    const atmosphere = useSelector((state: RootState) => {
        return state.filter.atmosphere;
    });

    const deepCopyArray: string[] = JSON.parse(JSON.stringify(atmosphere));
    const [checkedList, setCheckedList] = useState<string[]>(deepCopyArray);

    // 체크 상태가 바뀐 것을 checkedList에 넣거나 뺀다
    const handleCheck = (checkItem: AtmosphereType) => {
        if (checkedList.includes(checkItem)) {
            setCheckedList(checkedList.filter((item) => item !== checkItem));
        } else {
            setCheckedList([...checkedList, checkItem]);
        }
    };

    const handleReset = () => {
        setCheckedList([]);
    };

    const handleClose = () => {
        props.onClose(SearchModalType.Atmosphere);
    };

    const handleConfirm = () => {
        dispatch(setAtmosphere(checkedList));

        handleClose();
    };

    return (
        <Modal
            isOpen={props.isOpen}
            onAfterClose={() => {
                // 유저가 수정은 했으나 적용하지 않은 내용을 버리고 화면을 리셋시킨다
                setCheckedList([...atmosphere]);
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
            <FilterHeader onClickReset={handleReset} title="분위기" />
            <ContentDiv>
                <Div>
                    {enumTypes.map((type) => (
                        <CheckButton
                            checkState={checkedList.includes(type)}
                            type={type}
                            onClick={handleCheck}
                        />
                    ))}
                </Div>
            </ContentDiv>

            <FilterFooter onClose={handleClose} onConfirm={handleConfirm} />
        </Modal>
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
