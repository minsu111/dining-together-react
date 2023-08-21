import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchInput: React.FC<{onInputChange:(React.ChangeEventHandler<HTMLInputElement>)}> = ({onInputChange}) => 
{
    return (
        <Div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <Input onChange={onInputChange} placeholder="식당명, 키워드로 찾아보세요"/>
        </Div>
    );
};

export default SearchInput;

const Div = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    padding-left: 15px;
    //border: 1px solid black;
`;

const Input = styled.input`
    width: 100%;
    margin: 0 7px;
    padding: 0;
    font-size: 15px;
    border: none;
    &:focus {
        outline: none !important;
      }
`;