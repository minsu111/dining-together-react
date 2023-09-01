import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import InfiniteScroll from 'react-infinite-scroll-component';
import backArrowIcon from '../../assets/arrow-left-solid.svg';
import DevideLine from '../../components/common/DevideLine';
import SolidLine from './SolidLine';
import Button from '../../components/common/Button';
import StoreItem from './StoreItem';
import axiosRequest from '../../api/api';

function SearchKeyword() {
    const [keyword, setKeyword] = useState<string>('');
    const [showResult, setShowResult] = useState(false);
    const [data, setData] = useState<StoreType[]>([]);
    const [page, setPage] = useState(0);

    const navigate = useNavigate();
    const handleBackButtonClick = () => {
        navigate(-1); // -1을 전달하여 브라우저 뒤로 가기 동작 수행
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    };

    const keywordSearch = async () => {
        // api 호출
        try {
            console.log('keywordSearch 호출');

            const result = await axiosRequest(
                'GET',
                `/stores/search?searchItem=${keyword}&page=${page + 1}`,
                {},
            );

            setTimeout(() => {
                setData(data.concat(result));
                setPage((prev) => prev + 1);
                setShowResult(true);
            }, 300);

            // console.log('JSON: ', JSON.stringify(result));

            // console.log('result[0]: ', result[0].storeId);

            // console.log('data.length: ', data.length);

            // console.log('result:', result);
        } catch (error: any) {
            const errorStatus = error.status;
            switch (errorStatus) {
                default:
                    alert('오류가 발생했습니다. 다시 한 번 시도해주세요.');
                    break;
            }
            console.log('error:', error);
        }
    };

    return (
        <Section>
            <Div2>
                <HeaderDiv>
                    <BackButton onClick={handleBackButtonClick}>
                        <img src={backArrowIcon} alt="back arrow icon" />
                    </BackButton>

                    <form onSubmit={handleSubmit} id="keywordForm">
                        <Input
                            placeholder="식당명, 키워드로 찾아보세요"
                            onChange={handleInputChange}
                            required
                        />
                    </form>
                </HeaderDiv>
                <DevideLine />

                <ResultDiv isHidden={!showResult} id="resultDiv">
                    <InfiniteScroll
                        dataLength={data.length}
                        next={keywordSearch}
                        hasMore
                        // eslint-disable-next-line react/jsx-no-useless-fragment
                        loader={<></>}
                        scrollableTarget="resultDiv"
                    >
                        {data.map((store) => (
                            <StoreItem
                                isKeywordSearch
                                storeId={store.storeId}
                                imgUrl={store.imageUrl}
                                name={store.storeName}
                                description={store.description}
                            />
                        ))}
                    </InfiniteScroll>
                </ResultDiv>
            </Div2>
            <FooterDiv>
                <SolidLine />
                <div style={{ margin: '20px auto' }}>
                    <Button
                        type="submit"
                        text="검색"
                        onClick={() => {
                            // 입력칸이 비어있지 않은 걸 체크
                            if (keyword) {
                                setShowResult(false);
                                setPage(0);
                                setData([]);

                                keywordSearch();
                            }
                        }}
                        form="keywordForm"
                    />
                </div>
            </FooterDiv>
        </Section>
    );
}

export default SearchKeyword;

const Section = styled.section`
    // width: 390px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Div2 = styled.div`
    height: calc(100% - 93px);
    display: flex;
    flex-direction: column;
`;

const HeaderDiv = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    gap: 7px;
    align-items: center;
`;

const BackButton = styled.button`
    width: 17px;
    margin: 0 6px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const Input = styled.input`
    width: 300px;
    height: 30px;
    background-color: #f0f0f0;
    border-radius: 10px;
    border: none;
    padding-left: 10px;

    &:focus {
        outline: none;
        border-color: transparent;
    }
`;

const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

interface ResultDivProps {
    isHidden: boolean;
}
const ResultDiv = styled.div<ResultDivProps>`
    // flex: 1;
    // //width: 100%;
    // //height: 100%;
    // padding-top: 20px;
    // box-sizing: border-box;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // gap: 30px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }

    ${(props) =>
        props.isHidden &&
        css`
            display: none;
        `}
`;

type AddressType = {
    postalCode: string;
    roadAddress: string;
    detailAddress: string;
};

type OperatingHoursType = {
    openingHour: string;
    openingMinute: string;
    closingHour: string;
    closingMinute: string;
};

type StoreType = {
    storeId: number;
    userId: number;
    storeName: string;
    storeContact: string;
    address: AddressType;
    description: string;
    location: string;
    keyword: string;
    mood: string;
    operatingHours: OperatingHoursType;
    closedDays: string;
    foodCategory: string;
    maxNum: number;
    cost: number;
    isParking: number;
    createdAt: string;
    modifiedAt: string;
    averageRating: number;
    reviewCount: number;
    isDeleted: number;
    imageUrl: string;
};
