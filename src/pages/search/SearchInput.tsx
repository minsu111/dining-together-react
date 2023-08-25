import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchInput: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <Div onClick={onClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <Span>식당명, 키워드로 찾아보세요</Span>
        </Div>
    );
};

export default SearchInput;

const Div = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 15px;
    //border: 1px solid black;
`;

const Span = styled.span`
    width: 100%;
    margin: 0 10px;
    padding: 0;
    font-size: 15px;
    cursor: pointer;
`;
