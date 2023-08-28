import React from 'react';
import { styled } from 'styled-components';

function AddStoreDetail() {
    return (
        <section>
            <Inner>
                <h2>가게 세부정보 페이지입니다.</h2>
            </Inner>
        </section>
    );
}

export default AddStoreDetail;

const Inner = styled.div`
    margin: 0 auto;
    width: 350px;
    height: 100%;
    position: relative;
`;

const ConSC = styled.div`
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
        width: 200px;
        height: 200px;
        margin-bottom: 50px;
    }

    span {
        font-size: 24px;
        font-weight: 600;
    }
`;

const ButtonSC = styled.div`
    width: 100%;
    position: absolute;
    bottom: 20px;
`;