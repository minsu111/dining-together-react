import React from 'react';
import styled from 'styled-components';

type StepBarProps = {
    step: number;
};

const StepBar: React.FC<StepBarProps> = ({ step }) => {
    return <StyledStepBar step={step} />;
};

const StyledStepBar = styled.div<StepBarProps>`
    width: 200px;
    height: 5px;
    background-color: #d9d9d9;
    border-radius: 10px;
    position: relative;
    margin-bottom: 10px;

    &::after {
        content: '';
        display: block;
        height: 5px;
        border-radius: 10px;
        background-color: #ffb100;

        position: absolute;
        left: 0;
        top: 0;
        transition: width 0.3s ease-in-out;
        width: ${(props) => {
            if (props.step === 0) return '20%';
            if (props.step === 1) return '40%';
            if (props.step === 2) return '60%';
            if (props.step === 3) return '80%';
            return '100%';
        }};
    }
`;

export default StepBar;
