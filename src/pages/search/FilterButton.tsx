import React from 'react';
import styled from 'styled-components';

const FilterButton: React.FC<{category: string}> = ({category}) => {

    const handleSpanClick = () => {
        alert("FilterButton 클릭");
    };

    return (
        <Button onClick={handleSpanClick}>
            {category}
        </Button> 
    );
};

export default FilterButton;

const Button = styled.button`
    height: 30px;
    margin: 10px 5px;
    padding: 6px 14px;
    color: gray;
    background-color: transparent;
    border: 1px solid #ececec;
    border-radius: 16px;
    cursor: pointer;
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
`;