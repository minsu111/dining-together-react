import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import SolidLine from '../../SolidLine';
import Button from '../../../../components/common/Button';

type ModalProps = {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onConfirm: () => void;
};

const FilterModal: React.FC<ModalProps> = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(props.isOpen);

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => {
                setIsOpen(false);
            }}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                content: {
                    width: '390px',
                    height: '100%',
                    padding: '0 10px',
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
                    width="110px"
                    backgroundColor="#F2F2F2"
                    textColor="black"
                    onClick={() => {
                        setIsOpen(false);
                    }}
                />
                <Button text="적용" width="240px" onClick={props.onConfirm} />
            </FooterDiv>
        </Modal>
    );
};

export default FilterModal;

const HeaderDiv = styled.div`
    width: 100%;
    height: 48px;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ContentDiv = styled.div`
    width: 100%;
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
