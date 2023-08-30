import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import ConfirmPopup from '../../components/common/ConfirmPopup';
import ChoicePopup from '../../components/common/ChoicePopup';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import Button from '../../components/common/Button';
import { logout } from '../../app/UserSlice';
import axiosRequest from '../../api/api';
import { RootState } from '../../app/store';

function DeleteAccount() {
    const [popupState, setPopupState] = useState<boolean>(false);
    const [finPopupState, setFinPopupState] = useState<boolean>(false);
    const [failPopupState, setFailPopupState] = useState<boolean>(false);

    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const goToPage = (path: string) => {
        navigate(`/${path}`);
    };

    // '확인' 버튼 클릭 시 팝업 닫기
    const handleDeleteBtn = () => {
        setPopupState(true);
    };

    const closePopup = () => {
        setPopupState(false);
    };

    const completePopup = () => {
        setFinPopupState(false);
        goToPage('/');
    };

    const closeFailPopup = () => {
        setFailPopupState(false);
        goToPage('/reservationList');
    };

    const handlePopupBtn = () => {
        deleteAccount();
    };

    // 회원탈퇴
    const deleteAccount = async () => {
        try {
            const result = await axiosRequest('PUT', `/user/${user.userId}`, {
                isDeleted: 1,
            });
            if (result) {
                dispatch(logout());
                localStorage.removeItem('jwt_token');
                setFinPopupState(true);
            } else {
                alert('회원탈퇴 실패');
            }
        } catch (error: any) {
            alert('오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <>
            <TopNaviBarBack pageName="회원 탈퇴" prevPath="/my" />
            <Container>
                <Title>정말 떠나실 건가요?🥺</Title>
                <TextWrapper>
                    <PrecautionsTitle>
                        <FontAwesomeIcon icon={faCircleExclamation} />
                        <span> 탈퇴 시 유의사항을 확인해주세요</span>
                    </PrecautionsTitle>
                    <Precautions>
                        · 회원 탈퇴 시 즉시 탈퇴 처리되며, 복구할 수 없습니다.
                    </Precautions>
                    <Precautions>
                        · 예약 승인 대기, 방문 대기 중인 예약내역이 있을 경우
                        탈퇴할 수 없습니다.
                    </Precautions>
                </TextWrapper>
                <Button text="탈퇴하기" onClick={handleDeleteBtn} />

                {popupState && (
                    <ChoicePopup
                        title="탈퇴를 완료하시겠어요?"
                        contents="탈퇴 시 모든 정보가 사라지며
                    되살릴 수 없습니다."
                        text="탈퇴하기"
                        onClose={closePopup}
                        rightBtn={handlePopupBtn}
                    />
                )}
                {finPopupState && (
                    <ConfirmPopup
                        title="탈퇴가 완료되었습니다"
                        contents="다시 돌아오시는 그날까지 기다릴게요!"
                        onClose={completePopup}
                    />
                )}
                {failPopupState && (
                    <ChoicePopup
                        title="탈퇴 실패🥲"
                        contents="대기중인 예약내역이 있을 경우 탈퇴할 수 없습니다. 예약내역을 확인해주세요."
                        text="예약내역 보기"
                        onClose={closeFailPopup}
                    />
                )}
            </Container>
        </>
    );
}

export default DeleteAccount;

const Container = styled.section`
    margin: 0 20px;
`;

const Title = styled.h1`
    font-size: 28px;
    font-weight: 600;
    line-height: 45px;
    margin: 50px 0 20px 0;
`;

const TextWrapper = styled.div`
    margin-bottom: 80px;
`;

const PrecautionsTitle = styled.h2`
    font-size: 20px;
    padding: 20px 0;
    display: flex;

    span {
        padding: 0 8px;
    }
`;

const Precautions = styled.div`
    padding: 10px 0 0 0;
    line-height: 24px;
`;
