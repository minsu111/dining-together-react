import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Select } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import CommonButton from '../common/Button';
import TagButton from '../common/TagButton';
import axiosRequest from '../../api/api';

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
    console.log(
        '🚀 ~ file: ExtraInfo.tsx:72 ~ ExtraInfo ~ updatedsignUpData:',
        updatedsignUpData,
    );

    const navigate = useNavigate();
    const goToWelcome = () => {
        navigate('/join/welcome');
    };

    const loginConfirm = async (email: string, password: string) => {
        // 로그인 api 호출
        try {
            const result = await axiosRequest('POST', '/user/login', {
                email,
                password,
            });
            // 로컬스토리지에 토큰 저장
            const loginToken = result.token;
            localStorage.setItem('jwt_token', loginToken);

            // const decodedToken = jwt.verify(loginToken, '');
            // console.log(decodedToken);

            goToWelcome();
        } catch (error: any) {
            alert(
                `오류가 발생했습니다. 다시 한 번 시도해주세요. 
                    ${error.data.status}`,
            );
        }
    };

    const handleFinishButton = async () => {
        try {
            const result = await axiosRequest(
                'POST',
                '/user/signup',
                updatedsignUpData,
            );
            loginConfirm(updatedsignUpData.email, updatedsignUpData.password);
            console.log(
                '🚀 ~ file: Login.tsx:37 ~ loginConfirm ~ result:',
                result,
            );
        } catch (error: any) {
            alert('회원가입 실패');
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

            <Question>어떤 모임이 있으신가요?</Question>
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
    font-weight: 700;
    line-height: 40px;
    padding: 70px 20px 10px 20px;
`;

const Question = styled.h2`
    font-size: 22px;
    font-weight: 500;
    line-height: 30px;
    margin: 30px 20px 20px 20px;
`;

const TagButtonWrapper = styled.div`
    width: 80%;
    margin: 10px 20px;
`;

const Wrapper = styled.div`
    text-align: center;
    margin: 50px 0 20px 0;
`;
