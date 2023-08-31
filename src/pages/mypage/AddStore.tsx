import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import Button from '../../components/common/Button';
import StepBar from '../../components/AddStore/StepBar';

import StoreForm1st from '../../components/AddStore/StoreForm1st';
import StoreForm2nd from '../../components/AddStore/StoreForm2nd';
import StoreForm3rd from '../../components/AddStore/StoreForm3rd';
import StoreForm4th from '../../components/AddStore/StoreForm4th';
import StoreForm5th from '../../components/AddStore/StoreForm5th';

function AddStore() {
    const user = useSelector((state: RootState) => state.user);

    const userType: string | null = localStorage.getItem('userType');
    const navigate = useNavigate();

    // paging
    const [step, setStep] = useState<number>(0);

    // page_1
    const [storeName, setStoreName] = useState<string>('');
    const [storeContact, setStoreContact] = useState<string>('');

    const [zipCode, setZipcode] = useState<string>('');
    const [roadAddress, setRoadAddress] = useState<string>('');
    const [detailAddress, setDetailAddress] = useState<string>('');

    const [location, setLocation] = useState<string>('');

    // page_2
    const [foodCategory, setFoodCategory] = useState<string>('');
    const [mood, setMood] = useState<string[]>([]);
    const [isParking, setIsParking] = useState<string>('');

    // page_3
    const [openingHour, setOpeningHour] = useState<string>('');
    const [openingMinute, setOpeningMinute] = useState<string>('');
    const [closingHour, setClosingHour] = useState<string>('');
    const [closingMinute, setClosingMinute] = useState<string>('');
    const [dayoff1, setDayoff1] = useState<string>('');
    const [dayoff2, setDayoff2] = useState<string>('');
    const [cost, setCost] = useState<string>('');
    const [maxNum, setMaxNum] = useState<string>('');

    // page_4
    const [description, setDescription] = useState<string>('');
    const [keyword1, setKeyword1] = useState<string>('');
    const [keyword2, setKeyword2] = useState<string>('');
    const [keyword3, setKeyword3] = useState<string>('');

    const handleChangeInfo = (key: string, value: string) => {
        if (key === 'storeName') setStoreName(value);
        if (key === 'storeContact') setStoreContact(value);
        if (key === 'zipCode') setZipcode(value);
        if (key === 'roadAddress') setRoadAddress(value);
        if (key === 'detailAddress') setDetailAddress(value);
        if (key === 'location') setLocation(value);
        if (key === 'foodCategory') setFoodCategory(value);
        if (key === 'isParking') setIsParking(value);
        if (key === 'openingHour') setOpeningHour(value);
        if (key === 'openingMinute') setOpeningMinute(value);
        if (key === 'closingHour') setClosingHour(value);
        if (key === 'closingMinute') setClosingMinute(value);
        if (key === 'maxNum') setMaxNum(value);
        if (key === 'dayoff1') setDayoff1(value);
        if (key === 'dayoff2') setDayoff2(value);
        if (key === 'cost') setCost(value);
        if (key === 'description') setDescription(value);
        if (key === 'keyword1') setKeyword1(value);
        if (key === 'keyword2') setKeyword2(value);
        if (key === 'keyword3') setKeyword3(value);
    };

    const handleChangeArrayInfo = (key: string, value: string[]) => {
        if (key === 'mood') setMood(value);
    };

    const combineKeywords = (keywords: string[]): string => {
        return keywords.join(',');
    };

    const submitStoreInfo = () => {
        const combinedMood = combineKeywords(mood);
        let dayoff;
        if (dayoff1 === '없음') {
            dayoff = dayoff1;
        } else {
            dayoff = `${dayoff1} ${dayoff2}`;
        }

        const keywordArray = [keyword1, keyword2, keyword3];
        const filteredKeywords = keywordArray.filter(
            (keyword) =>
                keyword !== '' && keyword !== null && keyword !== undefined,
        );

        const combinedKeyword = filteredKeywords.join(',');

        const storeData = {
            userId: 'user1234',
            storeName,
            storeContact,
            address: {
                postalCode: zipCode,
                roadAddress,
                detailAddress,
            },
            location,
            keyword: combinedKeyword,
            mood: combinedMood,
            operatingHours: {
                openingHour,
                openingMinute,
                closingHour,
                closingMinute,
            },
            closedDays: dayoff,
            foodCategory,
            isParking: Number(isParking),
            description,
            maxNum: Number(maxNum),
            cost: Number(cost),
            storeImage: '사진.jpg',
        };
        console.log(storeData);
        // navigate('/my/store/fin');
    };

    if (userType === '1') {
        return (
            <section>
                <Header>
                    <TopNaviBarBack pageName="가게등록" prevPath="" />
                </Header>
                <Inner>
                    {userType === '1' && <h2>비정상적인 접근입니다🙅‍♀️</h2>}
                </Inner>
            </section>
        );
    }

    /* 다음 버튼 눌렀을 때 이벤트 */
    const handleNextButton = () => {
        // if (step === 0) {
        //     if (storeName === '' || storeContact=== ''|| zipCode === '') {
        //         alert('입력되지않은 항목이 있습니다');
        //         return;
        //     }
        //     // if (storeName === '') {
        //     //     alert('가게이름이 입력되지 않았습니다');
        //     //    8 return;
        //     // }
        // }

        setStep((prev) => prev + 1);
    };

    return (
        <section>
            <Header>
                <TopNaviBarBack pageName="가게등록" prevPath="" />
            </Header>
            <Inner>
                {step === 0 && (
                    <StoreForm1st
                        storeName={storeName}
                        storeContact={storeContact}
                        zipCode={zipCode}
                        roadAddress={roadAddress}
                        detailAddress={detailAddress}
                        location={location}
                        handleChangeInfo={handleChangeInfo}
                    />
                )}
                {step === 1 && (
                    <StoreForm2nd
                        foodCategory={foodCategory}
                        mood={mood}
                        isParking={isParking}
                        handleChangeInfo={handleChangeInfo}
                        handleChangeArrayInfo={handleChangeArrayInfo}
                    />
                )}
                {step === 2 && (
                    <StoreForm3rd
                        openingHour={openingHour}
                        openingMinute={openingMinute}
                        closingHour={closingHour}
                        closingMinute={closingMinute}
                        dayoff1={dayoff1}
                        dayoff2={dayoff2}
                        cost={cost}
                        maxNum={maxNum}
                        handleChangeInfo={handleChangeInfo}
                    />
                )}
                {step === 3 && (
                    <StoreForm4th
                        description={description}
                        keyword1={keyword1}
                        keyword2={keyword2}
                        keyword3={keyword3}
                        handleChangeInfo={handleChangeInfo}
                    />
                )}
                {step === 4 && <StoreForm5th />}

                <div className="bottom-area">
                    <Step>
                        <div className="step-area">
                            <StepBar step={step} />
                            {step + 1} / 5
                        </div>
                    </Step>

                    <ButtonSC>
                        {step > 0 && (
                            <Button
                                text="이전"
                                width="150px"
                                backgroundColor="#E2E2E3"
                                textColor="#000"
                                onClick={() => {
                                    setStep((prev) => prev - 1);
                                }}
                            />
                        )}
                        {step > 0 && step < 4 && (
                            <Button
                                text="다음"
                                width="150px"
                                // onClick={handleNextButton}
                                onClick={() => {
                                    setStep((prev) => prev + 1);
                                }}
                            />
                        )}
                        {step === 0 && (
                            <Button text="다음" onClick={handleNextButton} />
                        )}
                        {step === 4 && (
                            <Button
                                type="submit"
                                text="등록"
                                width="150px"
                                onClick={submitStoreInfo}
                            />
                        )}
                    </ButtonSC>
                </div>
            </Inner>
        </section>
    );
}

export default AddStore;

const Header = styled.header`
    width: 100%;
    border-bottom: 1px solid #999;
    padding-left: 10px;
`;

const Inner = styled.div`
    margin: 0 auto;
    width: 350px;
    position: relative;
    padding-top: 20px;

    .bottom-area {
        width: 100%;
        position: absolute;
        bottom: 20px;
    }

    h2 {
        text-align: center;
    }
`;

const Step = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .step-area {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const ButtonSC = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;
