import * as React from 'react';
import styled from 'styled-components';

type CustomInputProps = {
    name?: string;
    label?: string;
    inputType: string;
    placeholder?: string;
    maxLength?: number;
    value: string;
    width?: string;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput: React.FC<CustomInputProps> = ({
    name,
    label,
    inputType,
    placeholder,
    maxLength,
    value,
    width,
    onBlur,
    onChange,
}) => {
    return (
        <InputForm>
            <label htmlFor="input">{label}</label>
            <InputArea
                id="input"
                name={name}
                type={inputType}
                placeholder={placeholder}
                maxLength={maxLength}
                value={value}
                onBlur={onBlur}
                onChange={(e) => {
                    onChange(e);
                }}
                widthProp={width}
            />
        </InputForm>
    );
};

export default CustomInput;

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
