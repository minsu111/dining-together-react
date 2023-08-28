import React from 'react';
import { styled } from 'styled-components';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import axiosRequest from '../../api/api';

function EditName() {
    const getUserInfo = async () => {
        try {
            const result = await axiosRequest('POST', '/user/28', {});
            console.log(
                '🚀 ~ file: Mypage.tsx:37 ~ getUserInfo ~ result:',
                result,
            );
        } catch (error: any) {
            alert('조회 실패');
        }
    };

    return (
        <>
            <TopNaviBarBack pageName="이름 변경" prevPath="/my" />
            <Container>
                <Description>
                    회식장소 예약에 필요한 정보이므로 반드시 실명을
                    입력해주세요.
                </Description>
                <div style={{ margin: '10px 0' }}>
                    <Input
                        inputType="text"
                        placeholder="이름을 입력해주세요."
                    />
                </div>
                <Button text="변경" onClick={() => {}} />
            </Container>
        </>
    );
}

export default EditName;

const Container = styled.section`
    margin: 0 20px;
`;

const Description = styled.div`
    font-size: 12px;
    margin-top: 30px;
`;
