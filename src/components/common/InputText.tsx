import * as React from 'react';
import styled from 'styled-components';

type InputTextAreaProps = {
    prop1: {
        value: string;
    };
    prop2: {
        value: string;
    };
};

const InputTextArea: React.FC<InputTextAreaProps> = ({ prop1, prop2 }) => {
    return (
        <InputTextAreaSC>
            <label htmlFor="input">{prop1.value}</label>
            <input
                id="input"
                type="text"
                placeholder={prop2.value}
            ></input>
        </InputTextAreaSC>
    );
};

export default InputTextArea;

const InputTextAreaSC = styled.div`
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 12px;
        font-size: 14px;
        color: #333;
    }

    input {
        width: 350px;
        padding: 15px;
        background-color: #f1f1f1;
        border-radius: 7px;
        border: none;
        outline: none;
        font-size: 16px;
    }

    input::placeholder {
        color: #666;
    }
`;
