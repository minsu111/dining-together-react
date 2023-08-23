import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';


const TopNaviBarReset: React.FC<{pageName: string, onClickReset: () => void}> = ({pageName, onClickReset}) => {

      return (
        <Container>
          <H3>{pageName}</H3>
          <Button onClick={onClickReset}>
            <FontAwesomeIcon icon={faRotate} style={{color: "#FFB100"}}/>
            <Text> 초기화</Text>
          </Button>
        </Container>
      );
};


export default TopNaviBarReset;


const Container = styled.div`
    width: 390px;
    height: 48px;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
`;

const H3 = styled.h3`
    font-size: 18px;
    font-weight: 600;
`;

const Button = styled.button`
    width: 80px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const Text = styled.span`
    color: #FFB100;
`;