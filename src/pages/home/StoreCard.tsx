import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

type StoreCardProps = {
    imageUrl: string;
    storeName: string;
    minCount: number;
    maxCount: number;
    foodCategory: string;
    storeUrl: string;
};

const StoreCard = (props: StoreCardProps) => {
    const navigate = useNavigate();
    return (
        <Card onClick={()=>{navigate(props.storeUrl)}}>
            <Image alt="" src={`http://13.209.102.55/${props.imageUrl}`}/>
            <h5>{props.storeName}</h5>
            <p>
                {props.minCount} ~ {props.maxCount}명 · {props.foodCategory}
            </p>
        </Card>
    );
};

export default StoreCard;

const Image = styled.img`
    width: 124px;
    height: 124px;
    border-radius: 10px;
    object-fit: cover;
`;
const Card = styled.div`
    width: 124px;
    height: 172px;
    margin-left: 10px;
    h5 {
        margin-top: 3px;
        padding-left: 3px;
        font-size: 14px;
        font-weight: bold;
    }
    p {
        padding-left: 3px;
        margin-top: 3px;
        font-size: 12px;
    }
    `;