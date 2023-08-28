import React, { useState , useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import TopNaviBarBack from '../../components/common/TopNaviBarBack';
import Button from '../../components/common/Button';
import StepBar from '../../components/AddStore/StepBar';

import StoreForm1st from '../../components/AddStore/StoreForm1st';
import StoreForm2nd from '../../components/AddStore/StoreForm2nd';
import StoreForm3rd from '../../components/AddStore/StoreForm3rd';
import StoreForm4th from '../../components/AddStore/StoreForm4th';
import StoreForm5th from '../../components/AddStore/StoreForm5th';

function AddStore() {
    const userType: string | null = localStorage.getItem('userType');
    const userId = localStorage.getItem('userId');
    const navigate = useNavigate();

    // paging
    const [step, setStep] = useState(0);

    // page_1
    const [storeName, setStoreName] = useState('');
    const [storeContact, setStoreContact] = useState('');
    
    // page_2
    const [foodCategory, setFoodCategory] = useState('');
    const [storeMood, setStoreMood] = useState('');
    const [isParking, setIsParking] = useState('');
    // page_4
    const [description, setDescription] = useState('');
    const [keyword, setKeyword] = useState('');

    const handleChangeInfo = (key:string, value:string) => {
        if (key === 'storeName') setStoreName(value);
        if (key === 'storeContact') setStoreContact(value);
        if (key === 'foodCategory') setFoodCategory(value);
        if (key === 'storeMood') setStoreMood(value);
        if (key === 'isParking') setIsParking(value);
        if (key === 'description') setDescription(value);
        if (key === 'keyword') setKeyword(value);
        
    }

    const combineKeywords = (keywords: string[]): string => {
        return keywords.join(', ');
    };
    const submitStoreInfo = () => {

        const combinedKeyword = combineKeywords(keyword.split(' '));

        const storeData = {
            userId,
            storeName,
            storeContact,
            foodCategory,
            storeMood,
            isParking,
            description,
            keyword: combinedKeyword,
        };
        console.log(storeData);
        // navigate('/my/store/fin'); 
    }


    return (
    
        <section>
            <Header>
                <TopNaviBarBack pageName="가게등록" prevPath="" />
            </Header>
            <Inner>
                {userType === '1' && (
                    <h2>비정상적인 접근입니다🙅‍♀️</h2>
                )}

                {step === 0 && <StoreForm1st storeName={storeName} storeContact={storeContact} handleChangeInfo={handleChangeInfo} /> }
                {/* {step === 1 && <StoreForm2nd foodCategory={foodCategory} storeMood={storeMood} isParking={isParking} handleChangeInfo={handleChangeInfo}/>} */}
                {step === 1 && <StoreForm3rd />} 
                {step === 2 && <StoreForm3rd />}
                {step === 3 && <StoreForm4th description={description} keyword={keyword}  handleChangeInfo={handleChangeInfo} />}
                {step === 4 && <StoreForm5th />}

                <div className="bottom-area">
                <Step> 
                    <div className="step-area">
                        <StepBar step={step} />
                        {step + 1} / 5 
                    </div>
                </Step>

                <ButtonSC>
                    {step > 0 && <Button text='이전' width='150px' backgroundColor='#E2E2E3' textColor='#000' onClick={() => {setStep((prev) => prev - 1)}}/>}
                    {step > 0 && step < 4 && <Button text='다음' width='150px' onClick={() => {setStep((prev) => prev + 1)}} />}
                    {step === 0 && <Button text='다음' onClick={() => {setStep((prev) => prev + 1)}} />}
                    {step === 4 && <Button type='submit' text='등록' width='150px' onClick={submitStoreInfo} />}
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
`

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
`

const ButtonSC = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`