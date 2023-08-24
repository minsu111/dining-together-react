import React from 'react';
import { styled } from 'styled-components';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import Button from '../../components/common/Button';

function DeleteAccount() {
    return (
        <Container>
            <TopNaviBarBack pageName="회원 탈퇴" prevPath="/my" />
            <Title>정말 떠나실 건가요?🥺</Title>
            <PrecautionsTitle>탈퇴 시 유의사항을 확인해주세요</PrecautionsTitle>
            <Precautions>
                · 회원 탈퇴 시 즉시 탈퇴 처리되며, 복구할 수 없습니다.
                <br />· 예약 승인 대기, 방문 대기 중인 예약내역이 있을 경우
                탈퇴할 수 없습니다.
            </Precautions>
            <Button text="탈퇴하기" onClick={() => {}} />
        </Container>
    );
}

export default DeleteAccount;

const Container = styled.section`
    margin: 0 20px;
`;

const Title = styled.h1`
    font-size: 30px;
    line-height: 45px;
    margin: 50px 0 20px 0;
`;

const PrecautionsTitle = styled.h2`
    font-size: 20px;
    padding: 30px 0 20px 0;
`;

const Precautions = styled.div`
    padding: 10px 0;
    margin-bottom: 20px;
`;
