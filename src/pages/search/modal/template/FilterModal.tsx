import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import SolidLine from '../../SolidLine';
import Button from '../../../../components/common/Button';

export function FilterHeader(props: {
    title: string;
    onClickReset: () => void;
}) {
    return (
        <div style={{ width: '100%' }}>
            <HeaderDiv>
                <Title>{props.title}</Title>
                <ResetButton onClick={props.onClickReset}>
                    <FontAwesomeIcon
                        icon={faRotate}
                        style={{ color: '#FFB100' }}
                    />
                    <Text> 초기화</Text>
                </ResetButton>
            </HeaderDiv>
            <SolidLine />
        </div>
    );
}

export function FilterFooter(props: {
    onConfirm: () => void;
    onClose: () => void;
}) {
    return (
        <FooterDiv>
            <Button
                text="닫기"
                width="100px"
                backgroundColor="#F2F2F2"
                textColor="black"
                onClick={props.onClose}
            />
            <Button text="적용" width="230px" onClick={props.onConfirm} />
        </FooterDiv>
    );
}

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

export const ContentDiv = styled.div`
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
