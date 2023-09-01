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
    const Image = styled.img`
        width: 124px;
        height: 124px;
        border-radius: 10px;
    `;
    const Card = styled.div`
        width: 124px;
        height: 172px;
        margin-left: 10px;
        h5 {
            font-size: 14px;
        }
        p {
            font-size: 12px;
        }
    `;
    const navigate = useNavigate();
    return (
        <Card onClick={()=>{navigate(props.storeUrl)}}>
            <Image alt="" src={props.imageUrl}/>
            <h5>{props.storeName}</h5>
            <p>
                {props.minCount} ~ {props.maxCount}명 · {props.foodCategory}
            </p>
        </Card>
    );
};

export default StoreCard;