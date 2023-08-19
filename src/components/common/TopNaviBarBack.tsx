import React from 'react';
import styled from 'styled-components';
import backArrowIcon from '../../assets/arrow-left-solid.svg';

const Container = styled.div`
  width: 390px;
  height: 48px;
  // border: 1px solid black;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Button = styled.button`
  width: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const TopNaviBarBack: React.FC<{pageName: string, prevPath: string}> = ({pageName, prevPath}) => {

    const handleButtonClick = () => {
        alert(`이동할 경로: ${prevPath}`);
      };

      return (
        <Container>
          <Button onClick={handleButtonClick}>
            <img src={backArrowIcon} alt='back arrow icon'/>
          </Button>
          <h3>{pageName}</h3>
        </Container>
      );
};


export default TopNaviBarBack;