import React from 'react';
import { styled } from 'styled-components';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

function EditPassword() {
    return (
        <Container>
            <TopNaviBarBack pageName="이름 변경" prevPath="/my" />
            <div style={{ marginTop: '10px' }}>
                <Input inputType="text" placeholder="이름을 입력해주세요." />
            </div>
            <div>
                <Input inputType="text" placeholder="이름을 입력해주세요." />
            </div>
            <Description>
                영문/숫자/특수기호 혼합 8~20자로 입력해주세요.
            </Description>
            <AlertMessage>비밀번호가 일치하지 않습니다.</AlertMessage>
            <Button text="변경" onClick={() => {}} />
        </Container>
    );
}

export default EditPassword;

const Container = styled.section`
    margin: 0 20px;
`;

const Description = styled.div`
    font-size: 12px;
    padding: 6px;
`;

const AlertMessage = styled.div`
    font-size: 12px;
    color: red;
    margin-bottom: 30px;
    padding-left: 6px;
`;
