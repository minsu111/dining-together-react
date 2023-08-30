import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { RegionType } from './enum/Enum';

type CheckBoxProps = {
    checkState: boolean;
    type: RegionType;
    onChange: (type: RegionType) => void;
};
function CheckLabel({ checkState, type, onChange }: CheckBoxProps) {
    const [opacity, setOpacity] = useState(checkState ? 1 : 0);

    useEffect(() => {
        setOpacity(checkState ? 1 : 0);
    }, [checkState]);

    const toggleOpacity = () => {
        setOpacity(opacity === 1 ? 0 : 1);
        onChange(type);
    };

    return (
        <Div onClick={toggleOpacity}>
            <FontAwesomeIcon
                icon={faCheck}
                style={{ opacity, color: '#ffb100' }}
            />
            {type}
        </Div>
    );
}

export default CheckLabel;

const Div = styled.div`
    width: 100%;
    height: 70px;
    padding: 0 10px;
    box-sizing: border-box;
    gap: 10px;
    display: flex;
    align-items: center;
    //border: 1px solid black;
    cursor: pointer;
`;
