import React from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Loading() {
    return (
        <FaSpinnerWrapper>
            <FontAwesomeIcon
                icon={faSpinner}
                spin
                style={{ color: '#ffb100', fontSize: '40px' }}
            />
        </FaSpinnerWrapper>
    );
}

export default Loading;

const FaSpinnerWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;
