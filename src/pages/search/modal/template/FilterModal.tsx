import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import SolidLine from '../../SolidLine';
import Button from '../../../../components/common/Button';

import { SearchModalType } from '../enum/Enum';

type ModalProps = {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    modalType: SearchModalType;
    onConfirm: () => void;
    onClose: (modalType: SearchModalType) => void;
};

const FilterModal: React.FC<ModalProps> = (props) => {
    const handleClose = () => {
        props.onClose(props.modalType);
    };

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
                    // gap: '20px',
                    inset: 0,
                },
            }}
        >
            <HeaderDiv>
                <Title>{props.title}</Title>
                <ResetButton onClick={() => {}}>
                    <FontAwesomeIcon
                        icon={faRotate}
                        style={{ color: '#FFB100' }}
                    />
                    <Text> 초기화</Text>
                </ResetButton>
            </HeaderDiv>
            <SolidLine />

            <ContentDiv>{props.children}</ContentDiv>

            <FooterDiv>
                <Button
                    text="닫기"
                    width="100px"
                    backgroundColor="#F2F2F2"
                    textColor="black"
                    onClick={handleClose}
                />
                <Button text="적용" width="230px" onClick={props.onConfirm} />
            </FooterDiv>
        </Modal>
    );
};

export default FilterModal;

const HeaderDiv = styled.div`
    width: 100%;
    height: 48px;
    // border: 1px solid black;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ContentDiv = styled.div`
    width: 100%;
    height: calc(100% - 160px);
    margin-top: 20px;
`;

const Title = styled.h3`
    font-size: 18px;
    font-weight: 600;
`;

const ResetButton = styled.button`
    width: 80px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const Text = styled.span`
    color: #ffb100;
`;

const FooterDiv = styled.div`
    position: fixed;
    bottom: 20px;
    display: flex;
    gap: 10px;
`;
