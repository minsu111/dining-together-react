import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal'; // 공식문서: https://reactcommunity.org/react-modal/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Calendar from '../../../components/common/Calendar';
import SolidLine from '../SolidLine';
import Button from '../../../components/common/Button';

import { SearchModalType } from './enum/Enum';

type ModalProps = {
    visitDate: Date;
    isOpen: boolean;
    modalType: SearchModalType;
    onConfirm: () => void;
    onClose: (modalType: SearchModalType) => void;
};

/**
 * 검색할 날짜를 선택하는 Modal
 */
function DatetimeSelectorModal(props: ModalProps) {
    const handleClose = () => {
        props.onClose(props.modalType);
    };

    const formattedDate = Intl.DateTimeFormat('ko', {
        dateStyle: 'full',
    }).format(props.visitDate);

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={handleClose}
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
            <Calendar />
            <SolidLine />
            <Text>{formattedDate}</Text>
            <FooterDiv>
                <Button text="확인" onClick={props.onConfirm} />
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
