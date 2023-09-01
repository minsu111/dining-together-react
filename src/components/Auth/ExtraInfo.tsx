import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Select } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import CommonButton from '../common/Button';
import TagButton from '../common/TagButton';
import axiosRequest from '../../api/api';
import HandleError from '../../api/Error';
import { login } from '../../app/UserSlice';

type ExtraInfoProps = {
    signUpData: {
        userType: string;
        email: string;
        name: string;
        phoneNum: string;
        password: string;
    };
};

const regionButtonNames = [
    '서울 전체',
    '강남',
    '서초',
    '잠실/송파/강동',
    '영등포/여의도/강서',
    '건대/성수/왕십리',
    '종로/중구',
    '홍대/합정/마포',
    '용산/이태원/한남',
    '성북/노원/중랑',
    '구로/관악/동작',
];

const tagButtonNames = [
    '직장 모임',
    '대학교 모임',
    '동아리 모임',
    '비즈니스 미팅',
    '가족 행사',
    '스포츠 동호회',
    '동창회',
    '업계 네트워킹',
    '기타',
];

const ExtraInfo = ({ signUpData }: ExtraInfoProps) => {
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedMeetingTypes, setSelectedMeetingTypes] = useState<string[]>(
        [],
    );
    // const [checkState, setCheckState] = useState(false);

    const handleSelectedRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelectedRegion(selectedValue);
    };

    const handleTagButtonClick = (tagName: string) => {
        if (selectedMeetingTypes.includes(tagName)) {
            setSelectedMeetingTypes(
                selectedMeetingTypes.filter((item) => item !== tagName),
            );
        } else if (selectedMeetingTypes.length < 3) {
            setSelectedMeetingTypes([...selectedMeetingTypes, tagName]);
        }
    };

    const meetingTypes = selectedMeetingTypes.join(',');

    const updatedsignUpData = {
        ...signUpData,
        location: selectedRegion,
        meetingTypes,
    };

    const navigate = useNavigate();
    const goToWelcome = () => {
        navigate('/join/welcome');
    };

    const dispatch = useDispatch();

    const getUserInfo = async (userId: string) => {
        try {
            const result = await axiosRequest('GET', `/user/${userId}`, {});
            dispatch(
                login({
                    userId: `${result.userId}`,
                    userType: `${result.userType}`,
                    userEmail: `${result.email}`,
                    userName: `${result.name}`,
                    userPhoneNum: `${result.phoneNum}`,
                }),
            );
        } catch (error: any) {
            alert('조회 실패');
        }
    };

    const loginConfirm = async (email: string, password: string) => {
        // 로그인 api 호출
        const result = await axiosRequest(
            'POST',
            '/user/login',
            {
                email,
                password,
            },
            HandleError,
        );

        // 로그인 성공 시 로컬스토리지에 토큰 저장 & 홈으로 이동
        const loginToken = result.token;
        localStorage.setItem('jwt_token', loginToken);
        // localStorage.removeItem('userType');
        await getUserInfo(result.userId);
        goToWelcome();
    };

    const handleFinishButton = async () => {
        try {
            const result = await axiosRequest(
                'POST',
                '/user/signup',
                updatedsignUpData,
            );
            if (result) {
                loginConfirm(
                    updatedsignUpData.email,
                    updatedsignUpData.password,
                );
            }
        } catch (error: any) {
            alert('회원가입 실패');
            localStorage.removeItem('userType');
        }
    };

    return (
        <section>
            <Title>
                🍻
                <br />
                회식장소 추천을 위해
                <br />
                추가 정보를 선택해주세요
            </Title>
            <Question>주로 어디서 회식하시나요?</Question>
            <SelectWrapper>
                <Select
                    ml="20px"
                    mr="20px"
                    w="350px"
                    placeholder="지역을 선택해 주세요"
                    value={selectedRegion}
                    onChange={handleSelectedRegion}
                >
                    {regionButtonNames.map((region) => (
                        <option key={region} value={region}>
                            {region}
                        </option>
                    ))}
                </Select>
            </SelectWrapper>

            <Question>
                어떤 모임이 있으신가요?
                <span>
                    <FontAwesomeIcon
                        className="icon"
                        icon={faCircleExclamation}
                    />
                    최대 3개까지 선택 가능합니다.
                </span>
            </Question>
            <TagButtonWrapper>
                {tagButtonNames.map((name) => (
                    <TagButton
                        key={name}
                        name={name}
                        onClick={() => handleTagButtonClick(name)}
                        selectedCnt={selectedMeetingTypes.length}
                    />
                ))}
            </TagButtonWrapper>
            <Wrapper>
                <CommonButton
                    text="선택 완료"
                    onClick={handleFinishButton}
                    disabled={
                        selectedRegion === '' ||
                        selectedMeetingTypes.length === 0
                    }
                />
            </Wrapper>
        </section>
    );
};
export default ExtraInfo;

const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
    padding: 70px 20px 10px 20px;
`;

const Question = styled.h2`
    font-size: 22px;
    font-weight: 500;
    line-height: 30px;
    margin: 40px 20px 10px 20px;
    display: flex;
    flex-direction: column;

    span {
        font-size: 14px;
        color: #767676;
    }

    .icon {
        font-size: 14px;
        padding: 0 4px;
    }
`;

const TagButtonWrapper = styled.div`
    width: 80%;
    margin: 20px 20px;
`;

const Wrapper = styled.div`
    text-align: center;
    margin: 50px 0 20px 0;
`;

const SelectWrapper = styled.div`
    Select {
        font-size: 14px;
        font-weight: 500;
        border-color: #ffb100;
        margin: 0;
    }
`;
