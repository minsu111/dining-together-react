import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    width: 390px;
    height: 48px;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const TopNaviBar: React.FC<{pageName:string}> = ({pageName}) => {

  return (
    <Container>
      <h3>{pageName}</h3>
    </Container>
  );
};


export default TopNaviBar;