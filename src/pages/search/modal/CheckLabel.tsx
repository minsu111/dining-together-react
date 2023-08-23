import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CheckLabel: React.FC<{ name: string }> = ({ name }) => {
    const [opacity, setOpacity] = useState(0);

    const toggleOpacity = () => {
        setOpacity(opacity === 1 ? 0 : 1);
    };

    return (
        <Div onClick={toggleOpacity}>
            <FontAwesomeIcon
                icon={faCheck}
                style={{ opacity, color: '#ffb100' }}
            />
            {name}
        </Div>
    );
};

export default CheckLabel;

const Div = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 10px;
    box-sizing: border-box;
    gap: 10px;
    display: flex;
    align-items: center;
    //border: 1px solid black;
    cursor: pointer;
`;
