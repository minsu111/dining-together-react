import React, { useState } from 'react';
import styled from 'styled-components';
import CheckButton from './CheckButton';

const SelectAtmosphere: React.FC<{ data: string }> = ({ data }) => {
    return (
        <Div>
            <CheckButton name="#조용한" />
            <CheckButton name="#뷰맛집" />
            <CheckButton name="#모던한" />
            <CheckButton name="#비즈니스 미팅" />
            <CheckButton name="#트렌디한" />
            <CheckButton name="#심플한" />
            <CheckButton name="#전통적인" />
            <CheckButton name="#이색적인" />
        </Div>
    );
};

export default SelectAtmosphere;

const Div = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 20px;
    padding-left: 10px;
    box-sizing: border-box;
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    align-content: flex-start;
`;
