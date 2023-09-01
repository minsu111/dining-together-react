import React from 'react';
import styled from 'styled-components';

function Exit(props:{onClick:()=> void}){
    return(
        <ExitButton onClick={props.onClick}>
            ×
        </ExitButton>
    )
}

export default Exit;

const ExitButton = styled.div`
position: absolute;
top: -60px;
font-size: 50px;
color: #FFFFFF;
cursor: pointer;
`