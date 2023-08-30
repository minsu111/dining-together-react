import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import axiosRequest from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useNavigate } from 'react-router-dom';
import { login } from '../../app/UserSlice';
import HandleError from '../../api/Error';
import { useToast } from '@chakra-ui/react';

function EditPhoneNum() {
    const [phoneNum, setPhoneNum] = useState<string>('');
    const [toastStage, setToastState] = useState(false);
    const [data, setData] = useState('');

    const navigate = useNavigate();
    const goToMyInfo = () => {
        navigate('/my/info');
    };
    const handleNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNum(e.target.value);
    };

    const toast = useToast();

    const showToast = () => {
        if (toastStage) {
            toast({
                description: '휴대폰 번호 변경이 완료되었습니다.',
                status: 'success',
                duration: 3000,
                // isClosable: true,
            });
            goToMyInfo();
        }
    };

    useEffect(() => {
        showToast();
    }, [data]);

    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const editPhoneNum = async () => {
        const result = await axiosRequest(
            'PUT',
            `/user/${user.userId}`,
            {
                phoneNum,
            },
            HandleError,
        );
        if (result) {
            dispatch(
                login({
                    ...user,
                    userPhoneNum: `${phoneNum}`,
                }),
            );
            setToastState(true);
            setData(result);
        }
    };
    return (
        <>
            <TopNaviBarBack pageName="휴대폰 번호 변경" prevPath="/my" />
            <Container>
                <Description>
                    회식장소 예약에 필요한 정보이므로 반드시 실제 번호를
                    입력해주세요.
                </Description>
                <div style={{ margin: '10px 0' }}>
                    <Input
                        inputType="number"
                        placeholder="휴대폰 번호를 입력해주세요."
                        onChange={handleNum}
                    />
                </div>
                <Button
                    text="변경"
                    onClick={() => {
                        editPhoneNum();
                    }}
                />
            </Container>
        </>
    );
}

export default EditPhoneNum;

const Container = styled.section`
    margin: 0 20px;
`;

const Description = styled.div`
    font-size: 12px;
    margin-top: 30px;
`;
