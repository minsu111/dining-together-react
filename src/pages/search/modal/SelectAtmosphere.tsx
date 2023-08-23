import React, { useState } from 'react';
import styled from 'styled-components';
import CheckButton from './CheckButton';

const SelectAtmosphere: React.FC<{ data: string }> = ({ data }) => {
    return (
        <Div>
            <CheckButton name="#비즈니스미팅" />
            <CheckButton name="#직장모임" />
            <CheckButton name="#대학생모임" />
            <CheckButton name="#밝은" />
            <CheckButton name="#전통적인" />
            <CheckButton name="#트렌디한" />
        </Div>
    );
};

export default SelectAtmosphere;

const Div = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 20px;
    box-sizing: border-box;
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
`;
