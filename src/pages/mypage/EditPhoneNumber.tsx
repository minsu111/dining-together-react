import React from 'react';
import { styled } from 'styled-components';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

function EditPhoneNumber() {
    return (
        <Container>
            <TopNaviBarBack pageName="이름 변경" prevPath="/my" />
            <Description>
                회식장소 예약에 필요한 정보이므로 반드시 실제 번호를
                입력해주세요.
            </Description>
            <div style={{ margin: '10px 0' }}>
                <Input
                    inputType="number"
                    placeholder="휴대폰 번호를 입력해주세요."
                />
            </div>
            <Button text="변경" onClick={() => {}} />
        </Container>
    );
}

export default EditPhoneNumber;

const Container = styled.section`
    margin: 0 20px;
`;

const Description = styled.div`
    font-size: 12px;
    margin-top: 30px;
`;
