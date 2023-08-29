import React from 'react';
import { styled } from 'styled-components';
import TableInfo from '../../components/AddStore/TableInfo';
import TopNaviBar from '../../components/common/TopNaviBar';
import Button from '../../components/common/Button';

function AddStoreDetail() {
    return (
        <section>
            <Header>
                <TopNaviBar pageName='자리 등록' />
            </Header>
            <Inner>
                <TableInfo  handleChangeInfo={() => {}} /> 
            </Inner>
        </section>
    );
}

export default AddStoreDetail;

const Header = styled.header`
    width: 100%;
    border-bottom: 1px solid #999;
    padding-left: 10px;
`

const Inner = styled.div`
    margin: 0 auto;
    width: 350px;
    height: 100%;
    position: relative;
`;
