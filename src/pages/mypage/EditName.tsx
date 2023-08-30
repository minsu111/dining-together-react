import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import axiosRequest from '../../api/api';
import { login } from '../../app/UserSlice';
import { RootState } from '../../app/store';
import HandleError from '../../api/Error';
import { Wrap, useToast } from '@chakra-ui/react';

function EditName() {
    const [name, setName] = useState<string>('');
    const [toastStage, setToastState] = useState(false);
    const [data, setData] = useState('');

    const navigate = useNavigate();
    const goToMyInfo = () => {
        navigate('/my/info');
    };

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const toast = useToast();

    const showToast = () => {
        if (toastStage) {
            toast({
                description: '이름 변경이 완료되었습니다.',
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

    const editName = async () => {
        const result = await axiosRequest(
            'PUT',
            `/user/${user.userId}`,
            {
                name,
            },
            HandleError,
        );
        if (result) {
            dispatch(
                login({
                    ...user,
                    userName: `${name}`,
                }),
            );
            setToastState(true);
            setData(result);
        }
    };

    return (
        <>
            <TopNaviBarBack pageName="이름 변경" prevPath="/my/info" />
            <Container>
                <Description>
                    회식장소 예약에 필요한 정보이므로 반드시 실명을
                    입력해주세요.
                </Description>
                <div style={{ margin: '10px 0' }}>
                    <Input
                        inputType="text"
                        placeholder="이름을 입력해주세요."
                        onChange={handleName}
                    />
                </div>
                <Button text="변경" onClick={editName} />
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
