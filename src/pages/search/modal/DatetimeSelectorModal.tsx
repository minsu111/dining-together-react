import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal'; // 공식문서: https://reactcommunity.org/react-modal/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Calendar from '../../../components/common/Calendar';
import SolidLine from '../SolidLine';
import Button from '../../../components/common/Button';

import { SearchModalType } from './enum/Enum';

import { RootState } from '../../../app/store';
import { parseDateString, serializeDate } from '../../../utils/utils';
import { setExpectedDate } from '../store/FilterSlice';

type ModalProps = {
    isOpen: boolean;
    modalType: SearchModalType;
    onConfirm: () => void;
    onClose: (modalType: SearchModalType) => void;
};

/**
 * 검색할 날짜를 선택하는 Modal
 */
function DatetimeSelectorModal(props: ModalProps) {
    const dispatch = useDispatch();
    const expectedDate = useSelector((state: RootState) => {
        return state.filter.expectedDate;
    });

    let initialDate;
    try {
        if (!expectedDate) {
            initialDate = new Date();
        } else initialDate = parseDateString(expectedDate);
    } catch (error) {
        initialDate = new Date();
        console.error('Error occurred:', error);
    }

    const [selectedDate, setSelectedDate] = useState(initialDate);
    const [formattedDate, setFormattedDate] = useState('');

    const handleDayClick = (date: Date) => {
        setSelectedDate(date);
    };

    // 테스트용
    // useEffect(() => {
    //     dispatch(setExpectedDate(serializeDate(new Date())));
    // }, []);

    useEffect(() => {
        setFormattedDate(
            Intl.DateTimeFormat('ko', {
                dateStyle: 'full',
            }).format(selectedDate),
        );
    }, [selectedDate]);

    const handleClose = () => {
        props.onClose(props.modalType);
    };

    const handleConfirm = () => {
        const aaaaaaaaa = serializeDate(selectedDate);
        console.log(aaaaaaaaa, selectedDate);
        dispatch(setExpectedDate(aaaaaaaaa));

        props.onConfirm();
        handleClose();
    };

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
            <HeaderDiv>
                <FontAwesomeIcon
                    icon={faXmark}
                    style={{
                        width: 30,
                        height: 30,
                        marginTop: 16,
                        marginRight: 16,
                        cursor: 'pointer',
                    }}
                    onClick={handleClose}
                />
            </HeaderDiv>
            {/* <Calendar seletedDate={visitDate} onDayClick={handleDayClick} /> */}
            <Calendar
                dateSelected={selectedDate}
                showFooter={false}
                setDateSelected={(value) => {
                    if (value) handleDayClick(value);
                }}
            />
            <SolidLine />
            <Text>{formattedDate}</Text>
            <FooterDiv>
                <Button text="확인" onClick={handleConfirm} />
            </FooterDiv>
        </Modal>
    );
}

export default DatetimeSelectorModal;

const HeaderDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const FooterDiv = styled.div`
    position: fixed;
    bottom: 20px;
`;

const Text = styled.span`
    color: #ffb100;
    margin: 30px auto 0px auto;
`;
