import React from 'react';
import styled from 'styled-components';
import TopNaviBar from '../../components/common/TopNaviBar';
import SearchInput from './SearchInput';
import DatetimeSelector from './DatetimeSelector';
import FilterList from './FilterList';
import DevideLine from '../../components/common/DevideLine';
import MainButton from '../../components/common/MainButton';
import GNBArea from '../../components/common/GNB';

function Search() {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    return (
        <section>         
            <Div>
                <div>
                    <TopNaviBar pageName='검색하기'></TopNaviBar>
                    <SearchInput onInputChange={handleInputChange}></SearchInput>
                    <SolidLine></SolidLine>
                    <DatetimeSelector></DatetimeSelector>
                    <SolidLine></SolidLine>
                    <FilterList></FilterList>
                    <DevideLine></DevideLine>
                </div>
                <div style={{margin: "0 auto"}}>
                    <MainButton value="검색"></MainButton>
                </div>
            </Div>
            
            <footer>
                <GNBArea></GNBArea>
            </footer>
        </section>
    );
}

export default Search;

const Div = styled.div`
    width: 390px;
    height: calc(100vh - 65px);
    //border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const SolidLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ececec;
`;
