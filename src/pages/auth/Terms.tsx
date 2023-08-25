import React from 'react';
import { styled } from 'styled-components';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

function Terms() {
    return (
        <Container>
            <TopNaviBarBack pageName="" prevPath="/my" />
        </Container>
    );
}

export default Terms;

const Container = styled.section`
    margin: 0 20px;
`;

const Description = styled.div`
    font-size: 12px;
    margin-top: 30px;
`;
