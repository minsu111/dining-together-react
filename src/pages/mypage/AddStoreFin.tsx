import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import logoImg from '../../assets/logoImg.svg';
import Button from '../../components/common/Button';

function AddStoreFin() {

    return (
        <section>
            <Inner>
                <ConSC>
                    <img src={logoImg} alt="회식어때 로고" />
                    <span>
                        가게 등록이 <br />
                        완료되었습니다!
                    </span>
                </ConSC>
                <ButtonSC>
                    <Link to="/my/store/detail">
                        <Button text="좌석 등록하러 가기" onClick={() => {}} />                    
                    </Link>
                </ButtonSC>
            </Inner>
        </section>
    );
}

export default AddStoreFin;

const Inner = styled.div`
    margin: 0 auto;
    width: 350px;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ConSC = styled.div`
    width: 100%;
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