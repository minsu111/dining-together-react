import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function AddStoreBtn() {
    const navigate = useNavigate();
    const goToMy = (path: string) => {
        navigate(`/my/${path}`);
    };
    return (
        <Section>
            <Text>
                가게 등록하고 <span>간편하게</span>
                <br /> <span>단체 예약</span> 받으세요
            </Text>
            <Button text="가게 등록하기" onClick={() => goToMy('store')} />
        </Section>
    );
}

export default AddStoreBtn;

const Section = styled.div`
    display: flex;
    flex-direction: column;
`;

const Text = styled.h2`
    font-size: 24px;
    line-height: 30px;
    margin: 30px 0;

    & > span {
        font-weight: 600;
    }
`;
