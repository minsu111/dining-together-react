import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faUtensils, faWonSign, faChair, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FilterType } from "./Enum";

const FilterButtonInModal: React.FC<{filterType: FilterType, selectData: string}> = ({filterType, selectData}) => {

    const data = selectData === '' ? '미선택' : selectData;

    let icon: IconProp;
    switch(filterType){
        case FilterType.Region:
            icon = faLocationDot;
            break;
        case FilterType.FoodType:
            icon = faUtensils;
            break;  
        case FilterType.PricePerPerson:
            icon = faWonSign;
            break;
        case FilterType.Atmosphere:
            icon = faFaceSmile;
            break;
        default: // FilterType.Seat:
            icon = faChair;
            break;
    }


    return (
        <Div>
            <LeftDiv>
                <FontAwesomeIcon icon={icon} />
            </LeftDiv>
            <CenterDiv>
                <span>{`${filterType}`}</span>
                <p style={{color: data === "미선택" ? "gray" : "#FFB100"}}>{data}</p>
            </CenterDiv>
            <RightDiv>
                <FontAwesomeIcon icon={faChevronRight}/>
            </RightDiv>
        </Div>
    );
};

export default FilterButtonInModal;

const Div = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    //border: 1px solid black;
`;

const LeftDiv = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 13px;
`;

const CenterDiv = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding-top: 13px;
`;

const RightDiv = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;