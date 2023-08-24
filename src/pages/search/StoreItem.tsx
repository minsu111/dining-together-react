import React from 'react';
import styled from 'styled-components';

type StoreInfoProps = {
    isKeywordSearch?: boolean;
    name: string;
    description: string;
    subInfo?: string;
    price?: string;
};

const StoreItem: React.FC<StoreInfoProps> = (props) => {
    return (
        <Div>
            <div
                style={{
                    width: 80,
                    height: 80,
                    backgroundColor: 'lightgray',
                    border: '2px solid gray',
                }}
            >
                가게사진
            </div>

            <InfoDiv>
                <InfoSubDiv>
                    <StoreName>{props.name}</StoreName>
                    <StoreDesc>{props.description}</StoreDesc>
                </InfoSubDiv>
                <InfoSubDiv className={props.isKeywordSearch ? 'isHide' : ''}>
                    <StoreEtcInfo>{props.subInfo}</StoreEtcInfo>
                    <StoreEtcInfo>{props.price}</StoreEtcInfo>
                </InfoSubDiv>
            </InfoDiv>
        </Div>
    );
};

export default StoreItem;

const Div = styled.div`
    width: 350px;
    height: 100px;
    //border: 1px solid;
    display: flex;
`;

const InfoDiv = styled.div`
    width: 250px;
    height: 100%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const InfoSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    &.isHide {
        display: none;
    }
`;

const StoreName = styled.h1`
    font-size: 24px;
    font-weight: 800;
`;

const StoreDesc = styled.p`
    font-size: 12px;
    font-weight: bold;
`;

const StoreEtcInfo = styled.p`
    font-size: 12px;
    color: lightgray;
`;