import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

type InputProps = {
    label?: string;
    inputType: string;
    placeholder?: string;
    width?: string;
    onBlur?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
    label,
    inputType,
    placeholder,
    width,
    onBlur, 
    onChange, 
}) => {
    const [input, setInput] = useState('');

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        console.log(e.target.value);
    };
    return (
        <InputForm>
            <label htmlFor="input">{label}</label>
            <InputArea
                id="input"
                type={inputType}
                placeholder={placeholder}
                value={input}
                onBlur={onBlur} 
                onChange={(e) => {
                    onChangeInput(e);
                    onChange?.(e);
                }} 
                widthProp={width}
            />
        </InputForm>
    );
};

export default Input;

const InputForm = styled.div`
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 12px;
        font-size: 14px;
        color: #333;
    }
`;

const InputArea = styled.input<{ widthProp?: string }>`
    width: 350px;
    width: ${(props) => props.widthProp || '350px'};
    padding: 15px;
    background-color: #f1f1f1;
    border-radius: 7px;
    border: none;
    outline: none;
    font-size: 14px;

    &::placeholder {
        color: #666;
    }
`; 